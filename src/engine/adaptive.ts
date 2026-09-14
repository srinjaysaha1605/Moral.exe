import { DimensionDefinition, ExperimentConfig, Question, UserAnswerRecord } from '../types/moral';

export interface AdaptiveTarget {
  targetDimensionId: string;
  scenarioType: string;
  difficulty: 'STANDARD' | 'COMPLEX' | 'AMBIGUOUS' | 'TRAP';
}

export function selectNextAdaptiveTarget(
  currentScores: Record<string, number>,
  dimensions: DimensionDefinition[],
  scenarioTypes: string[],
  answersHistory: UserAnswerRecord[],
  stepNumber: number
): AdaptiveTarget {
  const isTrapStep = (stepNumber === 5 || stepNumber === 8) && answersHistory.length >= 4;

  const targetCounts: Record<string, number> = {};
  for (const dim of dimensions) {
    targetCounts[dim.id] = 0;
  }

  for (const record of answersHistory) {
    const dimId = record.dimensionId || record.question?.targetDimensionId;
    if (dimId && targetCounts[dimId] !== undefined) {
      targetCounts[dimId]++;
    }
  }

  let selectedDim = dimensions[0];
  let minTestedCount = Infinity;
  let maxAmbiguity = -1;

  for (const dim of dimensions) {
    const count = targetCounts[dim.id] ?? 0;
    const score = currentScores[dim.id] ?? 50;
    const distanceTo50 = Math.abs(score - 50);
    const ambiguity = 50 - distanceTo50;

    if (count < minTestedCount) {
      minTestedCount = count;
      maxAmbiguity = ambiguity;
      selectedDim = dim;
    } else if (count === minTestedCount && ambiguity > maxAmbiguity) {
      maxAmbiguity = ambiguity;
      selectedDim = dim;
    }
  }

  const scenarioTypeIdx = (stepNumber - 1) % scenarioTypes.length;
  const scenarioType = isTrapStep ? 'TRAP_PARADOX' : scenarioTypes[scenarioTypeIdx] || scenarioTypes[0];

  let difficulty: AdaptiveTarget['difficulty'] = 'STANDARD';
  if (isTrapStep) {
    difficulty = 'TRAP';
  } else if (stepNumber >= 7) {
    difficulty = 'AMBIGUOUS';
  } else if (stepNumber >= 4) {
    difficulty = 'COMPLEX';
  }

  return {
    targetDimensionId: selectedDim.id,
    scenarioType,
    difficulty,
  };
}

export function selectNextQuestion(
  stepNumber: number,
  answersHistory: UserAnswerRecord[],
  experiment: ExperimentConfig,
  fallbackBank: Question[]
): Question {
  if (fallbackBank && fallbackBank.length > 0) {
    const questionIndex = (stepNumber - 1) % fallbackBank.length;
    return fallbackBank[questionIndex];
  }

  const targetDimension = experiment.dimensions[(stepNumber - 1) % experiment.dimensions.length];
  return {
    id: `fallback_q_${stepNumber}`,
    experimentId: experiment.id,
    scenario: `You are placed in a high-stakes decision scenario testing ${targetDimension.name.toLowerCase()}.`,
    targetDimensionId: targetDimension.id,
    scenarioType: stepNumber > 5 ? 'tension_escalation' : 'subtle_dilemma',
    difficulty: stepNumber > 7 ? 'high_pressure' : 'baseline',
    options: [
      { text: 'Option A: Prioritize immediate safety and standard protocol.', weight: 0.0, code: 'A' },
      { text: 'Option B: Compromise to balance competing interests.', weight: 0.33, code: 'B' },
      { text: 'Option C: Take calculated risk for higher outcome.', weight: 0.66, code: 'C' },
      { text: 'Option D: Take full bold responsibility regardless of risk.', weight: 1.0, code: 'D' },
    ],
  };
}
