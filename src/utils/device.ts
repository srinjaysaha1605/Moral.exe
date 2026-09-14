import { useState, useEffect } from 'react';

/**
 * Utility to reliably detect smartphones and tablets.
 * Laptops and desktops (pointer: fine, mouse/trackpad, standard desktop OS) return false.
 */
export function isMobileOrTabletDevice(): boolean {
  if (typeof window === 'undefined') return false;

  // Primary check: primary pointer is coarse (finger touch on phone/tablet)
  const hasCoarsePointer = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;

  // Mobile or tablet user agent signature
  const ua = navigator.userAgent || '';
  const isMobileOrTabletUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Tablet|Mobile/i.test(
    ua
  );

  // iPadOS 13+ detection (reports as MacIntel but has multi-touch support)
  const isIPadOS = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

  // Touch capability verification
  const hasTouchCapability = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // Must have touch capability and (coarse pointer OR mobile/tablet UA)
  return hasTouchCapability && (hasCoarsePointer || isMobileOrTabletUA || isIPadOS);
}

/**
 * React hook to reactively check if user is on a smartphone or tablet.
 */
export function useIsMobileOrTablet(): boolean {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState<boolean>(() => isMobileOrTabletDevice());

  useEffect(() => {
    const check = () => {
      setIsMobileOrTablet(isMobileOrTabletDevice());
    };

    check();

    const mql = window.matchMedia?.('(pointer: coarse)');
    if (mql?.addEventListener) {
      mql.addEventListener('change', check);
      return () => mql.removeEventListener('change', check);
    } else if (mql?.addListener) {
      mql.addListener(check);
      return () => mql.removeListener(check);
    }
  }, []);

  return isMobileOrTablet;
}
