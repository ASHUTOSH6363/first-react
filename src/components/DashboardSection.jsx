function DashboardSection() {
  return (
    <section id="dashboard" className="section">
      <span style={{ textTransform: 'uppercase', letterSpacing: '0.24em', color: 'var(--accent)', fontSize: '0.9rem' }}>Catalyst Center Detailed Policy</span>
      <h2>Monitor and secure your entire fabric from a single intelligent control plane.</h2>
      <p>Use this dashboard to track network health, device status, security posture, and application experience across wired and wireless environments.</p>
      <div className="hero-actions">
        <a className="button" href="#performance">View Analytics</a>
        <a className="button" href="#security">Open Policies</a>
      </div>

      <div className="dashboard-grid">
        <article className="panel">
          <h2>Live Network Health</h2>
          <div className="stats">
            <div className="metric-card"><strong>99.1%</strong><span>Overall network assurance score across branches and campuses.</span></div>
            <div className="metric-card"><strong>1.7ms</strong><span>Average application latency for critical voice and video traffic.</span></div>
            <div className="metric-card"><strong>82%</strong><span>Automated issue resolution rate through proactive policy actions.</span></div>
          </div>
        </article>

        <article className="panel">
          <h2>Topology Snapshot</h2>
          <div className="chart">
            <div className="chart-bar"><span className="chart-label">Campus Switch Health</span><div className="bar-visual"><span className="p1" /></div></div>
            <div className="chart-bar"><span className="chart-label">Wireless Client Experience</span><div className="bar-visual"><span className="p2" /></div></div>
            <div className="chart-bar"><span className="chart-label">IoT Device Compliance</span><div className="bar-visual"><span className="p3" /></div></div>
          </div>
        </article>
      </div>

      <article className="panel">
        <h2>Packet Flow Diagram</h2>
        <p className="packet-notes">Simplified packet path for a client accessing an application across the Catalyst fabric.</p>
        <div className="packet-flow">
          <svg width="100%" height="260" viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Packet flow diagram">
            <defs>
              <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0 0 L8 4 L0 8 z" fill="#1f5f96" />
              </marker>
            </defs>
            <rect x="12" y="70" width="110" height="56" rx="8" fill="#eaf7ff" stroke="#7fbfff" strokeWidth="1" />
            <text x="68" y="103" textAnchor="middle" fill="#102a45" fontWeight="700">Client</text>
            <rect x="148" y="34" width="110" height="56" rx="8" fill="#eaf7ff" stroke="#7fbfff" strokeWidth="1" />
            <text x="203" y="67" textAnchor="middle" fill="#102a45" fontWeight="700">Access Point</text>
            <rect x="148" y="106" width="110" height="56" rx="8" fill="#eaf7ff" stroke="#7fbfff" strokeWidth="1" />
            <text x="203" y="139" textAnchor="middle" fill="#102a45" fontWeight="700">Access Switch</text>
            <rect x="284" y="70" width="110" height="56" rx="8" fill="#eaf7ff" stroke="#7fbfff" strokeWidth="1" />
            <text x="339" y="103" textAnchor="middle" fill="#102a45" fontWeight="700">Fabric Border</text>
            <rect x="420" y="70" width="78" height="56" rx="8" fill="#eaf7ff" stroke="#7fbfff" strokeWidth="1" />
            <text x="459" y="103" textAnchor="middle" fill="#102a45" fontWeight="700">App</text>
            <line x1="122" y1="98" x2="148" y2="62" stroke="#1f5f96" strokeWidth="3" markerEnd="url(#arrow)" />
            <line x1="122" y1="98" x2="148" y2="124" stroke="#1f5f96" strokeWidth="3" markerEnd="url(#arrow)" />
            <line x1="258" y1="98" x2="284" y2="98" stroke="#1f5f96" strokeWidth="3" markerEnd="url(#arrow)" />
            <line x1="394" y1="98" x2="420" y2="98" stroke="#1f5f96" strokeWidth="3" markerEnd="url(#arrow)" />
          </svg>
        </div>
        <p className="packet-notes">Notes: Underlay routes traffic, VXLAN encapsulates data across fabric, and policy enforcement occurs at the edge and border nodes.</p>
      </article>

      <article id="performance" className="panel">
        <h2>Performance Insights</h2>
        <p>Analyze traffic patterns, identify congestion, and tune policies from the Catalyst dashboard. The interface simulates a dynamic analytics overview with animated progress bars and status widgets.</p>
        <div className="status-grid">
          <article className="status-chip"><strong>Branch throughput</strong><span>26.8 Gbps</span></article>
          <article className="status-chip"><strong>AP roaming success</strong><span>99.3%</span></article>
          <article className="status-chip"><strong>Application priority</strong><span>Voice & Video secured</span></article>
          <article className="status-chip"><strong>Policy compliance</strong><span>94% automatic enforcement</span></article>
        </div>
      </article>

      <article id="security" className="panel">
        <h2>Security Posture</h2>
        <div className="activity-card">
          <strong>Encrypted edge connections</strong>
          <p>All Catalyst devices are actively monitored for policy drift and anomalous activity. Secure segmentation is enforced across wired, wireless, and IoT ecosystems.</p>
        </div>
        <div className="activity-card">
          <strong>Automated threat response</strong>
          <p>The dashboard shows recent actions taken by the security engine to isolate threats and remediate compliance deviations without manual input.</p>
        </div>
        <div className="activity-card">
          <strong>Policy creation procedure</strong>
          <p style={{ margin: '0 0 12px', color: 'var(--muted)', lineHeight: 1.8 }}>A step-by-step policy workflow for Catalyst devices, including access points, switches, and IoT endpoints.</p>
          <ol style={{ margin: 0, paddingLeft: 18, color: 'var(--muted)', lineHeight: 1.8 }}>
            <li><strong>Step 0: Define the business objective.</strong> Start by documenting what the policy must protect: user access, voice traffic, guest isolation, IoT telemetry, or application-specific services. This scope determines the policy’s priority and enforcement boundaries.</li>
            <li><strong>Step 1: Identify device role and segment.</strong> Determine whether the policy will target wireless clients, wired access devices, or segmented IoT endpoints. This first step decides whether you use SSID/WLAN, interface profiles, or device group tagging.</li>
            <li><strong>Step 2: Classify the device groups.</strong> Group devices by function: employee laptops, guest clients, voice phones, printers, cameras, industrial sensors, or fabric infrastructure. Use device profiling and identity services to map each type into a labeled group.</li>
            <li><strong>Step 3: Select access rules.</strong> Define allowed traffic flows and service ports for each group. For voice phones, permit SIP/RTP and VLAN 20 access; for guest users, allow internet only and block internal database segments; for IoT cameras, allow HTTPS to monitoring servers and deny management access to the corporate network.</li>
            <li><strong>Step 4: Choose enforcement actions.</strong> Set the action to allow, deny, redirect, or inspect. For access points, apply wireless policies at the SSID/WLAN level. For switches, attach ACLs and policy-based VLAN assignment on the access port. For IoT, apply segmentation and microsegmentation rules that inspect behavior before trusting traffic.</li>
            <li><strong>Step 5: Apply policy to devices.</strong> Assign the policy to device profiles, interface groups, SSIDs, or endpoint identity tags. On Catalyst access points, bind the policy to an SSID and wireless user group. On access switches, bind it to interface templates and nested VLANs. For IoT, attach the policy to the device type and segment via group membership.</li>
            <li><strong>Step 6: Validate in the control plane.</strong> Use the dashboard to simulate and verify policy match paths, confirm expected service ports, and preview enforcement. Check whether the policy appears as active on the target access points, switches, and border nodes.</li>
            <li><strong>Step 7: Document and version.</strong> Record the policy name, version, creator, change reason, and affected segments. Maintain a rollback plan and change control record so the policy can be audited and updated safely.</li>
            <li><strong>Step 8: Monitor and tune.</strong> After deployment, monitor client sessions, policy hit counts, and compliance status. If a device is denied unexpectedly, update the group assignment or rule scope, then redeploy the adjusted policy.</li>
          </ol>
        </div>
        <div className="activity-card">
          <strong>Device-specific policy details</strong>
          <p style={{ margin: 0, color: 'var(--muted)', lineHeight: 1.8 }}>Each device type uses a different enforcement path, so the same policy logic is mapped to the appropriate Catalyst control element.</p>
          <p style={{ margin: '0 0 6px' }}><strong>Access Points:</strong> Assign policies to WLANs/SSIDs, apply SGT tags per user group, and enforce wireless access controls at the edge. The AP validates client role and applies the policy before traffic enters the fabric.</p>
          <p style={{ margin: '0 0 6px' }}><strong>Access Switches:</strong> Use port-based profiles, interface templates, and VLAN assignment to ensure wired endpoints receive the correct segmentation and ACL enforcement on the first hop.</p>
          <p style={{ margin: '0 0 6px' }}><strong>IoT/Endpoints:</strong> Profile devices by type, attach them to secure segments, and define service-level access. This prevents unmanaged endpoints from reaching sensitive resources while allowing approved application flows.</p>
          <p style={{ margin: '0 0 6px', color: 'var(--muted)', lineHeight: 1.8 }}><strong>Implementation note:</strong> Use naming conventions like "Site-Voice", "WLAN-Guest", or "IoT-Sensor" to keep policy rules organized and reusable across the fabric.</p>
          <p style={{ margin: 0, color: 'var(--muted)', lineHeight: 1.8 }}><strong>Example:</strong> For a voice phone, the policy is created by selecting the "Voice Devices" group, allowing SIP and RTP, assigning VLAN 20, and enforcing QoS. The policy is then bound to the access switch port profile and the wireless SSID where applicable.</p>
        </div>
        <div className="activity-card">
          <strong>Policy implementation steps</strong>
          <p style={{ margin: '0 0 12px', color: 'var(--muted)', lineHeight: 1.8 }}>Follow these implementation steps to deploy the policy across Catalyst devices and ensure consistent enforcement.</p>
          <ol style={{ margin: 0, paddingLeft: 18, color: 'var(--muted)', lineHeight: 1.8 }}>
            <li><strong>Prepare rollback and maintenance windows.</strong> Schedule the deployment during a maintenance window, and define a rollback plan before changes are pushed.</li>
            <li><strong>Provision policy templates.</strong> Create or select a base policy template in the management dashboard, such as "Secure Wireless", "Wired Access Control", or "IoT Segmentation".</li>
            <li><strong>Map to device groups.</strong> Bind the policy to explicit device groups, SSIDs, or interface profile tags. For example, assign "Guest WLAN" to the guest client group and "Voice Access" to voice endpoints.</li>
            <li><strong>Push configuration to controllers.</strong> Deploy the policy from the controller plane to the Catalyst fabric. This step may push WLAN settings to access points, ACL rules to switches, and segmentation tags to border nodes.</li>
            <li><strong>Synchronize enforcement points.</strong> Ensure access points, switches, and firewall modules receive the same policy definitions. Cross-check that SGT and VLAN assignments are consistent at the edge and in the core.</li>
            <li><strong>Verify run-time enforcement.</strong> Use dashboard indicators to confirm policy hit counts, blocked flows, and allowed sessions. Validate that the target devices are showing the policy as active and that no critical traffic is incorrectly denied.</li>
            <li><strong>Audit exceptions and logs.</strong> Review event logs for denied connections, off-policy traffic, and compliance alerts. If there are false positives, refine the rule scope and redeploy without disrupting normal service.</li>
            <li><strong>Schedule periodic review.</strong> Revisit the policy quarterly or after major infrastructure changes. Update the policy when new device types are added, application requirements shift, or threats evolve.</li>
          </ol>
        </div>
      </article>

      <article className="summary-grid">
        <article className="summary-card"><h3>Onboarded devices</h3><strong>123</strong><p>New Catalyst switches and access points provisioned this week with zero-touch workflows.</p></article>
        <article className="summary-card"><h3>Network events</h3><strong>47</strong><p>Events automatically triaged by assurance analytics, including performance and security issues.</p></article>
        <article className="summary-card"><h3>Policy updates</h3><strong>18</strong><p>Changes deployed across segments and sites to maintain consistent access control and compliance.</p></article>
      </article>

      <article className="panel" aria-label="Top Talkers">
        <h3>Top Talkers</h3>
        <div className="top-talkers">
          <div><span>10.1.2.45</span><span>1.8 Gbps</span></div>
          <div><span>10.2.3.22</span><span>1.2 Gbps</span></div>
          <div><span>10.3.4.99</span><span>820 Mbps</span></div>
        </div>
      </article>
    </section>
  );
}

export default DashboardSection;
