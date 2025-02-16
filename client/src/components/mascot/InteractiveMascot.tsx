import { useEffect, useRef } from "react";
import gsap from "gsap";

const roasts = [
  "Still scrolling TikTok? Your to-do list is having an existential crisis!",
  "Your productivity level is like a Internet Explorer - stuck in the 90s!",
  "Even Internet Explorer processed things faster than you're moving today!",
  "Your procrastination skills deserve a Netflix series!",
  "Your inbox is fuller than a pizza place on Super Bowl Sunday!",
  "Did your tasks get lost in the Bermuda Triangle of procrastination?",
  "You've spent more time avoiding work than a cat avoiding a bath!",
];

export default function InteractiveMascot() {
  const mascotRef = useRef<HTMLDivElement>(null);
  const speechBubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mascot = mascotRef.current;
    if (!mascot) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = mascot.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const deltaX = (e.clientX - centerX) / 25;
      const deltaY = (e.clientY - centerY) / 25;

      gsap.to(mascot, {
        duration: 0.3,
        x: deltaX,
        y: deltaY,
        rotation: deltaX * 0.5,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const showRoast = () => {
    const speechBubble = speechBubbleRef.current;
    if (!speechBubble) return;

    const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];
    speechBubble.textContent = randomRoast;

    gsap.fromTo(
      speechBubble,
      { opacity: 0, scale: 0.8, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.3 }
    );

    setTimeout(() => {
      gsap.to(speechBubble, {
        opacity: 0,
        y: -20,
        duration: 0.3,
      });
    }, 3000);
  };

  return (
    <div className="relative">
      <div
        ref={mascotRef}
        className="mascot-container cursor-pointer"
        onClick={showRoast}
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}
        >
          {/* Sassy robot mascot */}
          <circle cx="100" cy="100" r="90" fill="#6366f1" />
          {/* Eyes with raised eyebrow expression */}
          <path d="M 60 70 Q 70 60 80 70" stroke="white" strokeWidth="8" fill="none" />
          <path d="M 120 75 Q 130 85 140 75" stroke="white" strokeWidth="8" fill="none" />
          <circle cx="70" cy="75" r="8" fill="black" />
          <circle cx="130" cy="80" r="8" fill="black" />
          {/* Smirking mouth */}
          <path
            d="M 70 130 Q 100 150 140 120"
            stroke="white"
            strokeWidth="8"
            fill="none"
          />
          {/* Coffee cup - because procrastinators love coffee */}
          <path
            d="M 160 110 Q 170 110 170 120 L 170 140 Q 170 150 160 150 L 150 150 Q 140 150 140 140 L 140 120 Q 140 110 150 110 Z"
            fill="white"
          />
          <path
            d="M 175 125 L 180 125 Q 185 125 185 130 L 185 135 Q 185 140 180 140 L 175 140"
            stroke="white"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>
      <div
        ref={speechBubbleRef}
        className="absolute top-0 left-full ml-4 p-4 bg-white rounded-lg shadow-lg opacity-0 max-w-[250px] text-sm font-medium"
      />
    </div>
  );
}