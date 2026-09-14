import React, { useState, useEffect, useCallback } from 'react';
import { ExperimentConfig, Question, UserAnswerRecord, FinalBehavioralResult } from '../types/moral';
import { selectNextQuestion } from '../engine/adaptive';
import { calculateNormalizedScores } from '../engine/scoring';
import { determineArchetype } from '../engine/archetype';
import { detectContradiction } from '../engine/contradiction';
import { FALLBACK_QUESTION_BANKS } from '../data/fallbackQuestions';
import { Play, Sparkles, Terminal, Activity, ArrowRight, CheckCircle2, ShieldAlert, Cpu, Loader2 } from 'lucide-react';

interface ExperimentSessionProps {
  experiment: ExperimentConfig;
  onComplete: (result: FinalBehavioralResult) => void;
  onCancel: () => void;
}

export const ExperimentSession: React.FC<ExperimentSessionProps> = ({
  experiment,
  onComplete,
  onCancel,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [answersHistory, setAnswersHistory] = useState<UserAnswerRecord[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isLoadingQuestion, setIsLoadingQuestion] = useState<boolean>(true);
  const [isSubmittingAnswer, setIsSubmittingAnswer] = useState<boolean>(false);

  // Request tracker ref to prevent out-of-order/duplicate overwrite race conditions
  const requestIdRef = React.useRef<number>(0);
  const hasMountedRef = React.useRef<boolean>(false);

  // Load question for current step cleanly with strict request cancellation
  const loadQuestionForStep = useCallback(async (step: number, history: UserAnswerRecord[]) => {
    const activeRequestId = ++requestIdRef.current;
    setIsLoadingQuestion(true);
    setSelectedOptionIndex(null);

    // Compute target dimension based on step and history
    const previousScenarioTexts = history.map((h) => h.questionScenario || '');
    
    // Attempt dynamic AI generation from server route first
    try {
      const response = await fetch('/api/moral/generate-question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          experimentId: experiment.id,
          experimentTitle: experiment.title,
          stepNumber: step,
          targetDimensionId: experiment.dimensions[(step - 1) % experiment.dimensions.length].id,
          scenarioType: step > 5 ? 'tension_escalation' : 'subtle_dilemma',
          difficulty: step > 7 ? 'high_pressure' : 'baseline',
          previousScenarios: previousScenarioTexts,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Ensure this response matches the current active request before setting state
        if (requestIdRef.current === activeRequestId && data.success && data.question) {
          setCurrentQuestion(data.question);
          setIsLoadingQuestion(false);
          return;
        }
      }
    } catch (e) {
      // Fallback below
    }

    // Ignore stale request if a newer one was initiated
    if (requestIdRef.current !== activeRequestId) return;

    // Fallback: Use static deterministic fallback questions
    const fallbackBank = FALLBACK_QUESTION_BANKS[experiment.id] || FALLBACK_QUESTION_BANKS['exp1_racist'] || [];
    const adaptiveSelected = selectNextQuestion(step, history, experiment, fallbackBank);
    
    if (requestIdRef.current === activeRequestId) {
      setCurrentQuestion(adaptiveSelected);
      setIsLoadingQuestion(false);
    }
  }, [experiment]);

  // Initial load - executed strictly once on initial mount
  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      loadQuestionForStep(1, []);
    }
  }, [loadQuestionForStep]);

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLoadingQuestion || isSubmittingAnswer || !currentQuestion) return;
      if (['1', '2', '3', '4'].includes(e.key)) {
        const index = parseInt(e.key) - 1;
        if (index < currentQuestion.options.length) {
          handleSelectOption(index);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLoadingQuestion, isSubmittingAnswer, currentQuestion]);

  const handleSelectOption = (index: number) => {
    if (isLoadingQuestion || isSubmittingAnswer || !currentQuestion) return;
    setSelectedOptionIndex(index);
  };

  const handleConfirmAnswer = async () => {
    if (selectedOptionIndex === null || !currentQuestion || isSubmittingAnswer) return;

    setIsSubmittingAnswer(true);

    const chosenOption = currentQuestion.options[selectedOptionIndex];
    const newRecord: UserAnswerRecord = {
      stepNumber: currentStep,
      questionId: currentQuestion.id,
      questionScenario: currentQuestion.scenario,
      dimensionId: currentQuestion.targetDimensionId,
      selectedOptionIndex,
      selectedOptionText: chosenOption.text,
      selectedOptionWeight: chosenOption.weight,
      scenarioType: currentQuestion.scenarioType,
      difficulty: currentQuestion.difficulty,
    };

    const updatedHistory = [...answersHistory, newRecord];
    setAnswersHistory(updatedHistory);

    if (currentStep >= 10) {
      // Final Step Reached: Process deterministic behavioral calculations
      const finalScores = calculateNormalizedScores(updatedHistory, experiment);
      const finalArchetype = determineArchetype(finalScores, experiment);
      const finalContradiction = detectContradiction(updatedHistory, finalScores, experiment);

      onComplete({
        experiment,
        scores: finalScores,
        archetype: finalArchetype,
        contradiction: finalContradiction,
        answersHistory: updatedHistory,
      });
    } else {
      // Advance to next step
      const nextStepNum = currentStep + 1;
      setCurrentStep(nextStepNum);
      await loadQuestionForStep(nextStepNum, updatedHistory);
      setIsSubmittingAnswer(false);
    }
  };

  const progressPercent = Math.round((currentStep / 10) * 100);

  return (
    <div className="min-h-screen bg-black text-neutral-100 py-8 px-4 sm:px-6 lg:px-8 font-sans select-none">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Top Session Status Header */}
        <div className="bg-black border border-neutral-800 p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-black border border-[#FF003C] flex items-center justify-center text-[#FF003C] font-mono text-sm font-bold">
              #{currentStep}
            </div>
            <div>
              <h2 className="font-mono font-bold text-sm text-white uppercase">{experiment.title}</h2>
              <p className="text-xs text-neutral-400 font-mono" style={{ fontFamily: "'Chakra Petch', sans-serif" }}>
                QUESTION {currentStep} OF 10
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4" style={{ fontFamily: "'Chakra Petch', sans-serif" }}>
            <div className="w-32 sm:w-48 bg-black h-2 overflow-hidden border border-neutral-800">
              <div
                className="bg-[#FF003C] h-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="font-mono text-xs font-bold text-[#FF003C]">{progressPercent}%</span>
            
            <button
              onClick={onCancel}
              className="text-xs font-bold px-2.5 py-1 bg-black text-neutral-400 border border-neutral-800 hover:text-white hover:border-[#FF003C] uppercase transition-all"
            >
              EXIT
            </button>
          </div>
        </div>

        {/* Question Runner Card */}
        <div className="bg-black border border-neutral-800 p-6 sm:p-8 space-y-6">
          {isLoadingQuestion ? (
            <div className="py-20 text-center space-y-4">
              <Loader2 className="w-10 h-10 text-[#FF003C] animate-spin mx-auto" />
              <div className="font-mono text-xs text-neutral-400" style={{ fontFamily: "'Chakra Petch', sans-serif" }}>
                Loading question #{currentStep}...
              </div>
            </div>
          ) : currentQuestion ? (
            <>
              {/* Question Metadata Tags */}
              <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-neutral-400 border-b border-neutral-800/80 pb-3" style={{ fontFamily: "'Chakra Petch', sans-serif" }}>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-black text-[#FF003C] border border-[#FF003C]/50 font-bold uppercase">
                    FOCUS: {(currentQuestion.targetDimensionId || 'GENERAL').toUpperCase()}
                  </span>
                  <span className="px-2 py-0.5 bg-black text-neutral-300 border border-neutral-800 font-bold uppercase">
                    QUESTION
                  </span>
                </div>
                <div className="flex items-center gap-1 text-neutral-500">
                  <Terminal className="w-3 h-3" />
                  <span>KEYBOARD: PRESS 1-4</span>
                </div>
              </div>

              {/* Scenario Prompt Text */}
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg text-white font-sans leading-relaxed">
                  {currentQuestion.scenario}
                </h3>
              </div>

              {/* 4 Choices Grid */}
              <div className="space-y-3 pt-2">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = selectedOptionIndex === idx;
                  const keyNum = idx + 1;

                  return (
                    <div
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`group relative p-4 border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                        isSelected
                          ? 'bg-[#FF003C]/10 border-[#FF003C] text-white'
                          : 'bg-black border-neutral-800 hover:border-neutral-600 text-neutral-300 hover:text-white'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`w-6 h-6 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5 ${
                            isSelected
                              ? 'bg-[#FF003C] text-black'
                              : 'bg-neutral-900 text-neutral-400 group-hover:bg-neutral-800 border border-neutral-700'
                          }`}
                        >
                          {keyNum}
                        </span>
                        <span className="text-xs sm:text-sm font-sans leading-relaxed">
                          {option.text}
                        </span>
                      </div>

                      {isSelected && (
                        <CheckCircle2 className="w-5 h-5 text-[#FF003C] shrink-0" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Confirm / Continue Button */}
              <div className="pt-4 border-t border-neutral-800 flex justify-end">
                <button
                  disabled={selectedOptionIndex === null || isSubmittingAnswer}
                  onClick={handleConfirmAnswer}
                  className={`flex items-center gap-2 px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider transition-all ${
                    selectedOptionIndex !== null && !isSubmittingAnswer
                      ? 'bg-[#FF003C] hover:bg-[#FF003C]/90 text-black cursor-pointer'
                      : 'bg-neutral-900 text-neutral-600 border border-neutral-800 cursor-not-allowed'
                  }`}
                  style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                >
                  {isSubmittingAnswer ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>RECORDING CHOICE...</span>
                    </>
                  ) : currentStep === 10 ? (
                    <span>VIEW RESULTS</span>
                  ) : (
                    <>
                      <span>NEXT QUESTION</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};
