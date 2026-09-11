import { useEffect, useRef, useState } from "react";
import "./App.css";
import Waveform from "./Waveform";
import Systems from "./sections/Systems";
import Work from "./sections/Work";
import VendorPlatform from "./sections/VendorPlatform";

function App() {
  const [frequency, setFrequency] = useState(400);
  const [amplitude, setAmplitude] = useState(0.72);
  const [phase, setPhase] = useState(0);

  const [isDragging, setIsDragging] = useState(false);

  const previousMouseX = useRef<number | null>(null);

  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (route === "#project/vendor-platform") {
      window.scrollTo(0, 0);
    }
  }, [route]);

  if (route === "#project/vendor-platform") {
    return <VendorPlatform />;
  }

  return (
    <>
      <main className="hero">
        <header className="site-header">
          <a className="monogram" href="/">
            JD
          </a>

          <nav className="navigation">
            <a href="#work">WORK</a>
            <a href="#about">ABOUT</a>
            <a href="#resume">RESUME</a>
          </nav>
        </header>

        <section className="hero-content">
          <p className="eyebrow">SOFTWARE / SYSTEMS / AUDIO</p>

          <h1>JUSTIN DINGEMAN</h1>

          <div
            className={`waveform-placeholder ${
              isDragging ? "is-dragging" : ""
            }`}
            onPointerDown={(event) => {
              event.currentTarget.setPointerCapture(event.pointerId);

              setIsDragging(true);
              previousMouseX.current = event.clientX;
            }}
            onPointerUp={(event) => {
              event.currentTarget.releasePointerCapture(event.pointerId);

              setIsDragging(false);
              previousMouseX.current = null;
            }}
            onPointerMove={(event) => {
              if (isDragging) {
                const previousX = previousMouseX.current;

                if (previousX !== null) {
                  const deltaX = event.clientX - previousX;

                  setPhase((currentPhase) => {
                    const newPhase = currentPhase + deltaX * 2;

                    return ((newPhase % 360) + 360) % 360;
                  });
                }

                previousMouseX.current = event.clientX;

                return;
              }

              const rect = event.currentTarget.getBoundingClientRect();

              const x = (event.clientX - rect.left) / rect.width;
              const y = (event.clientY - rect.top) / rect.height;

              const clampedX = Math.max(0, Math.min(1, x));
              const clampedY = Math.max(0, Math.min(1, y));

              const newFrequency = 100 + clampedX * 900;
              const newAmplitude = 1 - clampedY;

              setFrequency(newFrequency);
              setAmplitude(newAmplitude);
            }}
            onPointerCancel={(event) => {
              event.currentTarget.releasePointerCapture(event.pointerId);

              setIsDragging(false);
              previousMouseX.current = null;
            }}
          >
            <Waveform
              frequency={frequency}
              amplitude={amplitude}
              phase={phase}
            />
          </div>

          <a className="explore" href="#explore">
            <span>EXPLORE</span>
            <span className="arrow">↓</span>
          </a>
        </section>

        <footer className="hero-footer">
          <span>SIGNAL</span>
          <span>01 / 04</span>
        </footer>
      </main>
      <Systems />

      <Work />
    </>
  );
}

export default App;
