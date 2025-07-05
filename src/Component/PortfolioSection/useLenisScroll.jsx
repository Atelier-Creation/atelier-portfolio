import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useLenisScroll({
  lerp = 0.08,
  duration = 1.2,
  wheelMultiplier = 0.8,
  touchMultiplier = 1.5,
} = {}) {
  useEffect(() => {
    /* ---------- bootstrap Lenis ---------- */
    const lenis = new Lenis({
      lerp,
      duration,
      wheelMultiplier,
      touchMultiplier,
      smoothWheel: true,
      smoothTouch: true,
      gestureOrientation: 'vertical',
      normalizeWheel: true,
    });

    /* ---------- RAF loop ---------- */
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    /* ---------- Sync with ScrollTrigger ---------- */
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length
          ? lenis.scrollTo(value, { immediate: true })
          : lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    lenis.on('scroll', ScrollTrigger.update);
    ScrollTrigger.refresh();

    /* ---------- Resize handler ---------- */
    const onResize = () => {
      lenis.resize();
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', onResize);

    /* ---------- Clean‑up ---------- */
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.removeEventListener('resize', onResize);
    };
  }, [lerp, duration, wheelMultiplier, touchMultiplier]);
}
