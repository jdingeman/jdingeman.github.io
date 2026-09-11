function Work() {
  return (
    <section className="work" id="work">
      <div className="section-label">
        <span>02 / WORK</span>
      </div>

      <div className="work-intro">
        <p className="section-eyebrow">SELECTED WORK</p>

        <h2>
          SYSTEMS IN
          <br />
          PROGRESS
        </h2>

        <p className="work-description">
          A collection of software, technical experiments, and systems I've
          built or am currently developing.
        </p>
      </div>

      <div className="project-list">
        <article className="project">
          <div className="project-header">
            <span className="project-number">01</span>

            <div>
              <h3>AUDIO VISUALIZER</h3>
              <p>ACTIVE PROJECT</p>
            </div>
          </div>

          <div className="project-visual project-visual-waveform">
            <div className="mini-waveform">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

            <span className="visual-label">SIGNAL ANALYSIS</span>
          </div>

          <div className="project-details">
            <p>
              A desktop audio analysis tool for visualizing waveforms,
              spectrograms, RMS levels, and tempo.
            </p>

            <div className="project-meta">
              <span>PYTHON</span>
              <span>NUMPY</span>
              <span>TKINTER</span>
            </div>
          </div>
        </article>

        <article className="project">
          <div className="project-header">
            <span className="project-number">02</span>

            <div>
              <h3>QUOTE CALCULATOR</h3>
              <p>IN DEVELOPMENT</p>
            </div>
          </div>

          <div className="project-visual project-visual-flow">
            <div className="quote-flow">
              <span>INPUT</span>
              <i />
              <span>RULES</span>
              <i />
              <span>QUOTE</span>
            </div>

            <span className="visual-label">WORKFLOW AUTOMATION</span>
          </div>

          <div className="project-details">
            <p>
              A structured software system designed to replace a complex
              spreadsheet-based pricing workflow.
            </p>

            <div className="project-meta">
              <span>REACT</span>
              <span>TYPESCRIPT</span>
              <span>DATA</span>
              <span>AUTOMATION</span>
            </div>
          </div>
        </article>

        <a className="project project-link" href="#project/vendor-platform">
          <div className="project-header">
            <span className="project-number">03</span>

            <div>
              <h3>VENDOR PLATFORM</h3>
              <p>ARCHITECTURE / IN DEVELOPMENT</p>
            </div>
          </div>

          <div className="project-visual project-visual-network">
            <div className="network">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

            <span className="visual-label">MULTI-TENANT SYSTEM</span>
          </div>

          <div className="project-details">
            <p>
              A configurable platform concept for connecting vendors, clients,
              data, dashboards, and role-based workflows.
            </p>

            <div className="project-meta">
              <span>REACT</span>
              <span>NODE</span>
              <span>POSTGRESQL</span>
              <span>API DESIGN</span>
            </div>
          </div>
        </a>

        <article className="project">
          <div className="project-header">
            <span className="project-number">04</span>

            <div>
              <h3>TRAFFIC ACCIDENT IMPACT PREDICTION</h3>
              <p>COMPLETED PROJECT</p>
            </div>
          </div>

          <div className="project-visual project-visual-data">
            <div className="data-bars">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

            <span className="visual-label">MACHINE LEARNING / DATA</span>
          </div>

          <div className="project-details">
            <p>
              A machine learning application for predicting traffic severity
              impact from large-scale U.S. accident data.
            </p>
          </div>

          <div className="project-meta">
            <span>PYTHON</span>
            <span>SCIKIT-LEARN</span>
            <span>PANDAS</span>
            <span>GRADIO</span>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Work;
