
"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("webstudio-visited")) {
      return;
    }

    setVisible(true);

    let current = 0;
    let exitTimer;
    let hideTimer;

    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 4) + 2;

      if (current >= 100) {
        current = 100;
        clearInterval(interval);

        setProgress(100);

        // Save the visit only after loading completes.
        sessionStorage.setItem("webstudio-visited", "true");

        exitTimer = setTimeout(() => {
          setExiting(true);

          hideTimer = setTimeout(() => {
            setVisible(false);
          }, 850);
        }, 350);

        return;
      }

      setProgress(current);
    }, 40);

    return () => {
      clearInterval(interval);
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`preloader ${exiting ? "preloader-exit" : ""}`}
      role="status"
      aria-label="Loading Web Studio"
    >
      <div className="preloader-content">
        <div className="preloader-logo">
          W<span>.</span>
        </div>

        <p className="preloader-brand">WEB STUDIO</p>

        <div className="preloader-line">
          <div
            className="preloader-line-progress"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="preloader-bottom">
          <span>CREATIVE DIGITAL EXPERIENCES</span>
          <span className="preloader-number">
            {String(progress).padStart(3, "0")}%
          </span>
        </div>
      </div>

      <div className="preloader-decoration preloader-decoration-one" />
      <div className="preloader-decoration preloader-decoration-two" />
    </div>
  );
}
