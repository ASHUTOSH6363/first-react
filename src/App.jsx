import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import HeroSection from './components/HeroSection.jsx';
import ContentSections from './components/ContentSections.jsx';
import DashboardSection from './components/DashboardSection.jsx';

const navItems = [
  { id: 'top', label: 'Home', href: '#top' },
  { id: 'why', label: 'Overview', href: '#why' },
  { id: 'sop', label: 'SOP', href: '#sop' },
  { id: 'significance', label: 'Why It Matters', href: '#significance' },
  { id: 'architecture', label: 'Architecture', href: '#architecture' },
  { id: 'features', label: 'Core Concepts', href: '#features' },
  { id: 'deployment', label: 'Deployment', href: '#deployment' },
  { id: 'sda', label: 'SDA & ISE', href: '#sda' },
  { id: 'operations', label: 'Operations', href: '#operations' },
  { id: 'devices', label: 'Devices', href: '#devices' },
  { id: 'troubleshooting', label: 'Troubleshooting', href: '#troubleshooting' },
  { id: 'roadmap', label: 'Roadmap', href: '#roadmap' },
  { id: 'dashboard', label: 'Dashboard', href: '#dashboard' },
];

function App() {
  const [expanded, setExpanded] = useState({
    why: false,
    significance: false,
    architecture: false,
    deployment: false,
    sda: false,
    operations: false,
    features: false,
  });
  const [activeSection, setActiveSection] = useState('top');

  const toggleSection = (id) => {
    setExpanded((current) => ({ ...current, [id]: !current[id] }));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) {
          const topSection = visible.reduce((current, next) =>
            current.boundingClientRect.top < next.boundingClientRect.top ? current : next
          );
          setActiveSection(topSection.target.id || 'top');
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: 0.25 }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-layout">
      <Sidebar activeSection={activeSection} navItems={navItems} />

      <main className="content" id="top">
        <HeroSection />
        <ContentSections expanded={expanded} toggleSection={toggleSection} />
        <DashboardSection />

        <footer className="footer">
          <span>Under the Super Vision Of Shrey Upadhyaya</span>
          <span className="badge"><a href="https://www.cisco.com/c/en/us/products/cloud-systems-management/dna-center/index.html" target="_blank">Cisco Catalyst Center documentation</a></span>
        </footer>
      </main>
    </div>
  );
}

export default App;
