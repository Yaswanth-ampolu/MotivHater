import { useEffect, useRef } from "react";
import gsap from "gsap";

const roasts = [
  "Another day of no progress? What's your excuse?",
  "I've seen snails move faster than your productivity!",
  "Oh look, someone finally decided to show up!",
  "Are you here to work or just to disappoint me again?",
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
          {/* Simple robot face SVG */}
          <circle cx="100" cy="100" r="90" fill="#6366f1" />
          <circle cx="70" cy="80" r="20" fill="white" />
          <circle cx="130" cy="80" r="20" fill="white" />
          <circle cx="70" cy="80" r="10" fill="black" />
          <circle cx="130" cy="80" r="10" fill="black" />
          <path
            d="M 60 130 Q 100 160 140 130"
            stroke="white"
            strokeWidth="8"
            fill="none"
          />
        </svg>
      </div>
      <div
        ref={speechBubbleRef}
        className="absolute top-0 left-full ml-4 p-4 bg-white rounded-lg shadow-lg opacity-0 max-w-[200px] text-sm"
      />
    </div>
  );
}
