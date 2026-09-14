import { useEffect, useState } from "react";

function VendorPlatform() {
  const [activeSection, setActiveSection] = useState("problem");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      ".vendor-section[id]",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <main className="vendor-platform">
      <header className="vendor-header">
        <nav className="vendor-sidebar" aria-label="Project sections">
          <span className="vendor-sidebar-label">CONTENTS</span>

          <button
            type="button"
            className={activeSection === "problem" ? "active" : ""}
            onClick={() => scrollToSection("problem")}
          >
            <span>01</span>
            THE PROBLEM
          </button>

          <button
            type="button"
            className={activeSection === "concept" ? "active" : ""}
            onClick={() => scrollToSection("concept")}
          >
            <span>02</span>
            THE CONCEPT
          </button>

          <button
            type="button"
            className={activeSection === "architecture" ? "active" : ""}
            onClick={() => scrollToSection("architecture")}
          >
            <span>03</span>
            ARCHITECTURE
          </button>

          <button
            type="button"
            className={activeSection === "components" ? "active" : ""}
            onClick={() => scrollToSection("components")}
          >
            <span>04</span>
            COMPONENTS
          </button>

          <button
            type="button"
            className={activeSection === "versioning" ? "active" : ""}
            onClick={() => scrollToSection("versioning")}
          >
            <span>05</span>
            VERSIONING
          </button>

          <button
            type="button"
            className={activeSection === "decisions" ? "active" : ""}
            onClick={() => scrollToSection("decisions")}
          >
            <span>06</span>
            ENGINEERING DECISIONS
          </button>

          <button
            type="button"
            className={activeSection === "state" ? "active" : ""}
            onClick={() => scrollToSection("state")}
          >
            <span>07</span>
            CURRENT STATE
          </button>

          <button
            type="button"
            className={activeSection === "next" ? "active" : ""}
            onClick={() => scrollToSection("next")}
          >
            <span>08</span>
            NEXT STEPS
          </button>
        </nav>
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

      <section id="problem" className="vendor-section">
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

      <section id="concept" className="vendor-section vendor-platform-section">
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

      <section
        id="architecture"
        className="vendor-section vendor-architecture-section"
      >
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

      <section
        id="components"
        className="vendor-section vendor-components-sections"
      >
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
      <section
        id="versioning"
        className="vendor-section vendor-versioning-section"
      >
        <div className="section-label">
          <span>05 / VERSIONING</span>
        </div>

        <div className="vendor-copy">
          <h2>
            DON'T EDIT
            <br />
            PRODUCTION
          </h2>

          <p>
            Once a dashboard is serving a client, changes should not overwrite
            the live experience. New versions can be created, reviewed, and
            published independently.
          </p>
        </div>

        <div className="version-flow">
          <div className="version-step">
            <span className="flow-index">01</span>
            <strong>LIVE</strong>
            <span>ACTIVE CLIENT EXPERIENCE</span>
          </div>

          <div className="version-line">
            <span>CLONE</span>
            <i />
          </div>

          <div className="version-step">
            <span className="flow-index">02</span>
            <strong>DRAFT</strong>
            <span>NEW VERSION</span>
          </div>

          <div className="version-line">
            <span>SUBMIT</span>
            <i />
          </div>

          <div className="version-step">
            <span className="flow-index">03</span>
            <strong>PENDING REVIEW</strong>
            <span>AWAITING APPROVAL</span>
          </div>

          <div className="version-line">
            <span>APPROVE</span>
            <i />
          </div>

          <div className="version-step">
            <span className="flow-index">04</span>
            <strong>LIVE</strong>
            <span>PUBLISHED VERSION</span>
          </div>
        </div>

        <div className="version-history">
          <div className="version-history-header">
            <span>CLIENT DASHBOARD</span>
            <span>VERSION HISTORY</span>
          </div>

          <div className="version-history-row">
            <span>VERSION 01</span>
            <span>ARCHIVED</span>
          </div>

          <div className="version-history-row">
            <span>VERSION 02</span>
            <span>ARCHIVED</span>
          </div>

          <div className="version-history-row version-history-live">
            <span>VERSION 03</span>
            <span>LIVE</span>
          </div>
        </div>
      </section>
      <section
        id="decisions"
        className="vendor-section vendor-decisions-section"
      >
        <div className="section-label">
          <span>06 / ENGINEERING DECISIONS</span>
        </div>

        <div className="vendor-copy">
          <h2>
            DESIGNING
            <br />
            FOR CHANGE.
          </h2>

          <p>
            The architecture is designed around the assumption that client
            requirements will change. The goal is to make those changes
            configurable, traceable, and isolated rather requiring a new
            applicaiton for every variation.
          </p>
        </div>

        <div className="decision-list">
          <div className="decision">
            <div className="decision-number">01</div>

            <div className="decision-content">
              <h3>SEPARATE STRUCTURE FROM CONTENT</h3>

              <p>
                Templates define reusable dashboard structure while client
                dashboards define the actual experience. This allows a common
                structure to be reused without forcing every client into the
                same configuration.
              </p>
            </div>
          </div>

          <div className="decision">
            <div className="decision-number">02</div>

            <div className="decision-content">
              <h3>USE REGISTERED COMPONENT TYPES</h3>

              <p>
                Components are identified by stable keys rather than embedding
                implementation details into dashboard configuration. The
                registry resolves those keys to the appropriate React component.
              </p>
            </div>
          </div>

          <div className="decision">
            <div className="decision-number">03</div>

            <div className="decision-content">
              <h3>KEEP CONFIGURATION STRUCTURED</h3>

              <p>
                Dashboard configuration is modeled as structured data instead of
                one large JSON object. Separating component identity, layout,
                data, and permissions keeps each responsibility easier to reason
                about and validate.
              </p>
            </div>
          </div>

          <div className="decision">
            <div className="decision-number">04</div>

            <div className="decision-content">
              <h3>VERSION BEFORE PUBLISHING</h3>

              <p>
                Live dashboards are treated as immutable versions. Changes
                happen through new drafts that can be reviewed, approved,
                published, and rolled back without modifying the currently
                active experience.
              </p>
            </div>
          </div>

          <div className="decision">
            <div className="decision-number">05</div>

            <div className="decision-content">
              <h3>SEPARATE APPLICATION LAYERS</h3>

              <p>
                API handling, business logic, database access, and persistence
                are separated into distinct layers. This keeps responsibilities
                isolated as the platform grows more complex.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="state" className="vendor-section vendor-state-section">
        <div className="section-label">
          <span>07 / CURRENT STATE</span>
        </div>

        <div className="vendor-copy">
          <h2>
            BUILDING THE
            <br />
            FOUNDATION
          </h2>

          <p>
            The core architecture is being established first: the data model,
            service boundaries, component system, and versioning model. The
            interface will evolve on top of that foundation rather than defining
            the architecture around a finished screen.
          </p>
        </div>

        <div className="state-grid">
          <div className="state-item state-complete">
            <div className="state-item-header">
              <span className="flow-index">01</span>
              <span>ESTABLISHED</span>
            </div>

            <h3>PLATFORM ARCHITECTURE</h3>

            <p>
              Multi-tenant structure, organization relationships, dashboard
              concepts, component registry, and separation of responsibilities.
            </p>
          </div>

          <div className="state-item state-complete">
            <div className="state-item-header">
              <span className="flow-index">02</span>
              <span>ESTABLISHED</span>
            </div>

            <h3>VERSIONING MODEL</h3>

            <p>
              Draft, review, publishing, and historical versions are treated as
              explicit parts of the dashboard lifecycle.
            </p>
          </div>

          <div className="state-item state-progress">
            <div className="state-item-header">
              <span className="flow-index">03</span>
              <span>IN PROGRESS</span>
            </div>

            <h3>DATA MODEL</h3>

            <p>
              Translating the architectural concepts into a normalized
              PostgreSQL schema and the corresponding application services.
            </p>
          </div>

          <div className="state-item state-progress">
            <div className="state-item-header">
              <span className="flow-index">04</span>
              <span>IN PROGRESS</span>
            </div>

            <h3>CONFIGURATION ENGINE</h3>

            <p>
              Building the connection between stored dashboard configuration and
              the React component registry.
            </p>
          </div>

          <div className="state-item state-next">
            <div className="state-item-header">
              <span className="flow-index">05</span>
              <span>NEXT</span>
            </div>

            <h3>VENDOR DASHBOARD BUILDER</h3>

            <p>
              A configuration interface for assembling dashboard layouts,
              selecting components, and defining client-specific settings.
            </p>
          </div>

          <div className="state-item state-next">
            <div className="state-item-header">
              <span className="flow-index">06</span>
              <span>NEXT</span>
            </div>

            <h3>CLIENT EXPERIENCE</h3>

            <p>
              Rendering the published configuration as a client-facing dashboard
              with the appropriate data and permissions.
            </p>
          </div>
        </div>
      </section>

      <section id="next" className="vendor-section vendor-next-section">
        <div className="section-label">
          <span>08 / NEXT STEPS</span>
        </div>

        <div className="vendor-copy">
          <h2>
            FROM
            <br />
            ARCHITECTURE
            <br />
            TO PLATFORM
          </h2>

          <p>
            The next phase is turning the architectural model into a working
            configuration system: establishing the database schema, implementing
            the API, and connecting dashboard configuration to the component
            registry.
          </p>
        </div>

        <div className="next-flow">
          <div className="next-step">
            <span className="flow-index">01</span>
            <strong>DATA MODEL</strong>
            <span>POSTGRESQL SCHEMA</span>
          </div>

          <div className="next-step">
            <span className="flow-index">02</span>
            <strong>API</strong>
            <span>SERVICES / DATA ACCESS</span>
          </div>

          <div className="next-step">
            <span className="flow-index">03</span>
            <strong>CONFIGURATION</strong>
            <span>DASHBOARD BUILDER</span>
          </div>

          <div className="next-step">
            <span className="flow-index">04</span>
            <strong>CLIENT UI</strong>
            <span>PUBLISHED EXPERIENCE</span>
          </div>
        </div>
      </section>

      <footer className="vendor-footer">
        <div className="vendor-footer-navigation">
          <a
            href="https://github.com/jdingeman/vertable"
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW SOURCE →
          </a>

          <a href="#work">← WORK</a>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            BACK TO TOP ↑
          </button>
        </div>
      </footer>
    </main>
  );
}

export default VendorPlatform;
