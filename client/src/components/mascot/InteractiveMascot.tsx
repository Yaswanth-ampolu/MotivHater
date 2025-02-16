import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function InteractiveMascot() {
  const mascotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mascot = mascotRef.current;
    if (!mascot) return;

    const animate = () => {
      gsap.to(mascot, {
        y: Math.sin(Date.now() / 1000) * 10,
        duration: 0.1,
        ease: "none"
      });
      requestAnimationFrame(animate);
    };

    const animation = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <div 
      ref={mascotRef}
      className="relative w-[300px] h-[300px]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <svg
        viewBox="0 0 300 300"
        className="w-full h-full"
        style={{ filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25))" }}
      >
        {/* Rick-inspired scientist robot */}
        <g className="transform-origin-center">
          {/* Head */}
          <path
            d="M150 50 C 230 50, 250 150, 250 200 C 250 270, 200 300, 150 300 C 100 300, 50 270, 50 200 C 50 150, 70 50, 150 50"
            fill="#97DFFD"
            className={isHovering ? "animate-pulse" : ""}
          />

          {/* Wild hair */}
          <path
            d="M100 60 C 150 0, 200 20, 250 60"
            stroke="#B4E4FD"
            strokeWidth="20"
            fill="none"
          />

          {/* Eyes */}
          <g className="animate-bounce">
            <circle cx="120" cy="150" r="20" fill="white" />
            <circle cx="180" cy="150" r="20" fill="white" />
            <circle cx="120" cy="150" r="10" fill="black" className="animate-spin" />
            <circle cx="180" cy="150" r="10" fill="black" className="animate-spin" />
          </g>

          {/* Mouth */}
          <path
            d="M120 220 C 150 240, 180 220, 180 220"
            stroke="white"
            strokeWidth="8"
            fill="none"
            className={isHovering ? "animate-bounce" : ""}
          />

          {/* Lab coat collar */}
          <path
            d="M100 280 L 200 280"
            stroke="white"
            strokeWidth="15"
            className="animate-pulse"
          />
        </g>
      </svg>
    </div>
  );
}