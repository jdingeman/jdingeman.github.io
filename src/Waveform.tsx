type WaveformProps = {
  frequency?: number;
  amplitude?: number;
};

function Waveform({ frequency = 440, amplitude = 0.72 }: WaveformProps) {
  const width = 1000;
  const height = 160;
  const centerY = height / 2;

  const points: string[] = [];

  const duration = 0.01;

  for (let x = 0; x <= width; x += 2) {
    const t = (x / width) * duration;

    const y =
      centerY - amplitude * centerY * Math.sin(2 * Math.PI * frequency * t);

    points.push(`${x},${y}`);
  }

  return (
    <div className="waveform">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        aria-label={`Sine wave at ${frequency} Hz`}
      >
        <polyline points={points.join(" ")} fill="none" />
      </svg>

      <div className="waveform-readout">
        <span>
          FREQUENCY <strong>{frequency.toFixed(2)} Hz</strong>
        </span>

        <span>
          AMPLITUDE <strong>{amplitude.toFixed(2)}</strong>
        </span>

        <span>
          PHASE <strong>0.00°</strong>
        </span>
      </div>
    </div>
  );
}

export default Waveform;
