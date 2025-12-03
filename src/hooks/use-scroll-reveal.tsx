import { useEffect, useRef } from 'react';

export function useScrollReveal<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add('animate-[fadeInUp_0.6s_ease_both]');
            observer.unobserve(element);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1, ...(options || {}) }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}


