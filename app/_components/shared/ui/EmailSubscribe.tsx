"use client";

import { useState } from "react";

type Props = {
  className?: string;
  variant: "primary" | "secondary";
};

export default function EmailSubscribe({ className, variant }: Props) {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    console.log("Subscribing with email:", email);
  };

  const mainClass =
    variant === "primary"
      ? "h-[clamp(2.688rem,calc(2.408rem+1.118vw),3.75rem)] w-full mt-16 2xl:mt-0 2xl:w-[clamp(28.125rem,calc(-2.875rem+32.292vw),35.875rem)]"
      : "h-[clamp(1.75rem,calc(1.421rem+1.316vw),3rem)] md:w-470";
  const buttonClass =
    variant === "primary"
      ? "bg-secondary text-xl px-24"
      : "bg-button-gradient text-xs px-16";

  return (
    <div className={`flex ${mainClass} ${className}`}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 min-w-0 pl-12 md:pl-24 px-24 py-2 rounded-l-full text-xs border bg-white border-gray-400 focus:outline-none focus:ring-1 focus:ring-secondary"
      />
      <button
        onClick={handleSubscribe}
        className={`font-bold text-white rounded-r-full cursor-pointer hover:scale-105 transition-transform ${buttonClass}`}
      >
        Subscribe
      </button>
    </div>
  );
}
