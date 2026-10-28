"use client";
import React, { useState } from "react";

export default function KFaq({ groups }) {
  const [open, setOpen] = useState("0-0");
  return (
    <>
      {groups.map((g, gi) => (
        <div key={gi} style={{ marginBottom: 32 }}>
          <h4 className="fw-5 mb-20">{g.title}</h4>
          {g.items.map((it, ii) => {
            const id = `${gi}-${ii}`;
            const isOpen = open === id;
            return (
              <div key={id} style={{ border: "1px solid #ececec", borderRadius: 12, marginBottom: 10, overflow: "hidden" }}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? "" : id)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "16px 20px",
                    background: "#fff",
                    border: 0,
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 12,
                  }}
                  className="fw-5"
                >
                  <span>{it.q}</span>
                  <span>{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div style={{ padding: "0 20px 18px" }}>
                    <p className="fs-15">{it.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
}
