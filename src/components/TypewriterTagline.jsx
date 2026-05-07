import { useEffect, useMemo, useState } from 'react';
import './TypewriterTagline.css';

const TYPE_SPEED = 54;
const DELETE_SPEED = 28;
const PAUSE_TIME = 1350;

function randomIndex(length, currentIndex = -1) {
  if (length <= 1) return 0;

  let nextIndex = currentIndex;
  while (nextIndex === currentIndex) {
    nextIndex = Math.floor(Math.random() * length);
  }

  return nextIndex;
}

export default function TypewriterTagline({ texts = [], className = '' }) {
  const options = useMemo(
    () => texts.map((text) => String(text).trim()).filter(Boolean),
    [texts]
  );

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(() => randomIndex(options.length));
  const [displayedText, setDisplayedText] = useState('');
  const [phase, setPhase] = useState('typing');
  const [wordCycle, setWordCycle] = useState(0);

  const currentText = options[currentIndex] || '';
  const longestTextLength = Math.max(12, ...options.map((text) => text.length));

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();
    mediaQuery.addEventListener('change', updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener('change', updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (!options.length) return;

    const nextIndex = randomIndex(options.length);
    setCurrentIndex(nextIndex);
    setDisplayedText(prefersReducedMotion ? options[nextIndex] : '');
    setPhase(prefersReducedMotion ? 'idle' : 'typing');
    setWordCycle((cycle) => cycle + 1);
  }, [options, prefersReducedMotion]);

  useEffect(() => {
    if (!currentText || prefersReducedMotion) {
      setDisplayedText(currentText);
      return undefined;
    }

    let timeoutId;

    if (phase === 'typing') {
      if (displayedText.length < currentText.length) {
        timeoutId = window.setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, TYPE_SPEED + Math.random() * 38);
      } else {
        timeoutId = window.setTimeout(() => {
          setPhase('deleting');
        }, PAUSE_TIME);
      }
    }

    if (phase === 'deleting') {
      if (displayedText.length > 0) {
        timeoutId = window.setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, DELETE_SPEED);
      } else {
        setCurrentIndex((index) => randomIndex(options.length, index));
        setPhase('typing');
        setWordCycle((cycle) => cycle + 1);
      }
    }

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [currentText, displayedText, options.length, phase, prefersReducedMotion]);

  if (!options.length) return null;

  return (
    <span
      className={['typewriter-tagline', className].filter(Boolean).join(' ')}
      style={{ '--typewriter-min-width': `${longestTextLength}ch` }}
      role="text"
      aria-live="polite"
      aria-label={currentText}
    >
      <span
        key={wordCycle}
        className="typewriter-tagline__text"
        aria-hidden="true"
      >
        {displayedText}
      </span>
      <span className="typewriter-tagline__cursor" aria-hidden="true" />
    </span>
  );
}
