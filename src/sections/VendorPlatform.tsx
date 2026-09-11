function VendorPlatform() {
  return (
    <main className="vendor-platform">
      <header className="vendor-header">
        <a className="monogram" href="/">
          JD
        </a>

        <a className="vendor-back" href="#work">
          ← WORK
        </a>
      </header>

      <section className="vendor-hero">
        <a className="section-eyebrow">03 / VENDOR PLATFORM</a>

        <h1>
          ONE PLATFORM.
          <br />
          MANY EXPERIENCES.
        </h1>

        <p className="vendor-hero-description">
          A configurable multi-tenant platform for organizations managing
          customized applications, dashboards, data, and workflows for multiple
          clients.
        </p>

        <div className="vendor-meta">
          <span>IN DEVELOPMENT</span>
          <span>REACT</span>
          <span>NODE</span>
          <span>POSTGRESQL</span>
        </div>
      </section>

      <section className="vendor-section">
        <div className="section-label">
          <span>01 / THE PROBLEM</span>
        </div>

        <div className="vendor-copy">
          <h2>
            CUSTOMIZATIONS
            <br />
            AT SCALE
          </h2>

          <p>
            Building a separate application for every client creates duplicated
            development work. Building one rigid application limits how much
            each client can be tailored.
          </p>

          <p>
            This project explores a middle ground: a shared platform where
            client experiences can be configured rather than individually
            developed.
          </p>
        </div>
      </section>

      <section className="vendor-section vendor-platform-section">
        <div className="section-label">
          <span>02 / THE CONCEPT</span>
        </div>

        <div className="vendor-copy">
          <h2>
            ONE SYSTEM.
            <br />
            DIFFERENT CLIENTS.
          </h2>
        </div>

        <div className="tenant-diagram">
          <div className="tenant-node tenant-platform">
            <span className="flow-index">01</span>
            <strong>PLATFORM</strong>
            <span>SHARED APPLICATION</span>
          </div>

          <div className="tenant-connector" />

          <div className="tenant-branches">
            <div className="tenant-branch">
              <div className="tenant-line" />

              <div className="tenant-node">
                <span className="flow-index">02</span>
                <strong>CLIENT A</strong>
                <span>DASHBOARD / DATA</span>
              </div>
            </div>

            <div className="tenant-branch">
              <div className="tenant-line" />

              <div className="tenant-node">
                <span className="flow-index">03</span>
                <strong>CLIENT B</strong>
                <span>DASHBOARD / DATA</span>
              </div>
            </div>

            <div className="tenant-branch">
              <div className="tenant-line" />

              <div className="tenant-node">
                <span className="flow-index">04</span>
                <strong>CLIENT C</strong>
                <span>DASHBOARD / DATA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vendor-section vendor-architecture-section">
        <div className="section-label">
          <span>03 / ARCHITECTURE</span>
        </div>

        <div className="vendor-copy">
          <h2>
            ONE PLATFORM.
            <br />
            SEPARATE RESPONSIBILITIES.
          </h2>

          <p>
            The system separates organizations, dashboard structure, components,
            data, and permissions rather than treating the entire application as
            one configurable object.
          </p>
        </div>

        <div className="architecture-diagram">
          <div className="architecture-node architecture-root">
            <span className="flow-index">01</span>
            <strong>PLATFORM</strong>
            <span>SHARED APPLICATION</span>
          </div>

          <div className="architecture-main-line" />

          <div className="architecture-sources">
            <div className="architecture-source">
              <div className="architecture-source-line architecture-source-line-top" />

              <div className="architecture-node">
                <span className="flow-index">02</span>
                <strong>ORGANIZATIONS</strong>
                <span>OWNERSHIP / RELATIONSHIPS</span>
              </div>

              <div className="architecture-source-line architecture-source-line-bottom" />
            </div>

            <div className="architecture-source">
              <div className="architecture-source-line architecture-source-line-top" />

              <div className="architecture-node">
                <span className="flow-index">03</span>
                <strong>TEMPLATES</strong>
                <span>REUSABLE STRUCTURE</span>
              </div>

              <div className="architecture-source-line architecture-source-line-bottom" />
            </div>

            <div className="architecture-source">
              <div className="architecture-source-line architecture-source-line-top" />

              <div className="architecture-node">
                <span className="flow-index">04</span>
                <strong>COMPONENTS</strong>
                <span>BUILDING BLOCKS</span>
              </div>

              <div className="architecture-source-line architecture-source-line-bottom" />
            </div>
          </div>

          <div className="architecture-merge">
            <div className="architecture-merge-horizontal" />
            <div className="architecture-merge-line" />
          </div>

          <div className="architecture-node architecture-root">
            <span className="flow-index">05</span>
            <strong>CLIENT DASHBOARD</strong>
            <span>CONFIGURED EXPERIENCE</span>
          </div>

          <div className="architecture-main-line" />

          <div className="architecture-context">
            <div className="architecture-context-branch">
              <div className="architecture-context-line" />

              <div className="architecture-node">
                <span className="flow-index">06</span>
                <strong>DATA</strong>
                <span>CLIENT INFORMATION</span>
              </div>
            </div>

            <div className="architecture-context-branch">
              <div className="architecture-context-line" />

              <div className="architecture-node">
                <span className="flow-index">07</span>
                <strong>LAYOUT</strong>
                <span>POSITION / SIZE</span>
              </div>
            </div>

            <div className="architecture-context-branch">
              <div className="architecture-context-line" />

              <div className="architecture-node">
                <span className="flow-index">08</span>
                <strong>PERMISSIONS</strong>
                <span>ACCESS / CONTROL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vendor-section vendor-components-sections">
        <div className="section-label">
          <span>04 / COMPONENTS AS BUILDING BLOCKS</span>
        </div>

        <div className="vendor-copy">
          <h2>
            CONFIGURATION
            <br />
            BECOMES UI
          </h2>

          <p>
            Dashboards are assembled from registered component types. A
            configuration identifies the component, while its associated
            settings determine how and where it appears for a client.
          </p>
        </div>

        <div className="component-flow">
          <div className="component-step">
            <span className="flow-index">01</span>
            <strong>CONFIGURATION</strong>
            <code>"data-table"</code>
          </div>

          <div className="component-arrow">→</div>

          <div className="component-step">
            <span className="flow-index">02</span>
            <strong>COMPONENT REGISTRY</strong>
            <code>data-table → renderer</code>
          </div>

          <div className="component-arrow">→</div>

          <div className="component-step">
            <span className="flow-index">03</span>
            <strong>REACT COMPONENT</strong>
            <code>&lt;DataTable /&gt;</code>
          </div>

          <div className="component-arrow">→</div>

          <div className="component-step">
            <span className="flow-index">04</span>
            <strong>CLIENT EXPERIENCE</strong>
            <code>configured dashboard</code>
          </div>
        </div>
      </section>
    </main>
  );
}

export default VendorPlatform;
