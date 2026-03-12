import React, { useState, useEffect } from "react";

const ScrollProgress = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const percent = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollPercent(percent);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-1 bg-[var(--border)] transition-colors duration-300"
      role="progressbar"
      aria-valuenow={Math.round(scrollPercent)}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div
        className="h-full bg-[var(--accent)] transition-all duration-150 ease-out"
        style={{ width: `${scrollPercent}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
