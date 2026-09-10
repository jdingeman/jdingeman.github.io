function Systems() {
  return (
    <section className="systems" id="explore">
      <div className="section-label">
        <span>01 / SYSTEMS</span>
      </div>

      <div className="systems-intro">
        <p className="section-eyebrow">HOW I THINK</p>

        <h2>
          I BUILD SYSTEMS
          <br />
          THAT MOVE INFORMATION.
        </h2>

        <p className="systems-description">
          Software, interfaces, automation, and audio tools built around complex
          processes.
        </p>
      </div>

      <div className="system-flow">
        <div className="flow-node flow-input">
          <span className="flow-index">01</span>
          <strong>INPUT</strong>
        </div>

        <div className="flow-line" />

        <div className="flow-node flow-process">
          <span className="flow-index">02</span>
          <strong>PROCESS</strong>
        </div>

        <div className="flow-split">
          <div className="flow-split-line" />

          <div className="flow-branches">
            <div className="flow-branch">
              <div className="flow-node">
                <span className="flow-index">03A</span>
                <strong>SOFTWARE</strong>
                <span>APPLICATIONS / INTERFACES / APIs</span>
              </div>
            </div>

            <div className="flow-branch">
              <div className="flow-node">
                <span className="flow-index">03B</span>
                <strong>AUDIO</strong>
                <span>DSP / SIGNAL / VISUALIZATION</span>
              </div>
            </div>
          </div>

          <div className="flow-merge-line" />
        </div>

        <div className="flow-line flow-output-line" />

        <div className="flow-node flow-output">
          <span className="flow-index">04</span>
          <strong>OUTPUT</strong>
        </div>
      </div>
    </section>
  );
}

export default Systems;
