import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  revealDirection?: 'start' | 'end' | 'center';
  characters?: string;
  className?: string;
  encryptedClassName?: string;
  animateOn?: 'view' | 'hover' | 'click';
}

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  revealDirection = 'start',
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
  className = '',
  encryptedClassName = '',
  animateOn = 'hover',
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef(null);
  const isView = useInView(containerRef, { once: true });

  const triggerDecrypt = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    let iteration = 0;
    
    intervalRef.current = setInterval(() => {
      setDisplayText(() => 
        text.split('').map((char, index) => {
          if (char === ' ') return ' ';
          if (iteration >= maxIterations) return text[index];
          return characters[Math.floor(Math.random() * characters.length)];
        }).join('')
      );

      if (iteration >= maxIterations) {
        clearInterval(intervalRef.current!);
        setIsAnimating(false);
      }
      iteration++;
    }, speed);
  }, [text, speed, maxIterations, characters, isAnimating]);

  useEffect(() => {
    if (animateOn === 'view' && isView) {
      triggerDecrypt();
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [animateOn, triggerDecrypt, isView]);

  return (
    <motion.span 
      ref={containerRef}
      className={className}
      onMouseEnter={() => animateOn === 'hover' && triggerDecrypt()}
      onClick={() => animateOn === 'click' && triggerDecrypt()}
    >
      {displayText}
    </motion.span>
  );
}
