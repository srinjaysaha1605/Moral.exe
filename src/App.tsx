import React, { useState } from 'react';
import { ExperimentConfig, FinalBehavioralResult } from './types/moral';
import { EXPERIMENTAL_PROBES } from './data/experiments';
import { Navbar } from './components/Navbar';
import { IntroScreenView } from './components/IntroScreenView';
import { LandingView } from './components/LandingView';
import { ExperimentCatalogue } from './components/ExperimentCatalogue';
import { ExperimentSession } from './components/ExperimentSession';
import { AnalysisReportView } from './components/AnalysisReportView';

export default function App() {
  const [currentView, setCurrentView] = useState<'intro' | 'landing' | 'catalogue' | 'session' | 'analysis'>('intro');
  const [selectedExperiment, setSelectedExperiment] = useState<ExperimentConfig | null>(null);
  const [analysisResult, setAnalysisResult] = useState<FinalBehavioralResult | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleFinishIntro = () => {
    setCurrentView('landing');
  };

  const handleStartProbe = () => {
    const randomIndex = Math.floor(Math.random() * EXPERIMENTAL_PROBES.length);
    const randomExp = EXPERIMENTAL_PROBES[randomIndex] || EXPERIMENTAL_PROBES[0];
    setSelectedExperiment(randomExp);
    setCurrentView('session');
  };

  const handleOpenCatalogue = () => {
    setCurrentView('catalogue');
  };

  const handleSelectExperiment = (experiment: ExperimentConfig) => {
    setSelectedExperiment(experiment);
    setCurrentView('session');
  };

  const handleCompleteSession = (result: FinalBehavioralResult) => {
    setAnalysisResult(result);
    setCurrentView('analysis');
  };

  const handleGoToLanding = () => {
    setCurrentView('landing');
    setSelectedExperiment(null);
    setAnalysisResult(null);
  };

  const handleGoToCatalogue = () => {
    setCurrentView('catalogue');
    setSelectedExperiment(null);
    setAnalysisResult(null);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-[#FF003C] selection:text-black">
      {currentView === 'intro' ? (
        <IntroScreenView onEnter={handleFinishIntro} />
      ) : (
        <>
          {currentView !== 'landing' && (
            <Navbar
              currentView={currentView}
              experimentTitle={selectedExperiment?.title}
              onGoToLanding={handleGoToLanding}
              onGoToCatalogue={handleGoToCatalogue}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          )}

          <main className="flex-1">
            {currentView === 'landing' && (
              <LandingView
                onStartProbe={handleStartProbe}
                onOpenCatalogue={handleOpenCatalogue}
                onOpenIntro={() => setCurrentView('intro')}
              />
            )}

            {currentView === 'catalogue' && (
              <ExperimentCatalogue
                onSelectExperiment={handleSelectExperiment}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
              />
            )}

            {currentView === 'session' && selectedExperiment && (
              <ExperimentSession
                experiment={selectedExperiment}
                onComplete={handleCompleteSession}
                onCancel={handleGoToLanding}
              />
            )}

            {currentView === 'analysis' && analysisResult && (
              <AnalysisReportView
                result={analysisResult}
                onTakeAnother={handleGoToCatalogue}
              />
            )}
          </main>
        </>
      )}
    </div>
  );
}

