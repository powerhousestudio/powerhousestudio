// Typewriter effect hook — cycles through words with typing and deleting animation

import { useState, useEffect } from 'react';

/**
 * @param {string[]} words - Array of words to cycle through
 * @param {{ typeSpeed?: number, deleteSpeed?: number, pauseMs?: number }} speeds - Animation timing
 * @returns {{ typed: string }} Current typed text
 */
export function useTypewriter(words, { typeSpeed = 85, deleteSpeed = 55, pauseMs = 2000 } = {}) {
  const [typed, setTyped] = useState('');
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const w = words[wi];
    const t = setTimeout(() => {
      if (!del && ci < w.length) {
        setTyped(w.slice(0, ci + 1));
        setCi((c) => c + 1);
      } else if (!del && ci === w.length) {
        setTimeout(() => setDel(true), pauseMs);
      } else if (del && ci > 0) {
        setTyped(w.slice(0, ci - 1));
        setCi((c) => c - 1);
      } else {
        setDel(false);
        setWi((i) => (i + 1) % words.length);
      }
    }, del ? deleteSpeed : typeSpeed);
    return () => clearTimeout(t);
  }, [ci, del, wi, words, typeSpeed, deleteSpeed, pauseMs]);

  return { typed };
}
