"use client";

import React, { useState } from "react";

type MascotProps = {
  alt?: string;
  className?: string;
  size?: string;
  variant?: "full" | "portrait" | "glasses" | "point" | "thinking" | "thumbs-up";
};

export default function Mascot({
  alt = "Moune — assistant de voyage",
  className = "",
  size = "auto",
  variant = "full",
}: MascotProps) {
  const [failed, setFailed] = useState(false);

  const isPortrait = variant !== "full";

  const source = isPortrait
    ? `/mascots/moune-${variant}-512.webp`
    : "/mascots/moune-full-1024.webp";

  const style: React.CSSProperties = {
    width: size === "auto" ? "100%" : size,
    maxWidth: "100%",
    height: "auto",
    objectFit: "contain",
  };

  return (
    <img
      src={failed ? "/mascot-placeholder.svg" : source}
      alt={alt}
      className={`moune-mascot ${className}`}
      style={style}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
