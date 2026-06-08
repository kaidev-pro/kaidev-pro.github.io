"use client";

import { useState, useEffect } from "react";

const TITLES = [
  "Developer & Entrepreneur",
  "Full-Stack Developer",
  "Founder of 8Agents & RakuSaku",
  "AI Platform Builder",
];

export function TypingEffect() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const currentTitle = TITLES[titleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          setText(currentTitle.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);

          if (charIndex + 1 === currentTitle.length) {
            // Pause before deleting
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          // Deleting
          setText(currentTitle.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);

          if (charIndex - 1 === 0) {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % TITLES.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <span>
      {text}
      <span className="animate-pulse text-purple-400">|</span>
    </span>
  );
}
