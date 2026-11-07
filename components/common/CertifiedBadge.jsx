import React from "react";

// Badge « Prestataire certifié » : sceau doré avec une coche, à la place du texte.
export default function CertifiedBadge({ size = 30, title = "Prestataire certifié" }) {
  return (
    <span
      className="kelele-cert-badge"
      title={title}
      role="img"
      aria-label={title}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 48 48" width="100%" height="100%" aria-hidden="true">
        <defs>
          <linearGradient id="certGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f0cf7a" />
            <stop offset="1" stopColor="#d7ad49" />
          </linearGradient>
        </defs>
        <path
          d="M24 2l5.2 3.4 6.2-.5 2.7 5.6 5.6 2.7-.5 6.2L46 24l-3.4 5.2.5 6.2-5.6 2.7-2.7 5.6-6.2-.5L24 46l-5.2-3.4-6.2.5-2.7-5.6-5.6-2.7.5-6.2L2 24l3.4-5.2-.5-6.2 5.6-2.7 2.7-5.6 6.2.5z"
          fill="url(#certGold)"
          stroke="#b9912f"
          strokeWidth="1"
        />
        <path d="M15 24.5l6.2 6.2L33.5 18" fill="none" stroke="#06090d" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
