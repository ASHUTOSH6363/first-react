function Sidebar({ activeSection, navItems }) {
  return (
    <aside className="sidebar">
      <a href="#top" className="brand">
        <span className="icon" />
        <span>Cisco Catalyst</span>
      </a>

      <nav className="nav-list">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="sidebar-card">
        <strong>Explore the full experience</strong>
        <p>View Catalyst Center policy, performance, security, and device operations together in one polished React experience.</p>
      </div>
      <div className="sidebar-card">
        <strong>Need quick setup?</strong>
        <p>Use the anchors to jump straight to architecture, deployment, troubleshooting, or the live dashboard analytics.</p>
      </div>
    </aside>
  );
}

export default Sidebar;
