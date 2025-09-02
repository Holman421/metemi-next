"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface OutlinedTextSVGProps {
  text: string;
  className?: string;
  fontSize?: string;
  color?: string;
  useGradient?: boolean;
  viewBoxWidth?: number;
  viewBoxHeight?: number;
}

export default function OutlinedTextSVG({ 
  text, 
  className = "", 
  fontSize, 
  color, 
  useGradient = false,
  viewBoxWidth = 400,
  viewBoxHeight = 100
}: OutlinedTextSVGProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const textElement = svgRef.current?.querySelector("text");
    
    if (textElement) {
      // Use a more generous multiplier for stroke animation to ensure completion
      const baseLength = textElement.getComputedTextLength();
      const estimatedStrokeLength = baseLength * 3; // Increased for better coverage
      
      gsap.set(textElement, {
        strokeDasharray: estimatedStrokeLength,
        strokeDashoffset: estimatedStrokeLength,
      });
      
      gsap.to(textElement, {
        strokeDashoffset: 0,
        duration: 6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: svgRef.current,
          start: "top 90%",
          once: true,
        },
      });
    }
  }, [text, fontSize]);

  return (
    <div ref={containerRef} className={className}>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{ 
          width: '100%', 
          height: 'auto'
        }}
        preserveAspectRatio="xMidYMid meet"
      >
        {useGradient && (
          <defs>
            <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--gradient-start)" />
              <stop offset="50%" stopColor="var(--gradient-mid)" />
              <stop offset="100%" stopColor="var(--gradient-end)" />
            </linearGradient>
          </defs>
        )}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-outline-krakov"
          fill="transparent"
          stroke={useGradient ? "url(#textGradient)" : (color || "white")}
          strokeWidth="1"
          style={{ 
            fontFamily: "Inter, sans-serif",
            fontSize: fontSize || 'clamp(1.5rem, calc(0.579rem + 3.684vw), 5rem)'
          }}
        >
          {text}
        </text>
      </svg>
    </div>
  );
}
