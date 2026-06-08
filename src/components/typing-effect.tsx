"use client";

import { useState, useEffect } from "react";

const TITLES = [
  { text: "Developer & Entrepreneur", highlight: false },
  { text: "Full-Stack Developer", highlight: false },
  { text: "Founder of ", highlight: false, brand1: "8Agents", brand2: "RakuSaku" },
  { text: "AI Platform Builder", highlight: false },
];

export function TypingEffect() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const current = TITLES[titleIndex];
    const fullText = current.brand1
      ? current.text + current.brand1 + " & " + current.brand2
      : current.text;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(fullText.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);

          if (charIndex + 1 === fullText.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setText(fullText.slice(0, charIndex - 1));
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

  // Render with brand colors
  const renderText = () => {
    const current = TITLES[titleIndex];
    if (current.brand1 && text.includes(current.brand1)) {
      const before = text.split(current.brand1)[0];
      const afterBrand1 = text.includes(" & " + current.brand2)
        ? text.split(" & " + current.brand2)
        : null;

      if (afterBrand1) {
        const middle = afterBrand1[0].split(current.brand1)[1];
        return (
          <>
            {before}
            <span className="text-orange-400">{current.brand1}</span>
            {middle}
            <span className="text-pink-400">{current.brand2}</span>
          </>
        );
      }

      // Still typing brand1 or between brands
      const brandStart = text.indexOf(current.brand1);
      if (brandStart >= 0) {
        const beforeText = text.slice(0, brandStart);
        const brandText = text.slice(brandStart);
        const isBrand1 = !text.includes(" & ");
        return (
          <>
            {beforeText}
            <span className={isBrand1 ? "text-orange-400" : ""}>
              {isBrand1 ? brandText : current.brand1}
            </span>
            {!isBrand1 && (
              <span className="text-pink-400">
                {brandText.replace(current.brand1, "")}
              </span>
            )}
          </>
        );
      }
    }

    return text;
  };

  return (
    <span>
      {renderText()}
      <span className="animate-pulse text-purple-400">|</span>
    </span>
  );
}
