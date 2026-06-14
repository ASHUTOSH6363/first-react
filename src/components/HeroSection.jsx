function HeroSection() {
  return (
    <section className="hero">
      <span>Professional Training</span>
      <h1>Master Cisco Catalyst Center and DNA Center for modern enterprise networking.</h1>
      <p>Build practical DNA Center skills from deployment through SDA, ISE integration, and operations with a clear, structured guide designed for network professionals.</p>
      <div className="hero-actions">
        <a className="button" href="#why">Start Learning</a>
        <a className="button" href="#dashboard">View Dashboard</a>
      </div>

      <div className="quick-index">
        <h3>Quick index</h3>
        <div className="quick-links">
          <a className="quick-chip" href="#why">Overview</a>
          <a className="quick-chip" href="#significance">Why It Matters</a>
          <a className="quick-chip" href="#architecture">Architecture</a>
          <a className="quick-chip" href="#features">Core Concepts</a>
          <a className="quick-chip" href="#deployment">Deployment</a>
          <a className="quick-chip" href="#sda">SDA & ISE</a>
          <a className="quick-chip" href="#operations">Operations</a>
          <a className="quick-chip" href="#devices">Devices</a>
          <a className="quick-chip" href="#roadmap">Roadmap</a>
        </div>
      </div>

      <div className="hero-grid">
        <div className="overview-panel">
          <span className="section-tag">Overview</span>
          <h2>What is Cisco DNA Center?</h2>
          <p>Cisco DNA Center is the central management and orchestration platform for modern enterprise networks. It unifies device inventory, policy, automation, and assurance so network teams can operate with intent-based accuracy and speed.</p>
          <p>Use DNA Center to discover devices, define network segments, apply policy across campus and branch fabrics, and monitor real-time health from one centralized control plane.</p>
        </div>
        <div className="dnac-card">
          <div className="dnac-visual" aria-hidden="true">
            <div className="dnac-node dnac-core">Cisco DNA Center</div>
            <div className="dnac-node" style={{ top: '18%', left: '12%' }}>AP</div>
            <div className="dnac-node" style={{ top: '20%', left: '68%' }}>ISE</div>
            <div className="dnac-node" style={{ bottom: '22%', right: '18%' }}>Switch</div>
            <svg className="dnac-line" viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg">
              <path d="M 160 110 C 160 30 40 60 48 120" fill="none" stroke="rgba(71,168,255,0.35)" strokeWidth="3" strokeLinecap="round" />
              <path d="M 160 110 C 250 90 260 180 190 200" fill="none" stroke="rgba(255,200,120,0.35)" strokeWidth="3" strokeLinecap="round" />
              <path d="M 160 110 C 180 20 300 50 280 110" fill="none" stroke="rgba(71,168,255,0.30)" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
          <div className="dnac-caption">A visual summary of Cisco DNA Center connecting wireless, wired, and security services from one fabric control plane.</div>
        </div>
      </div>

      <div className="stats">
        <article className="stat-card"><strong>Enterprise</strong><span>Campus, branch, and edge networks in one control plane</span></article>
        <article className="stat-card"><strong>Automated</strong><span>Provisioning, policy, and assurance with DNA intent-based workflows</span></article>
        <article className="stat-card"><strong>Secure</strong><span>ISE identity integration and segmentation for every device</span></article>
      </div>
    </section>
  );
}

export default HeroSection;
