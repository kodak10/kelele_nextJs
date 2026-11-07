import React from "react";
import Image from "next/image";

// QR code d'illustration (motif fixe, ne contient aucune donnée réelle).
const SIZE = 25;
function buildQr() {
  const cells = [];
  let seed = 7;
  const rnd = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  const inFinder = (x, y) => {
    const box = (ox, oy) => x >= ox && x < ox + 7 && y >= oy && y < oy + 7;
    return box(0, 0) || box(SIZE - 7, 0) || box(0, SIZE - 7);
  };
  const finder = (x, y, ox, oy) => {
    const dx = x - ox;
    const dy = y - oy;
    const ring = Math.max(Math.abs(dx - 3), Math.abs(dy - 3));
    return ring === 3 || ring <= 1;
  };
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      let on;
      if (inFinder(x, y)) {
        const ox = x < 8 ? 0 : SIZE - 7;
        const oy = y < 8 ? 0 : SIZE - 7;
        on = finder(x, y, ox, oy);
      } else {
        on = rnd() > 0.52;
      }
      if (on) cells.push([x, y]);
    }
  }
  return cells;
}
const QR = buildQr();

// Illustration : téléphone qui affiche un billet avec son QR code.
export default function PhoneTicket() {
  return (
    <div className="kelele-phone-ticket" aria-hidden="true">
      <div className="kelele-pt-phone">
        <div className="kelele-pt-notch" />
        <div className="kelele-pt-screen">
          <div className="kelele-pt-top">
            <Image src="/images/logo/logo.png" alt="" width={54} height={36} />
          </div>
          <div className="kelele-pt-card">
            <p className="kelele-pt-event">Soirée Afrobeats</p>
            <p className="kelele-pt-meta">Abidjan · 12 déc. · 20:00</p>
            <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="kelele-pt-qr" shapeRendering="crispEdges">
              <rect width={SIZE} height={SIZE} fill="#fff" />
              {QR.map(([x, y]) => (
                <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="#06090d" />
              ))}
            </svg>
            <span className="kelele-pt-valid">Billet valide</span>
          </div>
          <div className="kelele-pt-bar">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      <div className="kelele-pt-glow" />
    </div>
  );
}
