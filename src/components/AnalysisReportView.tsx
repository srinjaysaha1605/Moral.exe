import React, { useState, useEffect } from 'react';
import { FinalBehavioralResult } from '../types/moral';
import { generateBadgeDataUrl } from '../utils/badgeGenerator';
import { ShieldAlert, Download, Share2, Sparkles, RefreshCw, Terminal, CheckCircle2, Cpu, Loader2, ArrowRight } from 'lucide-react';

interface AnalysisReportViewProps {
  result: FinalBehavioralResult;
  onTakeAnother: () => void;
}

export const AnalysisReportView: React.FC<AnalysisReportViewProps> = ({
  result,
  onTakeAnother,
}) => {
  const [report, setReport] = useState<{
    executiveSummary: string;
    dimensionalBreakdown: string;
    strategicRecommendations: string;
  } | null>(null);
  const [isGeneratingReport, setIsGeneratingReport] = useState<boolean>(true);
  const [badgeDataUrl, setBadgeDataUrl] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchAiAnalysis() {
      setIsGeneratingReport(true);
      try {
        const response = await fetch('/api/moral/generate-analysis', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            experimentTitle: result.experiment.title,
            archetype: result.archetype,
            scores: result.scores,
            contradiction: result.contradiction,
            answersHistory: result.answersHistory,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          if (data.report && isMounted) {
            setReport(data.report);
            setIsGeneratingReport(false);
            return;
          }
        }
      } catch (e) {
        // Fallback
      }

      if (isMounted) {
        setReport({
          executiveSummary: result.archetype.summary,
          dimensionalBreakdown: 'Analysis derived from deterministic dimensional scoring.',
          strategicRecommendations: result.contradiction.detail,
        });
        setIsGeneratingReport(false);
      }
    }

    fetchAiAnalysis();

    return () => {
      isMounted = false;
    };
  }, [result]);

  // Generate Badge Image Canvas
  useEffect(() => {
    if (!result) return;
    const dimensionsList = result.experiment.dimensions.map((dim) => ({
      name: dim.name,
      score: result.scores[dim.id] || 0,
    }));

    const url = generateBadgeDataUrl({
      experimentTitle: result.experiment.title,
      archetypeTitle: result.archetype.title,
      archetypeColor: result.archetype.color,
      contradictionHeadline: result.contradiction.headline,
      dateStr: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
      dimensions: dimensionsList,
    });

    setBadgeDataUrl(url);
  }, [result]);

  const handleDownloadBadge = () => {
    if (!badgeDataUrl) return;
    const a = document.createElement('a');
    a.href = badgeDataUrl;
    a.download = `MORAL_EXE_${result.experiment.id}_BADGE.png`;
    a.click();
  };

  const handleCopySummary = () => {
    const text = `[MORAL.EXE EVALUATION REPORT]\nEXPERIMENT: ${result.experiment.title}\nARCHETYPE: ${result.archetype.title}\nCONTRADICTION: "${result.contradiction.headline}"\n${result.contradiction.detail}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-neutral-100 py-8 px-4 sm:px-6 lg:px-8 font-sans select-none">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Results Top Header */}
        <div className="bg-black border border-neutral-800 p-6 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF003C]" style={{ fontFamily: "'Chakra Petch', sans-serif" }}>
                <Terminal className="w-4 h-4" />
                <span>TEST RESULTS</span>
              </div>
              <h1 
                className="text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white"
                style={{ fontFamily: "'Chakra Petch', sans-serif" }}
              >
                {result.experiment.title}
              </h1>
            </div>

            <div className="flex items-center gap-2" style={{ fontFamily: "'Chakra Petch', sans-serif" }}>
              <button
                onClick={handleCopySummary}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-black text-neutral-300 border border-neutral-800 hover:border-[#FF003C] text-xs font-bold uppercase cursor-pointer"
              >
                {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5 text-[#FF003C]" />}
                <span>{copied ? 'COPIED!' : 'SHARE'}</span>
              </button>

              <button
                onClick={onTakeAnother}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FF003C] hover:bg-[#FF003C]/90 text-black font-bold text-xs uppercase cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>CHOOSE ANOTHER TEST</span>
              </button>
            </div>
          </div>
        </div>

        {/* SINGLE EASY-TO-READ INSIGHTS CARD */}
        <div className="bg-black border-2 border-neutral-800 p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
            <span className="text-xs font-mono font-bold text-[#FF003C] uppercase tracking-wider" style={{ fontFamily: "'Chakra Petch', sans-serif" }}>
              YOUR DECISION PROFILE & INSIGHTS
            </span>
            <Sparkles className="w-4 h-4 text-[#FF003C]" />
          </div>

          {/* Archetype Profile */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block" style={{ fontFamily: "'Chakra Petch', sans-serif" }}>
              RESULT ARCHETYPE
            </span>
            <h2
              className="text-2xl sm:text-3xl font-mono font-bold uppercase"
              style={{ color: result.archetype.color || '#FF003C' }}
            >
              {result.archetype.title}
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed font-sans">
              {result.archetype.summary}
            </p>
          </div>

          <div className="border-t border-neutral-800 pt-6 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400 font-bold" style={{ fontFamily: "'Chakra Petch', sans-serif" }}>
              <ShieldAlert className="w-4 h-4 text-purple-400" />
              <span>KEY DECISION TAKEAWAY</span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white font-sans">
              "{result.contradiction.headline}"
            </h3>

            <p className="text-sm text-neutral-300 leading-relaxed font-sans">
              {result.contradiction.detail}
            </p>
          </div>

          {/* AI Analysis Summary if loading or loaded */}
          {isGeneratingReport ? (
            <div className="border-t border-neutral-800 pt-6 py-4 text-center space-y-2">
              <Loader2 className="w-6 h-6 text-[#FF003C] animate-spin mx-auto" />
              <p className="font-mono text-xs text-neutral-400" style={{ fontFamily: "'Chakra Petch', sans-serif" }}>
                Generating summary...
              </p>
            </div>
          ) : report ? (
            <div className="border-t border-neutral-800 pt-6 space-y-4 font-sans">
              <span className="text-xs font-mono text-[#FF003C] font-bold uppercase tracking-wider block" style={{ fontFamily: "'Chakra Petch', sans-serif" }}>
                SUMMARY & RECOMMENDATION
              </span>

              <div className="space-y-3 text-sm text-neutral-300 leading-relaxed bg-neutral-950 p-4 border border-neutral-800">
                <p><strong className="text-white">Overview:</strong> {report.executiveSummary}</p>
                <p><strong className="text-white">Pattern:</strong> {report.dimensionalBreakdown}</p>
                <p><strong className="text-white">Advice:</strong> {report.strategicRecommendations}</p>
              </div>
            </div>
          ) : null}
        </div>

        {/* Badge Certificate & PNG Download Card */}
        {badgeDataUrl && (
          <div className="bg-black border border-neutral-800 p-6 sm:p-8 space-y-6 text-center">
            <h3 className="text-base font-mono font-bold text-white flex items-center justify-center gap-2" style={{ fontFamily: "'Chakra Petch', sans-serif" }}>
              <Download className="w-4 h-4 text-[#FF003C]" />
              <span>RESULT BADGE</span>
            </h3>

            <div className="max-w-md mx-auto overflow-hidden border-2 border-[#FF003C]">
              <img
                src={badgeDataUrl}
                alt="Behavioral Badge"
                className="w-full h-auto object-contain"
              />
            </div>

            <div>
              <button
                onClick={handleDownloadBadge}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF003C] hover:bg-[#FF003C]/90 text-black font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                style={{ fontFamily: "'Chakra Petch', sans-serif" }}
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD BADGE</span>
              </button>
            </div>
          </div>
        )}

        {/* Bottom CTA to take another test */}
        <div className="pt-4 text-center">
          <button
            onClick={onTakeAnother}
            className="inline-flex items-center gap-2 px-8 py-4 bg-black hover:bg-[#FF003C] text-[#FF003C] hover:text-black border border-[#FF003C] font-mono text-sm font-bold transition-all uppercase tracking-wider cursor-pointer"
            style={{ fontFamily: "'Chakra Petch', sans-serif" }}
          >
            <span>TAKE ANOTHER TEST</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
