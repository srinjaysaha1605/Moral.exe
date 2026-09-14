import React, { useMemo } from 'react';
import { EXPERIMENTS } from '../data/experiments';
import { ExperimentConfig } from '../types/moral';
import { ArrowRight, Filter } from 'lucide-react';

interface ExperimentCatalogueProps {
  onSelectExperiment: (exp: ExperimentConfig) => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export const ExperimentCatalogue: React.FC<ExperimentCatalogueProps> = ({
  onSelectExperiment,
  searchQuery = '',
  onSearchChange,
}) => {
  const filteredExperiments = useMemo(() => {
    return EXPERIMENTS.filter((exp) => {
      const query = (searchQuery || '').toLowerCase().trim();
      if (!query) return true;
      return (
        (exp.title || '').toLowerCase().includes(query) ||
        (exp.tagline || '').toLowerCase().includes(query) ||
        (exp.description || exp.subtitle || '').toLowerCase().includes(query) ||
        (exp.category || '').toLowerCase().includes(query)
      );
    });
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-black text-neutral-100 py-6 px-4 sm:px-6 lg:px-8 font-sans select-none">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Experiment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperiments.map((exp) => (
            <div
              key={exp.id}
              onClick={() => onSelectExperiment(exp)}
              className="group relative bg-black border-2 border-neutral-800 hover:border-[#FF003C] p-6 transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2" style={{ fontFamily: "'Chakra Petch', sans-serif" }}>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-black border border-[#FF003C]/40 text-[#FF003C] tracking-wider uppercase">
                    {exp.category}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-xl font-bold font-mono text-white group-hover:text-[#FF003C] transition-colors uppercase tracking-tight">
                    {exp.title}
                  </h3>
                  <p className="text-xs font-mono text-[#FF003C] mt-1 tracking-wide">
                    "{exp.tagline}"
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {exp.description || exp.subtitle}
                </p>
              </div>

              {/* Action Launch Button */}
              <div className="pt-6">
                <button 
                  className="w-full flex items-center justify-center gap-2 py-3 bg-black border-2 border-[#FF003C] text-[#FF003C] font-bold text-xs group-hover:bg-[#FF003C] group-hover:text-black transition-all uppercase tracking-wider"
                  style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                >
                  <span>START TEST</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredExperiments.length === 0 && (
          <div className="text-center py-16 bg-black border border-neutral-800 space-y-3">
            <Filter className="w-8 h-8 text-neutral-600 mx-auto" />
            <p className="font-mono text-sm text-neutral-400">No tests matched your search query.</p>
            {onSearchChange && (
              <button
                onClick={() => onSearchChange('')}
                className="text-xs font-mono text-[#FF003C] hover:underline uppercase"
              >
                Clear Search
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
