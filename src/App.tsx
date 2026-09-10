import { useState } from "react";
import "./App.css";
import Waveform from "./Waveform";

function App() {
  const [frequency, setFrequency] = useState(400);
  return (
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
          className="waveform-placeholder"
          onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();

            const position = (event.clientX - rect.left) / rect.width;

            const clampedPosition = Math.max(0, Math.min(1, position));

            const newFrequency = 100 + clampedPosition * 900;

            setFrequency(newFrequency);
          }}
        >
          <Waveform frequency={frequency} />
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
  );
}

export default App;
