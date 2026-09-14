import React from 'react';
import { ShieldAlert, Grid, ArrowLeft, Search } from 'lucide-react';
import { GiEyeOfHorus } from 'react-icons/gi';

interface NavbarProps {
  currentView: 'landing' | 'catalogue' | 'session' | 'analysis';
  experimentTitle?: string;
  onGoToLanding: () => void;
  onGoToCatalogue: () => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  experimentTitle,
  onGoToLanding,
  onGoToCatalogue,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-neutral-800 text-neutral-100 px-4 py-3 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Logo with Doctor Glitch Font */}
        <div 
          onClick={onGoToLanding} 
          className="flex items-center gap-3 cursor-pointer group select-none shrink-0"
        >
          <div className="w-9 h-9 bg-black border border-[#FF003C] flex items-center justify-center text-[#FF003C] group-hover:bg-[#FF003C] group-hover:text-black transition-all">
            <GiEyeOfHorus className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span 
                className="text-lg sm:text-xl tracking-wider select-none uppercase font-glitch"
                style={{ fontFamily: "'Doctor Glitch', 'Rubik Glitch', sans-serif" }}
              >
                <span className="text-white">MORAL.</span>
                <span className="text-[#FF003C]">EXE</span>
              </span>
            </div>
          </div>
        </div>

        {/* Dynamic Center Probe Title */}
        {currentView !== 'landing' && currentView !== 'catalogue' && experimentTitle && (
          <div 
            className="hidden md:flex items-center gap-2 bg-neutral-900 border border-neutral-700 px-3.5 py-1 text-xs font-mono"
            style={{ fontFamily: "'Chakra Petch', sans-serif" }}
          >
            <ShieldAlert className="w-3.5 h-3.5 text-[#FF003C]" />
            <span className="text-neutral-400">TEST:</span>
            <span className="text-white font-bold tracking-wide uppercase truncate max-w-[240px]">
              {experimentTitle}
            </span>
          </div>
        )}

        {/* Right Navigation */}
        <div className="flex items-center gap-2 sm:gap-3">
          {currentView === 'catalogue' && onSearchChange && (
            <div className="relative w-36 sm:w-60" style={{ fontFamily: "'Chakra Petch', sans-serif" }}>
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-500" />
              <input
                type="text"
                placeholder="SEARCH TESTS..."
                value={searchQuery || ''}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-black border border-neutral-800 focus:border-[#FF003C] text-xs text-white placeholder-neutral-600 pl-8 pr-2.5 py-1.5 focus:outline-none tracking-wide"
              />
            </div>
          )}

          {currentView !== 'landing' && (
            <button
              onClick={onGoToLanding}
              className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-black hover:bg-[#FF003C] text-[#FF003C] hover:text-black border border-[#FF003C] transition-all uppercase shrink-0"
              style={{ fontFamily: "'Chakra Petch', sans-serif" }}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">HOME</span>
            </button>
          )}

          {currentView !== 'catalogue' && (
            <button
              onClick={onGoToCatalogue}
              className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-[#FF003C] hover:bg-[#FF003C]/90 text-black border border-[#FF003C] transition-all uppercase shrink-0"
              style={{ fontFamily: "'Chakra Petch', sans-serif" }}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>BROWSE TESTS</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};


