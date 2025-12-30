"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Star = ({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) => {
  return (
    <motion.div
      className="absolute rounded-full bg-white"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
      }}
      animate={{
        opacity: [0, 1, 0.5, 1, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        delay: delay,
      }}
    />
  );
};

export const BackgroundStars = () => {
    const [stars, setStars] = useState<{x: number; y: number; size: number; delay: number}[]>([]);

    useEffect(() => {
        const generateStars = () => {
            const numStars = 100;
            const newStars = Array.from({ length: numStars }).map(() => ({
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 2 + 1,
                delay: Math.random() * 5,
            }));
            setStars(newStars);
        }
        generateStars();
    }, [])
  

  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent dark:from-black/80"></div>
      {stars.map((star, index) => (
        <Star key={index} {...star} />
      ))}
    </div>
  );
};
