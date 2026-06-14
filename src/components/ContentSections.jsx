import ExpandableSection from './ExpandableSection.jsx';

function ContentSections({ expanded, toggleSection }) {
  return (
    <>
      <section id="why" className="section">
        <div className="intro-grid">
          <div>
            <ExpandableSection
              id="why"
              title="What is Cisco DNA Center?"
              lead="Cisco DNA Center is the intent-based network controller for Catalyst campus and branch environments. It centralizes network design, policy, provisioning, assurance and security in one platform so teams can move from manual CLI work to consistent, automated operations."
              expanded={expanded.why}
              onToggle={toggleSection}
              link="https://www.cisco.com/c/en/us/solutions/enterprise-networks/dna-center/index.html"
              linkText="Cisco DNA Center overview"
              note="Official Cisco overview of DNA Center capabilities, use cases, and product value in enterprise networks."
            >
              <p>DNA Center is the single pane of glass for enterprise network operations. It supports architecture, policy, and assurance across wired and wireless infrastructures by combining device management, analytics, automation, and security integration.</p>
              <p>The platform is built around the concept of intent: you state what the network should do, and DNA Center translates that into device-specific configurations, deploys them, and validates the results continuously. This removes manual consistency issues and speeds deployment for complex campus and branch designs.</p>
              <p>Under the hood, DNA Center uses templates, policy domains, and network abstractions to manage Cisco Catalyst devices. It also orchestrates network services like EIGRP, OSPF, BGP, VLANs, VXLAN, and wireless policy from a centralized control plane.</p>
              <p>From an operations perspective, it consolidates inventory, credential management, software image distribution, topology validation, and audit-ready change history so administrators can track device lifecycle, compliance, and configuration drift from one platform.</p>
              <p>For every rollout, DNA Center keeps a record of device readiness checks, credential expirations, and configuration validation results, making it easier to troubleshoot onboarding failures and maintain a secure, audited deployment posture.</p>
            </ExpandableSection>

            <ul className="benefits-list">
              <li>Design network topology, segmentation, and wireless policy in a graphical interface.</li>
              <li>Provision devices with templates, software images, and zero-touch workflows.</li>
              <li>Assure service quality by collecting telemetry and validating intent with analytics.</li>
              <li>Integrate with ISE for identity-based access, profiling, guest access, and SGT-driven policy.</li>
              <li>Automate SD-Access fabric deployment with underlay, overlay, edge, and border automation.</li>
            </ul>
          </div>
          <div className="panel network-stage" aria-label="Live Catalyst network visualization">
            <h2>Live operations in one view</h2>
            <p>Visualize device health, fabric policy, and client experience instantly. This view shows how DNA Center combines device data, topology, and policy state into a single operational dashboard.</p>
            <div className="map" aria-hidden="true">
              <div className="node" />
              <div className="node" />
              <div className="node" />
              <div className="node" />
              <div className="node" />
              <div className="node" />
              <span className="line a" />
              <span className="line b" />
              <span className="line c" />
              <span className="line d" />
              <span className="line e" />
            </div>
          </div>
        </div>
      </section>

      <section id="sop" className="section">
        <h2>Standard Operating Procedures (SOP)</h2>
        <p className="lead">Practical, repeatable runbooks for common DNA Center operations. Follow the steps exactly and validate at each checkpoint.</p>
        <div className="detail-grid">
          <div className="detail-card">
            <h3>Pass VRF / Virtual Networks in DNA Center</h3>
            <ol>
              <li>Prerequisite: Ensure underlay routing and L3 connectivity between DNA Center and fabric devices, and that VRFs are defined on edge/border nodes.</li>
              <li>UI: Go to <em>Design &gt; Network Settings &gt; Virtual Networks</em>. Create or map a Virtual Network and associate the required VRF name and routing domain.</li>
              <li>Assign: Map subnets and VLANs to the Virtual Network, add path endpoints and ensure proper Segment IDs (VNID/VXLAN) if using overlay.</li>
              <li>Deploy: Apply the virtual network to site(s) via the provisioning workflow (Design &gt; Provision). Select edge/border nodes for routing.</li>
              <li>Verify: Use Assurance &gt; Network Health and the inventory to confirm devices report the correct VRF/virtual network and that routes are present on border nodes.</li>
              <li>Rollback: Remove mapping or revert the provisioning snapshot in DNA Center and validate route withdrawal on edge devices.</li>
            </ol>
          </div>
          <div className="detail-card">
            <h3>Configure Policy in DNA Center</h3>
            <ol>
              <li>UI: Navigate to <em>Policy &gt; Groups &gt; Host/Endpoint Groups</em>. Create Scalable Group Tags (SGTs) or identity groups as required.</li>
              <li>Define Policies: Under <em>Policy &gt; Policy Profiles</em>, create rules (source group, destination group, services/ports, action allow/deny).</li>
              <li>Apply Intent: Use intent-based templates to map policy to sites, virtual networks, or device groups. Save and commit.</li>
              <li>Automation: Optionally use the DNA Center API to push policies programmatically: <code>POST /dna/intent/api/v1/policy</code> (use proper API payload and authentication).</li>
              <li>Verify: Use <em>Assurance &gt; Policy Compliance</em> and live flow tracing to confirm enforcement. Run sample access flows from test endpoints.</li>
              <li>Rollback: Disable or revert policy from the policy history view, and re-run traces to confirm expected behavior.</li>
            </ol>
          </div>
          <div className="detail-card">
            <h3>Download Syslog from DNA Center</h3>
            <ol>
              <li>Locate Logs: In DNA Center go to <em>Assurance &gt; Events &gt; Logs</em> or <em>Maintenance &gt; Tools &gt; System Logs</em> depending on version.</li>
              <li>Filter: Use timeframe, device, severity, and category filters to narrow results (e.g., auth, interface, OSPF, BGP).</li>
              <li>Export: Use the export or download icon to save logs as CSV/JSON. Alternatively use the API: <code>GET /dna/intent/api/v1/event</code> with query params.</li>
              <li>Relevant Fields: Typical syslog entries include <em>timestamp, device name/IP, severity, facility, process, message</em>. For network forensic purposes capture correlation IDs, interface names, and session identifiers.</li>
              <li>Retention & Storage: Ensure backups of exported logs are stored in a secure, versioned archive for audits.</li>
            </ol>
          </div>
          <div className="detail-card">
            <h3>View TCP Dumps / Packet Capture in DNA Center</h3>
            <ol>
              <li>UI Tool: Use <em>Assurance &gt; Troubleshooting &gt; Packet Capture</em> (path differs by version). Select device, interface, capture filters (src/dst IP, ports), and capture duration.</li>
              <li>Start Capture: Begin the capture and reproduce the issue (or run test traffic). Stop when sufficient packets are collected.</li>
              <li>Download & Analyze: Download the pcap and open in Wireshark. Look for TCP handshake, retransmits, latency, and application-layer issues.</li>
              <li>API: Use DNA Center packet-capture APIs where available to trigger captures programmatically and retrieve PCAPs.</li>
              <li>Security Note: Mask or sanitize sensitive payloads before sharing externally; keep pcaps in secured storage.</li>
            </ol>
          </div>
          <div className="detail-card">
            <h3>Perform Closed (802.1X) Authentication</h3>
            <ol>
              <li>Prerequisites: ISE integration with DNA Center, valid certificates, radius profiles, and switch ports configured for dot1x or MAB fallback.</li>
              <li>ISE Setup: Create authentication and authorization policies in ISE (policy sets, identity sources, profiling rules).</li>
              <li>DNA Center: Under <em>Platform &gt; Identity Services</em> (or similar), add ISE as a northbound service (pxGrid/REST) and ensure shared secrets and certificates match.</li>
              <li>Port Profiles: Create port profiles or templates in DNA Center that enable 802.1X with required VLANs for authenticated guests/devices.</li>
              <li>Test Flow: Connect a test client; observe authentication steps in ISE and the endpoint details appearing in DNA Center (identity, SGT assignment).</li>
              <li>Troubleshoot: Use live logs in ISE (Authentication logs) and DNA Center assurance traces. Verify RADIUS accounting and EAP method compatibility.</li>
            </ol>
          </div>
          <div className="detail-card">
            <h3>Implement SDA in DNA Center</h3>
            <ol>
              <li>Design: Plan underlay IP addressing, seed nodes, border nodes, and virtual network mapping. Document VRFs, VLANs, and SGT strategy.</li>
              <li>Prechecks: Validate device compatibility, software image levels, and ensure network connectivity between DNA Center and devices.</li>
              <li>Fabric Creation: In DNA Center use <em>Design &gt; SD-Access &gt; Fabric</em> to create a new fabric, select seed nodes, and define control plane parameters.</li>
              <li>Underlay & Overlay: Configure underlay routing (OSPF/BGP), then enable overlay (VXLAN) and assign sites to the fabric.</li>
              <li>ISE Integration: Ensure SGTs, policy sets, and pxGrid connectivity are configured so ISE can provide identity mapping to DNA Center.</li>
              <li>Validation: Use topology and assurance dashboards to verify endpoint registration, SGT propagation, and path traces across fabric nodes.</li>
            </ol>
          </div>
          <div className="detail-card">
            <h3>Provision a Switch via DNA Center</h3>
            <ol>
              <li>Prechecks: Ensure device is reachable (management IP), proper credentials exist in DNA Center, and device is supported.</li>
              <li>Discovery: Go to <em>Provision &gt; Discovery</em>, add IP ranges or use Plug-and-Play to discover the device.</li>
              <li>Inventory: Confirm device appears in Inventory &gt; Devices. Check model, OS version, and hardware details.</li>
              <li>Template Assignment: Create or select a provisioning template (feature templates or CLI templates) that includes interface, VLAN, port-channel, and management settings.</li>
              <li>Provision: Use the Provision workflow to assign roles (edge, access), push templates, and apply site mappings. Monitor the provisioning task for success or errors.</li>
              <li>Verify: Run device tests (ping, config diff, show run checks) in DNA Center and use Assurance to confirm traffic flows as intended.</li>
            </ol>
          </div>
        </div>
      </section>

      <ExpandableSection
        id="significance"
        title="Why DNA Center matters"
        lead="Cisco DNA Center is the network brain for enterprises that need speed, security and visibility across distributed environments. It makes network operations consistent, scalable and measurable."
        expanded={expanded.significance}
        onToggle={toggleSection}
        link="https://www.cisco.com/c/en/us/solutions/enterprise-networks/dna-center/index.html"
        linkText="Cisco DNA Center solution page"
        note="Learn how DNA Center supports intent-based networking, automation, and assurance across enterprise domains."
      >
        <p>Modern networks are expected to support hybrid work, cloud services, collaboration platforms, IoT devices, and remote offices. DNA Center provides the automation and assurance that allow IT teams to operate this complexity without increasing risk.</p>
        <p>Because it integrates with ISE, DNA Center can enforce access policy based on user identity, device posture, and role. That means IoT and BYOD devices can be segmented safely, guest access can be handled consistently, and security events can trigger automated responses.</p>
        <p>Service providers and enterprises alike use DNA Center to reduce manual operations, lower human error, and deliver faster change. It also enables applications to consume network context through APIs, making the network part of the broader digital workflow.</p>
        <p>On the admin side, DNA Center gives visibility into policy mappings, SGT assignments, and assurance trends. This helps surface misconfigurations, certificate issues, or policy mismatches before they become outages, and it provides the evidence required for security reviews.</p>
      </ExpandableSection>

      <div className="detail-grid">
        <div className="detail-card">
          <h3>Intent-Based Networking</h3>
          <p>Translate business intent into network policy and then validate with real-time assurance, closing the loop between what you want and what the network delivers.</p>
        </div>
        <div className="detail-card">
          <h3>Secure Segmentation</h3>
          <p>Protect users, devices, and applications by using ISE identity and SD-Access tags to enforce microsegmentation across wired and wireless domains.</p>
        </div>
        <div className="detail-card">
          <h3>Operational Velocity</h3>
          <p>Reduce manual configuration risk with automation, bulk device templates, image management, and build-then-deploy workflow orchestration.</p>
        </div>
        <div className="detail-card">
          <h3>Data-Driven Assurance</h3>
          <p>Use network telemetry, client health scores, and path diagnostics to find and fix issues before they impact users or applications.</p>
        </div>
      </div>

      <ExpandableSection
        id="architecture"
        title="DNA Center architecture and components"
        lead="DNA Center unifies management, analytics, orchestration and integrations in a single platform to run modern intent-based networks."
        expanded={expanded.architecture}
        onToggle={toggleSection}
        link="https://www.cisco.com/c/en/us/products/cloud-systems-management/dna-center/index.html"
        linkText="Cisco DNA Center architecture and licensing"
        note="Cisco’s official page for DNA Center architecture, system components, and licensing tiers."
      >
        <p>DNA Center is composed of application services, a network data platform, and integration layers. It talks southbound to devices using protocols such as SNMP, SSH, RESTCONF, and streaming telemetry, while also managing device credentials, AAA profiles, and service templates in a common data model.</p>
        <p>The platform also exposes northbound REST APIs for automation and integration. This allows network teams to build custom scripts, connect with ITSM and security tools, and embed network actions into operational workflows, including automated ticketing, remediation, or change approval processes.</p>
        <p>Licensing spans Essentials, Advantage, and Premier. Essentials covers device management, inventory, assurance, and basic automation. Advantage adds SDA, advanced policy, and enterprise segmentation. Premier unlocks analytics, cloud service integrations, and extended ecosystem connectors.</p>
        <p>For administrators, the architecture also means a centralized data plane for configuration, a secure northbound API layer, and dedicated services for telemetry, fault correlation, software image management, and audit log retention. It is built to support both SDA fabric and traditional campus use cases without siloed tooling.</p>
      </ExpandableSection>

      <div className="detail-grid">
        <div className="detail-card">
          <h3>Application Services</h3>
          <p>Design topology, policy, and assurance workflows in a visual interface, then automate provisioning across switches, APs, and fabric nodes.</p>
        </div>
        <div className="detail-card">
          <h3>Network Data Platform</h3>
          <p>Collects telemetry, events, fabric state, and client metrics so assurance can detect issues, score health, and surface root causes.</p>
        </div>
        <div className="detail-card">
          <h3>Southbound Connectivity</h3>
          <p>Communicates with network devices using SNMP, SSH, NETCONF, RESTCONF, CLI, and streaming telemetry for accurate control and monitoring.</p>
        </div>
        <div className="detail-card">
          <h3>Northbound APIs</h3>
          <p>Exposes REST APIs for automation, third-party orchestration, reporting, and integration with ITSM, security, and custom workflow platforms.</p>
        </div>
        <div className="detail-card">
          <h3>Licensing & Scale</h3>
          <p>Supports DNA Essentials for basic automation and monitoring, DNA Advantage for advanced assurance and SD-Access, and Premier for extended service integrations.</p>
        </div>
      </div>

      <ExpandableSection
        id="features"
        title="Core DNA Center concepts"
        lead="Understanding DNA Center architecture, automation and policy is essential for operating the network with confidence and precision."
        expanded={expanded.features}
        onToggle={toggleSection}
        link="https://www.cisco.com/c/en/us/solutions/enterprise-networks/dna-center/index.html"
        linkText="Cisco DNA Center automation and assurance"
        note="Explore Cisco’s detailing of automation, assurance, and how DNA Center supports operational health."
      >
        <p>In DNA Center, concepts such as intent, assurance, fabric, and identity are connected. You define policies once, apply them to user or device groups, and use analytics to ensure the network behaves as expected. The platform normalizes network state across wired, wireless, and fabric domains so the same intent can be enforced consistently.</p>
        <p>Automation reduces configuration drift and accelerates rollout across branches and campuses. Assurance provides feedback on client experience, application behavior, and network availability so teams can move from reactive firefighting to proactive operations. It uses health scores, path trace, device telemetry, and event correlation to give an operational view of policy compliance.</p>
        <p>Key admin tasks include monitoring policy distribution across fabric and non-fabric devices, validating service-level agreements with assurance thresholds, and using the network data platform to trace application paths end-to-end.</p>
      </ExpandableSection>

      <div className="grid-3">
        <div className="feature-card">
          <h3>Automation & Assurance</h3>
          <ul>
            <li>Intent-based workflows convert business goals into network configurations.</li>
            <li>Assurance validates network state and user experience continuously.</li>
            <li>Analytics surface issues using device telemetry, client health, and path trace.</li>
            <li>Network Data Platform stores telemetry and event history for troubleshooting.</li>
          </ul>
        </div>
        <div className="feature-card">
          <h3>Campus Fabric</h3>
          <ul>
            <li>SD-Access uses a routed underlay and VXLAN overlay to simplify policy and mobility.</li>
            <li>Fabric nodes include border, edge, and control plane components under a single fabric domain.</li>
            <li>Virtual networks and SGTs provide scalable segmentation independent of VLANs.</li>
            <li>Wireless and wired traffic are unified under the same policy plane.</li>
          </ul>
        </div>
        <div className="feature-card">
          <h3>Identity-Based Policy</h3>
          <ul>
            <li>ISE supplies user, device, and IoT identity to DNA Center.</li>
            <li>Policies are applied using Scalable Group Tags and access controls.</li>
            <li>Authentication, posture, and guest access are all part of the policy lifecycle.</li>
            <li>DNA Center can also enforce zone-based firewall policies and secure network access dynamically.</li>
          </ul>
        </div>
      </div>

      <ExpandableSection
        id="deployment"
        title="DNA Center deployment"
        lead="Deployment is the first step for a stable DNA Center environment. It includes appliance setup, network discovery, device onboarding and fabric preparation."
        expanded={expanded.deployment}
        onToggle={toggleSection}
        link="https://www.cisco.com/c/en/us/support/cloud-systems-management/dna-center/products-installation-and-configuration-guides-list.html"
        linkText="Cisco DNA Center installation and configuration guides"
        note="Direct access to Cisco installation and configuration guides for DNA Center deployment and appliance setup."
      >
        <p>Deployment includes installing DNA Center, preparing the network, and integrating with identity and security systems. The process is structured so that discovery, onboarding, and fabric design happen in a dependable sequence.</p>
        <p>Since DNA Center manages configuration and policy, it is essential to validate every step: device reachability, credential accuracy, inventory completeness, and fabric readiness. Good deployment practices reduce later troubleshooting effort and ensure assurance works from day one.</p>
        <p>As an administrator, you should verify management connectivity, enable SNMP/CLI or RESTCONF access, set up NTP and DNS, import certificates, and prepare the underlay routing topology before fabric automation begins. Also confirm that the device software images are compatible with DNA Center and that ISE and AAA profiles are ready for integration.</p>
        <p>Onboard devices in phases, using readiness checks and proactive validation for credentials, DHCP scopes, IP address management, and interface documentation. This reduces the risk of build failures and keeps fabric provisioning predictable.</p>
      </ExpandableSection>

      <div className="detail-grid">
        <div className="detail-card">
          <h3>Prerequisites</h3>
          <ul>
            <li>Supported physical or virtual DNA Center appliances with required CPU, RAM, and storage.</li>
            <li>Reliable IP connectivity between DNA Center, network devices, ISE, and external services.</li>
            <li>DNS entries, NTP, SSL certificates, and admin access configured before installation.</li>
            <li>Valid Cisco DNA license subscription for Essentials, Advantage, or Premier features.</li>
          </ul>
        </div>
        <div className="detail-card">
          <h3>Deployment Steps</h3>
          <ul>
            <li>Install DNA Center and complete the initial setup wizard.</li>
            <li>Configure system settings, credentials, and discovery profiles.</li>
            <li>Run network discovery and group devices into inventory.</li>
            <li>Onboard devices, assign roles, and perform readiness checks.</li>
            <li>Use Plug and Play or zero-touch provisioning for remote sites and branches.</li>
          </ul>
        </div>
        <div className="detail-card">
          <h3>Fabric Preparation</h3>
          <ul>
            <li>Define the SDA fabric domain, VRFs, and underlay routing design.</li>
            <li>Assign seed, edge, and border nodes and validate fabric control plane connectivity.</li>
            <li>Map wireless and wired sites, access policies, and segmentation groups.</li>
          </ul>
        </div>
        <div className="detail-card">
          <h3>ISE Readiness</h3>
          <ul>
            <li>Integrate DNA Center with ISE using pxGrid, certificates, and shared secret keys.</li>
            <li>Create authentication policies, profiling rules, and SGT mappings.</li>
            <li>Prepare ISE for MAB, 802.1X, WebAuth, and guest onboarding workflows.</li>
            <li>Enable posture and device profiling to classify users, devices, and IoT automatically.</li>
          </ul>
        </div>
        <div className="detail-card">
          <h3>Validation & Go-Live</h3>
          <ul>
            <li>Validate device communication, policy distribution, and fabric health.</li>
            <li>Run sample user access flows and verify segmentation using Assurance tools.</li>
            <li>Monitor the first production traffic patterns and adjust intent policies as needed.</li>
          </ul>
        </div>
      </div>

      <ExpandableSection
        id="sda"
        title="SD-Access and ISE integration"
        lead="SD-Access, DNA Center and ISE work together to automate the fabric, apply identity-based policy and secure every endpoint across campus and branch networks."
        expanded={expanded.sda}
        onToggle={toggleSection}
        link="https://www.cisco.com/c/en/us/solutions/enterprise-networks/software-defined-access/index.html"
        linkText="Cisco SD-Access and ISE integration"
        note="Official Cisco reference for SD-Access architecture and how ISE provides identity-based policy enforcement."
      >
        <p>SD-Access is Cisco’s implementation of software-defined networking for campus environments. It separates the network into an underlay and overlay, enabling centralized policy and segmentation across wired and wireless access.</p>
        <p>ISE is the identity engine. It authenticates users and devices, applies posture checks, and assigns SGTs. These SGTs are consumed by DNA Center and the fabric so every endpoint receives the correct access rights.</p>
        <p>When the fabric is operational, traffic is forwarded based on policy and not just on VLANs. This is what makes the network resilient, easier to manage, and more secure for modern campus use cases.</p>
        <p>For network admins, the key operational flow is: ISE identifies endpoints and maps them to SGTs, DNA Center maps those tags to virtual networks and policy, and fabric edge devices enforce that policy using SXP/Sgt-to-IP mapping, VXLAN encapsulation, and LISP control-plane reachability.</p>
      </ExpandableSection>

      <div className="insight-grid">
        <div className="insight-panel">
          <div className="insight-item"><span className="dot" /><div><strong>Underlay + Overlay</strong><p>The underlay is the routed physical network carrying VXLAN tunnels. The overlay handles endpoint traffic segmentation and mobility with LISP.</p></div></div>
          <div className="insight-item"><span className="dot" /><div><strong>Segmented Fabric</strong><p>DNA Center assigns Scalable Group Tags (SGTs) to users and devices. The fabric enforces segmentation at the edge, simplifying firewall policy and trust boundaries.</p></div></div>
          <div className="insight-item"><span className="dot" /><div><strong>Identity Context</strong><p>ISE provides authentication, profiling, posture, and guest workflows. DNA Center uses that context to map users and devices into policy groups automatically.</p></div></div>
          <div className="insight-item"><span className="dot" /><div><strong>Policy Enforcement</strong><p>Policy decisions are distributed to fabric nodes and enforced by edge switches, wireless controllers, and border nodes for consistent access control.</p></div></div>
          <div className="insight-item"><span className="dot" /><div><strong>pxGrid Integration</strong><p>DNA Center and ISE share context over pxGrid so security platforms, endpoint systems, and analytics tools can act on real-time user/device identity.</p></div></div>
        </div>
        <div className="device-tiles">
          <div className="device-card"><h4>Fabric Edge</h4><span>Edge switches learn endpoint identities and enforce microsegmentation.</span><div className="progress"><span className="status-chip">Discover</span><div className="meter p95"><div /></div></div></div>
          <div className="device-card"><h4>Border Nodes</h4><span>Border routers connect fabric overlay to external networks, internet, and data centers.</span><div className="progress"><span className="status-chip">Route</span><div className="meter p84"><div /></div></div></div>
          <div className="device-card"><h4>ISE Policy</h4><span>Identity Services Engine validates access, issues SGTs, and coordinates trust between users and devices.</span><div className="progress"><span className="status-chip">Secure</span><div className="meter p72"><div /></div></div></div>
        </div>
      </div>

      <ExpandableSection
        id="operations"
        title="Core DNA Center operations"
        lead="DNA Center operations are built on continuous discovery, automation, assurance, issue remediation and secure access policy enforcement."
        expanded={expanded.operations}
        onToggle={toggleSection}
        link="https://www.cisco.com/c/en/us/products/cloud-systems-management/dna-center/index.html"
        linkText="Cisco DNA Center operations and management"
        note="Read the Cisco perspective on operating DNA Center, lifecycle management, and network assurance best practices."
      >
        <p>Daily operations in DNA Center include reviewing assurance alerts, validating network health, handling device onboarding, and updating policies. Automation workflows and APIs help teams focus on service quality rather than device CLI tasks.</p>
        <p>Operations also include lifecycle management: patching devices, updating software images, refreshing policies, and monitoring the health of the fabric. DNA Center helps teams anticipate issues with predictive analytics rather than simply reacting to outages.</p>
        <p>In practice, administrators use DNA Center to compare inventory state with intended configuration, track device staging progress, respond to compliance exceptions, and export reports for operational review and audit readiness.</p>
        <p>Typical runbook tasks include daily assurance review, inventory reconciliation, credential expiration checks, software image compliance validation, and scheduled backup of the DNA Center database and configuration state.</p>
        <p>When an event is raised, use DNA Center’s assurance root-cause analysis, path trace, and log export to determine whether the issue is device, policy, or fabric-related, then update the intent policy or device profile accordingly.</p>
      </ExpandableSection>

      <div className="detail-grid">
        <div className="detail-card">
          <h3>Network Discovery</h3>
          <p>Discover infrastructure devices using IP ranges, SNMP, CLI credentials, and CDP/LLDP. Discovery populates inventory and builds the foundation for automation.</p>
          <p>Run discovery in controlled batches, validate device OS versions, and document SNMP/CLI access details before enabling provisioning or policy workflows.</p>
        </div>
        <div className="detail-card">
          <h3>Provisioning</h3>
          <p>Use templates, feature profiles, and provisioning workflows to configure switches, access points, and routers consistently.</p>
          <p>Provisioning should include role assignment, device capabilities, and feature verification. Always review generated configurations before deployment and use staging workflows for remote sites.</p>
        </div>
        <div className="detail-card">
          <h3>Assurance</h3>
          <p>Monitor device health, client experience, and application performance with telemetry-based assurance dashboards.</p>
          <p>Set up baseline health scores and build custom alerts for high-priority applications, slow paths, or devices with packet loss to catch issues before users notice them.</p>
        </div>
        <div className="detail-card">
          <h3>Policy & Segmentation</h3>
          <p>Define groups, policies, and trust boundaries. DNA Center translates these policies into fabric segmentation and access control.</p>
          <p>Use SGTs, scalable groups, and policy profiles to keep segmentation consistent across wired and wireless. Validate that policy maps to group-based firewall rules and that edge enforcement matches intent.</p>
        </div>
        <div className="detail-card">
          <h3>Troubleshooting</h3>
          <p>Use path trace, packet capture, and assurance alerts to identify network issues quickly and validate service reachability.</p>
          <p>Document common fault patterns, then use DNA Center’s root-cause view to separate application, policy, and infrastructure problems in the same workflow.</p>
        </div>
        <div className="detail-card">
          <h3>Analytics & Compliance</h3>
          <p>Leverage history, trending, and reports to prove service levels, support audits, and continuously improve operations.</p>
          <p>Track policy compliance, device drift, and readiness state over time. Use scheduled reports for change control, audits, and executive review.</p>
        </div>
        <div className="detail-card">
          <h3>APIs & Automation</h3>
          <p>Use DNA Center REST APIs to build scripts, workflows, and integrations. Automate repetitive tasks and connect with ITSM, security, and orchestration tools.</p>
          <p>Common admin automations include bulk device onboarding, daily health checks, and integration with ticketing systems for alert-to-ticket workflows.</p>
        </div>
        <div className="detail-card">
          <h3>Software Image Management</h3>
          <p>Plan image upgrades, stage software to devices, and deploy updates across the network using DNA Center lifecycle management.</p>
          <p>Maintain an image catalog, verify compatibility with device models, and use phased rollouts to reduce risk. Schedule upgrade windows and keep fallback images available.</p>
        </div>
      </div>

      <section id="devices" className="section">
        <h2>Devices Connected Information</h2>
        <p className="lead">Complete endpoint and device reporting for Cisco DNA Center, with separate GUI and CLI workflows for every type of connected device.</p>
        <div className="detail-grid">
          <div className="detail-card">
            <h3>GUI Workflow</h3>
            <ol>
              <li>
                <strong>Switch inventory (IP / MAC)</strong>
                <ol>
                  <li>Open DNA Center and navigate to <em>Inventory &gt; Devices</em>.</li>
                  <li>Select the site or building if needed, then filter <strong>Device Type = Switch</strong>.</li>
                  <li>Use the column selector to show <strong>Hostname</strong>, <strong>Management IP</strong>, <strong>MAC Address</strong>, <strong>Platform</strong>, <strong>Serial Number</strong>, and <strong>Software Version</strong>.</li>
                  <li>Verify the management IP is populated and the switch is in the correct site and role.</li>
                  <li>Export the results to CSV or Excel and confirm each row includes hostname, management IP, MAC, model, and software version.</li>
                </ol>
              </li>
              <li>
                <strong>End-user info on an access switch</strong>
                <ol>
                  <li>Open <em>Assurance &gt; Clients</em> (or <em>Inventory &gt; Clients</em> on older versions).</li>
                  <li>Filter by <strong>Site</strong>, <strong>Building</strong>, or <strong>Switch Hostname</strong> to narrow to the target access switch.</li>
                  <li>View the client list and confirm each entry contains <strong>Client IP</strong>, <strong>MAC</strong>, <strong>Username</strong>, <strong>Device Type</strong>, <strong>Access Port</strong>, and <strong>VLAN</strong>.</li>
                  <li>Inspect the client details pane for authentication state, session duration, and applied policy group.</li>
                  <li>Export the filtered client list as CSV, then verify the export includes client IP, MAC, username, port, VLAN, and auth state.</li>
                </ol>
              </li>
              <li>
                <strong>IP phone info</strong>
                <ol>
                  <li>In <em>Assurance &gt; Clients</em>, apply the filter <strong>Device Type = IP Phone</strong>, <strong>Voice</strong>, or <strong>Phone</strong>.</li>
                  <li>Limit results by site, switch, or voice VLAN as needed.</li>
                  <li>Select a client entry and verify <strong>MAC</strong>, <strong>IP</strong>, <strong>Switch Port</strong>, <strong>VLAN</strong>, and <strong>Policy Group</strong>.</li>
                  <li>Inspect voice registration details to confirm the device is registered and associated with the expected voice VLAN.</li>
                  <li>Export the voice client list and ensure the CSV includes phone MAC, IP, port, VLAN, SSID (if wireless), and policy group.</li>
                </ol>
              </li>
              <li>
                <strong>PC info</strong>
                <ol>
                  <li>Navigate to <em>Assurance &gt; Clients</em> and filter for <strong>Device Type = PC</strong> or <strong>Workstation</strong>.</li>
                  <li>Refine by the access switch hostname, site, or VLAN.</li>
                  <li>Confirm each record contains <strong>IP</strong>, <strong>MAC</strong>, <strong>Hostname</strong>, <strong>Access Port</strong>, <strong>VLAN</strong>, <strong>Auth Method</strong>, and <strong>Policy Group</strong>.</li>
                  <li>Verify the authentication details to determine if the PC is 802.1X authenticated, MAC-authenticated, or on guest access.</li>
                  <li>Export the filtered PC list to CSV and confirm the export includes all the relevant fields.</li>
                </ol>
              </li>
              <li>
                <strong>Wireless client info</strong>
                <ol>
                  <li>Open <em>Assurance &gt; Clients</em> and filter for the wireless client type or WLAN client category.</li>
                  <li>Apply additional filters for <strong>SSID</strong>, <strong>AP Name</strong>, or site.</li>
                  <li>Select a wireless client and inspect the detail page for <strong>SSID</strong>, <strong>AP</strong>, <strong>IP</strong>, <strong>MAC</strong>, <strong>Signal Strength</strong>, and <strong>Authentication Status</strong>.</li>
                  <li>Review session history or roaming details to confirm the client is associated with the expected access point.</li>
                  <li>Export the wireless client list and verify the CSV includes SSID, AP, IP, MAC, auth state, and policy group.</li>
                </ol>
              </li>
              <li>
                <strong>VLAN-based user group info</strong>
                <ol>
                  <li>Go to <em>Policy &gt; Groups</em> or <em>Assurance &gt; Clients</em> and filter by the target <strong>VLAN ID</strong> or VLAN segment.</li>
                  <li>Filter further by <strong>Policy Group</strong>, <strong>SGT</strong>, or endpoint group.</li>
                  <li>Inspect endpoint records for <strong>VLAN</strong>, <strong>IP</strong>, <strong>MAC</strong>, <strong>User Group</strong>, <strong>Access Port</strong>, and <strong>Authentication Context</strong>.</li>
                  <li>Verify endpoints are assigned the correct group and policy for the VLAN segment.</li>
                  <li>Export the filtered list and confirm the output includes VLAN, group, IP, MAC, port, and policy state.</li>
                </ol>
              </li>
            </ol>
          </div>
          <div className="detail-card">
            <h3>CLI Workflow</h3>
            <ol>
              <li>
                <strong>Switch inventory (IP / MAC)</strong>
                <ol>
                  <li>SSH to the switch: <code>ssh admin@&lt;switch-ip&gt;</code>.</li>
                  <li>Disable paging: <code>terminal length 0</code>.</li>
                  <li>Show the management interface IP: <code>show ip interface brief | include Vlan|Mgmt</code>.</li>
                  <li>Get the management MAC from the interface: <code>show interface Vlan1 | include Hardware</code> or <code>show interface GigabitEthernet0/0 | include Hardware</code>.</li>
                  <li>Collect inventory: <code>show inventory</code>.</li>
                  <li>Capture software/version details: <code>show version | include Version\|System serial number\|Processor board ID</code>.</li>
                  <li>Collect MAC and ARP tables: <code>show mac address-table | include DYNAMIC</code> and <code>show ip arp</code>.</li>
                  <li>Save the output to a file labeled with hostname and timestamp for traceability.</li>
                </ol>
              </li>
              <li>
                <strong>End-user info on an access switch</strong>
                <ol>
                  <li>SSH to the access switch.</li>
                  <li>List all connected ports: <code>show interface status | include connected</code>.</li>
                  <li>Inspect the port configuration: <code>show running-config interface GigabitEthernet1/0/XX</code>.</li>
                  <li>Show authentication state: <code>show authentication sessions interface GigabitEthernet1/0/XX</code>.</li>
                  <li>For 802.1X or MAB, run: <code>show dot1x all | include GigabitEthernet1/0/XX</code> and <code>show mab interface GigabitEthernet1/0/XX</code>.</li>
                  <li>List MACs on the port: <code>show mac address-table interface GigabitEthernet1/0/XX | include DYNAMIC</code>.</li>
                  <li>Map MAC to IP: <code>show ip arp | include &lt;MAC&gt;</code> or <code>show ip dhcp snooping binding | include &lt;MAC&gt;</code>.</li>
                  <li>Store the endpoint record with port, MAC, IP, VLAN, and auth method.</li>
                </ol>
              </li>
              <li>
                <strong>IP phone info</strong>
                <ol>
                  <li>SSH to the access switch.</li>
                  <li>Identify the phone port with: <code>show cdp neighbors interface GigabitEthernet1/0/XX detail</code> or <code>show lldp neighbors interface GigabitEthernet1/0/XX detail</code>.</li>
                  <li>Confirm voice VLAN assignment: <code>show running-config interface GigabitEthernet1/0/XX | include switchport voice vlan</code>.</li>
                  <li>Show the phone MAC learned on that port: <code>show mac address-table interface GigabitEthernet1/0/XX | include DYNAMIC</code>.</li>
                  <li>Map MAC to IP: <code>show ip arp | include &lt;MAC&gt;</code> or <code>show ip dhcp snooping binding | include &lt;MAC&gt;</code>.</li>
                  <li>Verify voice details with: <code>show voice vlan</code> and <code>show sip-ua status</code> if supported.</li>
                  <li>Save the phone record with port, MAC, IP, VLAN, and registration state.</li>
                </ol>
              </li>
              <li>
                <strong>PC info</strong>
                <ol>
                  <li>SSH to the switch.</li>
                  <li>List active user ports: <code>show interface status | include connected</code>.</li>
                  <li>Inspect the port config and security: <code>show running-config interface GigabitEthernet1/0/XX</code> and <code>show port-security interface GigabitEthernet1/0/XX</code>.</li>
                  <li>List MACs on the port: <code>show mac address-table interface GigabitEthernet1/0/XX | include DYNAMIC</code>.</li>
                  <li>Resolve IP via ARP or DHCP snooping: <code>show ip arp | include &lt;MAC&gt;</code> or <code>show ip dhcp snooping binding vlan &lt;VLAN_ID&gt;</code>.</li>
                  <li>Verify authentication: <code>show authentication sessions interface GigabitEthernet1/0/XX</code> and <code>show dot1x all</code>.</li>
                  <li>Save the endpoint details with port, MAC, IP, VLAN, auth mode, and port-security state.</li>
                </ol>
              </li>
              <li>
                <strong>Wireless client info</strong>
                <ol>
                  <li>SSH to the wireless controller or AP.</li>
                  <li>Show all wireless clients: <code>show wireless client summary</code> or <code>show client summary</code> on Catalyst 9800.</li>
                  <li>Inspect a specific client by MAC: <code>show wireless client mac-address &lt;MAC&gt;</code> or <code>show client detail &lt;MAC&gt;</code>.</li>
                  <li>Collect SSID, AP, IP, MAC, auth state, and signal strength.</li>
                  <li>For AP-level details, use: <code>show ap name &lt;AP-NAME&gt; client summary</code> and <code>show ap join stats summary</code>.</li>
                  <li>Save the wireless client output along with SSID, AP, and connection health details.</li>
                </ol>
              </li>
              <li>
                <strong>VLAN-based user group info</strong>
                <ol>
                  <li>SSH to the access or distribution switch.</li>
                  <li>Confirm VLAN existence: <code>show vlan brief | include &lt;VLAN_ID&gt;</code>.</li>
                  <li>List MACs in the VLAN: <code>show mac address-table vlan &lt;VLAN_ID&gt; | include DYNAMIC</code>.</li>
                  <li>Map MACs to IPs: <code>show ip arp | include &lt;MAC&gt;</code> or <code>show ip dhcp snooping binding vlan &lt;VLAN_ID&gt;</code>.</li>
                  <li>Verify auth and policy group assignment: <code>show authentication sessions vlan &lt;VLAN_ID&gt;</code> and <code>show access-session interface GigabitEthernet1/0/XX</code>.</li>
                  <li>Save the record including VLAN, MAC, IP, port, user group, SGT, and policy state.</li>
                </ol>
              </li>
            </ol>
          </div>
        </div>
        <div className="detail-card full-width">
          <h3>Workflow Verification Checklist</h3>
          <ul>
            <li>Check that every export contains the required fields: <strong>hostname</strong>, <strong>management IP</strong>, <strong>MAC</strong>, <strong>model</strong>, <strong>serial</strong>, and <strong>software version</strong>.</li>
            <li>Verify GUI exports include the same filtered results shown in the DNA Center client or device view before exporting.</li>
            <li>Confirm CLI outputs are captured with <code>terminal length 0</code> and saved to a timestamped file.</li>
            <li>Validate port-to-client mappings by comparing switch port, learned MAC, VLAN, and IP address.</li>
            <li>Ensure voice and wireless client records show registration/authentication state and policy group.</li>
            <li>For VLAN-based groups, confirm endpoint assignments match the expected VLAN ID and policy group in the export.</li>
            <li>Record the date, operator name, device hostname, and file path for every exported dataset.</li>
          </ul>
        </div>
      </section>

      <section id="troubleshooting" className="section">
        <h2>DNAC Troubleshooting</h2>
        <p className="lead">Common DNAC issues, root-cause details, and step-by-step solutions for discovery, provisioning, assurance, policy, fabric, and integration problems.</p>
        <div className="detail-grid">
          <div className="detail-card">
            <h3>Discovery failures</h3>
            <ol>
              <li>Check reachability: verify the device is pingable from DNA Center and that SNMP/credentials are correct for the target device.</li>
              <li>Validate credentials: confirm SNMP community strings, CLI username/password, and enable secret are correct for the target device.</li>
              <li>Inspect discovery logs: go to <em>Provision &gt; Discovery</em> and review failed task details for IP, SSH timeout, or credential errors.</li>
              <li>Fix device access: enable SSH, allow SNMP, and ensure the management interface is on the same network or routed path as DNA Center.</li>
              <li>Retry discovery after resolving connectivity/credential issues and validate the device appears in inventory.</li>
            </ol>
          </div>
          <div className="detail-card">
            <h3>Provisioning or template deployment errors</h3>
            <ol>
              <li>Review the exact failed task output in the provisioning history.</li>
              <li>Identify whether the error is template syntax, missing variable, device mismatch, or feature unsupported by the device image.</li>
              <li>Check device readiness: confirm the target switch has the correct software version and sufficient resources.</li>
              <li>Correct the template or use a supported feature template. For CLI templates, fix the commands and required variables.</li>
              <li>Re-run the provisioning task and monitor for successful completion. If failures persist, use CLI on the device to inspect error details and compare with the intended configuration.</li>
            </ol>
          </div>
          <div className="detail-card">
            <h3>Inventory sync and device state mismatch</h3>
            <ol>
              <li>Verify device state in <em>Inventory &gt; Devices</em>. Look for devices marked as disconnected, out-of-sync, or unsupported.</li>
              <li>Confirm device policies and templates are in sync by checking the device config against DNA Center intent.</li>
              <li>Run <code>show running-config</code> on the device to see if the expected commands are present.</li>
              <li>Use DNA Center’s config diff or reconciliation tool to identify drift and apply the corrected configuration.</li>
              <li>Re-sync the device inventory after repairing the mismatch and verify the device returns to a healthy state.</li>
            </ol>
          </div>
          <div className="detail-card">
            <h3>Assurance data missing or stale</h3>
            <ol>
              <li>Check device connectivity and ensure telemetry protocols are enabled (SNMP, NETCONF, or streaming telemetry).</li>
              <li>Validate that the device is sending telemetry by reviewing <em>Assurance &gt; Network Health</em> and looking for stale or absent metrics.</li>
              <li>Confirm collector reachability and that the device’s data is not blocked by firewalls or ACLs.</li>
              <li>Restart the assurance collector or perform a re-discovery if telemetry remains missing.</li>
              <li>Verify after recovery by checking client health scores, path trace data, and recent events in assurance dashboards.</li>
            </ol>
          </div>
          <div className="detail-card">
            <h3>Policy not enforcing or incorrect access</h3>
            <ol>
              <li>Inspect policy configuration in <em>Policy &gt; Groups</em> and ensure source/destination groups and services are correct.</li>
              <li>Verify that the policy is applied to the correct site, virtual network, and device group.</li>
              <li>Use live path trace or policy trace tools to see where the traffic is evaluated and why it is being allowed or denied.</li>
              <li>Confirm SGTs, VLAN assignments, and access control settings on the edge switch or wireless AP.</li>
              <li>Adjust the rule order or correct intended groups, then redeploy and verify with test traffic.</li>
            </ol>
          </div>
          <div className="detail-card">
            <h3>Fabric or SDA registration issues</h3>
            <ol>
              <li>Check seed node reachability and underlay connectivity between DNA Center and fabric devices.</li>
              <li>Review fabric status in <em>Design &gt; SD-Access</em> for failed nodes or registration errors.</li>
              <li>Validate control-plane parameters such as LISP, OSPF/BGP, and fabric domain settings.</li>
              <li>Resolve any node registration issues by fixing software mismatches, certificate errors, or unreachable nodes.</li>
              <li>Once fixed, re-register nodes and validate the fabric topology and endpoint identity distribution.</li>
            </ol>
          </div>
          <div className="detail-card">
            <h3>ISE integration and identity issues</h3>
            <ol>
              <li>Ensure pxGrid and northbound API connectivity is healthy between DNA Center and ISE.</li>
              <li>Check shared secret, certificate, and communication state in the identity services configuration.</li>
              <li>Verify endpoint profiling, authentication, and SGT propagation from ISE to DNA Center.</li>
              <li>Use authentication logs and identity traces to determine if endpoints are failing authentication or are not being assigned the correct groups.</li>
              <li>Remedy by updating ISE policy sets, re-running discovery, and verifying that DNA Center reflects the correct endpoint identity mapping.</li>
            </ol>
          </div>
          <div className="detail-card">
            <h3>API and automation errors</h3>
            <ol>
              <li>Check the API response codes and payload for authentication failures, invalid parameters, or rate limits.</li>
              <li>Confirm the API user has the correct role and permissions in DNA Center.</li>
              <li>Validate that the endpoint URI and JSON payload match the DNA Center API version in use.</li>
              <li>Fix any errors and retry the API call, or use the built-in API documentation and Swagger UI for validation.</li>
              <li>Log unsuccessful attempts and add retries or error handling in automation scripts.</li>
            </ol>
          </div>
          <div className="detail-card">
            <h3>Database and backup issues</h3>
            <ol>
              <li>Verify DNA Center backup jobs are completing successfully under <em>Maintenance &gt; Backup</em>.</li>
              <li>Check disk space, database health, and any error messages on the backup task.</li>
              <li>Validate that snapshots are recoverable by testing restore to a lab or staging environment.</li>
              <li>If backup fails, resolve storage, network, or permission issues, then rerun the backup job.</li>
              <li>Keep a separate offline backup of the most critical export data and configuration state.</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="roadmap" className="section">
        <h2>Operational Roadmap</h2>
        <p className="lead">Turn intent into action with a guided network lifecycle from discovery, deployment, assurance, and optimization.</p>
        <div className="timeline">
          <div className="timeline-card"><strong>Step 1 · Discover &amp; Design</strong><span>Discover every Catalyst switch, AP, and fabric node automatically. Build templates, validate site topology, and document VLAN/VRF boundaries for fast rollout.</span></div>
          <div className="timeline-card"><strong>Step 2 · Automate &amp; Deploy</strong><span>Use zero-touch provisioning, secure onboarding, and configuration templates to deploy consistent policies across all locations. Phase deployments to verify staging before production.</span></div>
          <div className="timeline-card"><strong>Step 3 · Assure &amp; Protect</strong><span>Monitor application experience, detect anomalies, and enforce segmentation across wired and wireless users. Use assurance dashboards and path trace to validate service levels.</span></div>
          <div className="timeline-card"><strong>Step 4 · Review &amp; Optimize</strong><span>Review compliance reports, audit change history, and update intent policies based on trends and business requirements. Keep the network aligned with operational goals.</span></div>
        </div>

        <div className="roadmap-steps">
          <div className="step-card">
            <div className="step-label"><span className="step-dot" /> <strong>Assign Data VLAN in Fabric Site</strong></div>
            <ol>
              <li>Open DNA Center and go to <strong>Design &gt; Network Settings</strong> or the Fabric workspace for the target site.</li>
              <li>Confirm the site is created and the fabric nodes are assigned to that site in <strong>Inventory &gt; Devices</strong>.</li>
              <li>Under <strong>Design &gt; VLANs</strong>, create or verify the data VLAN ID and name for the site.</li>
              <li>Assign the VLAN to the correct virtual network or policy group in the same site context.</li>
              <li>Open the switch port profile and set the access port to the data VLAN: <code>switchport mode access</code>, <code>switchport access vlan &lt;DATA_VLAN&gt;</code>, and <code>spanning-tree portfast</code>.</li>
              <li>Apply the access port profile to the correct switch or interface group and deploy the template.</li>
              <li>Verify connectivity in DNA Center by checking the site client list and by running <strong>Assurance &gt; Clients</strong> for the assigned VLAN.</li>
            </ol>
          </div>
          <div className="step-card">
            <div className="step-label"><span className="step-dot" /> <strong>Assign Voice VLAN</strong></div>
            <ol>
              <li>Navigate to the target access switch or port template in DNA Center.</li>
              <li>Enable voice VLAN support on the switch access port and set <strong>Voice VLAN ID</strong> to the correct value.</li>
              <li>Configure the access VLAN and voice VLAN pair so data remains on the user VLAN and voice uses the dedicated voice VLAN.</li>
              <li>Ensure the access port profile includes voice QoS settings, trust DSCP, and the correct voice VLAN policy.</li>
              <li>Deploy the changes and validate the port configuration in the device inventory.</li>
              <li>Confirm the phone registers to the voice VLAN by checking the client entry in <strong>Assurance &gt; Clients</strong> with device type set to IP Phone.</li>
            </ol>
          </div>
          <div className="step-card">
            <div className="step-label"><span className="step-dot" /> <strong>Close Port for ISE Authentication</strong></div>
            <ol>
              <li>Open DNA Center <strong>Policy &gt; Access Control</strong> and create or update the port authentication profile for the access switch.</li>
              <li>Enable 802.1X or MAB authentication on the access port profile, and set the action for unauthorized endpoints to a restricted VLAN or guest VLAN until ISE authentication succeeds.</li>
              <li>Choose the authentication order: <code>dot1x</code>, <code>mab</code>, and define the failure action as <code>authorize vlan &lt;RESTRICTED_VLAN&gt;</code> or equivalent closed state.</li>
              <li>Assign the authentication profile to the target switch or port bundle and deploy it through DNA Center.</li>
              <li>On the switch CLI, verify the port is in closed authentication mode with <code>show authentication sessions interface GigabitEthernet1/0/XX</code> and <code>show dot1x all</code>.</li>
              <li>Check the ISE policy decision and session status, confirming the endpoint is allowed only after successful authentication and policy evaluation.</li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContentSections;
