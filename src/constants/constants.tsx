import { Service, Stat, Partner, Testimonial } from '../types/types';

export interface HeroSlide {
  id: string;
  tagline: string;
  title: string;
  highlight: string;
  description: string;
  imageUrl: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'kss-main',
    tagline: 'TRUSTED BY ENTERPRISES',
    title: 'SECURED BY',
    highlight: 'INNOVATION',
    description: 'Kanha Security System develops advanced electronic safety and automation solutions designed to protect the infrastructure of tomorrow. Empowering organizations to stay ahead of evolving threats.',
    imageUrl: '/project_images/security_surveillance_systems.webp',
    iconName: 'Shield'
  },
  {
    id: 'mpass',
    tagline: 'MULTI-FACTOR AUTHENTICATION',
    title: 'MPASS',
    highlight: 'IDENTITY',
    description: 'Protect your enterprise with robust identity verification. Multi-factor solutions designed for high-security environments, ensuring only authorized access to your most critical assets.',
    imageUrl: '/project_images/access_control_modern.webp',
    iconName: 'Lock'
  },
  {
    id: 'linq2',
    tagline: 'MESSAGING INFRASTRUCTURE',
    title: 'LINQ2',
    highlight: 'CONNECT',
    description: 'Enterprise-grade messaging delivery with over 10B+ monthly capacity. Scalable, secure, and lightning-fast communication infrastructure for modern global businesses.',
    imageUrl: '/project_images/IT_Networking.webp',
    iconName: 'Network'
  },
  {
    id: 'infoshield',
    tagline: 'SECURITY AWARENESS',
    title: 'INFOSHIELD',
    highlight: 'EMPOWER',
    description: 'Educate your workforce with high-completion training modules. Transform your employees into your strongest defense against social engineering and cyber threats.',
    imageUrl: '/project_images/shiv_nadar_school__project-1.webp',
    iconName: 'Building'
  },
  {
    id: 'cybersphere',
    tagline: 'SITUATIONAL AWARENESS',
    title: 'CYBER',
    highlight: 'SPHERE',
    description: 'A unified command and control hub for total building automation and security management. Real-time visibility and proactive threat detection in a single intuitive interface.',
    imageUrl: '/project_images/building_management_system.webp',
    iconName: 'Zap'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'bms',
    title: 'Building Management System (BMS)',
    description: 'A BMS integrates HVAC, lighting, power and energy management, lifts, fire systems and building services into a single dashboard for efficient operation and measurable energy savings. Designed for commercial and institutional projects, our BMS reduces operating costs while improving occupant comfort and safety.',
    features: [
      'Centralized monitoring & control of HVAC, lighting and lifts',
      'Energy management and automated schedules',
      'Fault detection and alarm reporting for fast remediation',
      'Open protocols for third-party integration (BACnet, Modbus etc.)',
      'Mobile monitoring & historical trend analytics'
    ],
    icon: 'Building',
    imageUrl: '/project_images/building_management_system.webp',
    ctaText: 'Request a BMS site assessment and energy audit.',
    faqs: [
      { question: 'How does a BMS reduce energy costs?', answer: 'By optimizing schedules, reducing simultaneous loads, and using real-time sensor feedback to control HVAC and lighting, lowering consumption and peak demand.' },
      { question: 'Can it integrate with existing equipment?', answer: 'Yes — we use open protocols and gateways to integrate most legacy mechanical and electrical systems.' },
      { question: 'What’s typical commissioning time?', answer: 'Depends on scope; small projects (single building) typically 2–6 weeks for installation and commissioning.' }
    ]
  },
  {
    id: 'isms',
    title: 'Integrated Security Management System (ISMS)',
    description: 'Our ISMS combines CCTV, access control, alarms and perimeter sensors into a single command-and-control platform so security teams can detect, verify and respond quickly. Ideal for campus, industrial and mixed-use sites.',
    features: [
      'Real-time situational awareness dashboard',
      'Alarm correlation and automated workflows',
      'GIS / site-mapping and video linkage',
      'Incident logging and audit trail',
      'Scalable architecture for multi-site deployments'
    ],
    icon: 'Shield',
    imageUrl: '/project_images/security_surveillance_systems.webp',
    ctaText: 'Schedule a demo of the command-control interface.',
    faqs: [
      { question: 'Will ISMS work across multiple sites?', answer: 'Yes — the system supports centralized management for multiple locations with role-based access.' },
      { question: 'How are incidents escalated?', answer: 'Through configurable rules: auto-notifications, on-call paging, and linked video verification.' },
      { question: 'Is historical event data retained?', answer: 'Yes — logs, video clips and incident records are retained per your retention policy.' }
    ]
  },
  {
    id: 'access-control',
    title: 'Access Control System',
    description: 'Control who, where and when people enter your premises. We deliver proximity, smart-card and biometric systems (fingerprint, palm, iris) to match operational and security needs — from corporate offices to sensitive facilities.',
    features: [
      'Proximity / smart card and biometric readers',
      'Time & attendance and visitor management integration',
      'Door controllers with anti-tamper detection',
      'Integration with turnstiles and barriers',
      'Centralized policy management & audit logs'
    ],
    icon: 'Lock',
    imageUrl: '/project_images/access_control_modern.webp',
    ctaText: 'Get a free door-count plan and credentialing strategy.',
    faqs: [
      { question: 'Can access policies be changed centrally?', answer: 'Yes — access rights, schedules and groups are administered centrally and pushed to controllers.' },
      { question: 'Do you support multi-factor authentication?', answer: 'Yes — combinations of card + PIN or biometric + PIN are supported.' },
      { question: 'How is auditability handled?', answer: 'All entries/exits are recorded with user ID, time, reader and optional linked video.' }
    ]
  },
  {
    id: 'cctv',
    title: 'CCTV System (IP & Analogue)',
    description: 'Our CCTV solutions provide high-resolution IP cameras, intelligent analytics and reliable storage to monitor activity, deter crime and verify incidents. We configure systems for perimeter, parking, retail and critical infrastructure.',
    features: [
      'IP & analogue camera options; 4K support',
      'Video analytics: motion, loitering, line-crossing, ANPR (LPR)',
      'Centralized NVR / VMS with scalable storage',
      'Robust remote access and failover options',
      'Health monitoring and automated alerts'
    ],
    icon: 'Camera',
    imageUrl: '/project_images/security_surveillance_systems_2.webp',
    ctaText: 'Request a CCTV site survey and camera placement plan.',
    faqs: [
      { question: 'IP or analogue — which should I choose?', answer: 'IP cameras are recommended for higher resolution and analytics; analogue is cost-effective for simple coverage.' },
      { question: 'Can CCTV integrate with access control?', answer: 'Yes — camera snapshots or live video can be linked to access events for verification.' },
      { question: 'How is video retention managed?', answer: 'Retention is configurable by resolution and event; archived clips can be exported for investigations.' }
    ]
  },
  {
    id: 'fire-alarm',
    title: 'Fire Alarm System',
    description: 'We supply addressable and conventional fire alarm systems with intelligent smoke and heat detection, manual call points and integrated alarm management to ensure fast, reliable detection across buildings.',
    features: [
      'Addressable detection for precise locating',
      'Smoke, heat, and multi-sensor detectors',
      'Zoned annunciation panels and remote notification',
      'Integration with building BMS and voice evacuation',
      'Compliance with local codes and standards'
    ],
    icon: 'Flame',
    imageUrl: '/project_images/fire_alarm_system.webp',
    ctaText: 'Arrange a fire-safety site assessment and evacuation plan.',
    faqs: [
      { question: 'What’s the difference between addressable and conventional systems?', answer: 'Addressable systems identify the exact detector location; conventional systems identify zones.' },
      { question: 'Can alarms trigger other systems?', answer: 'Yes — alarms can trigger HVAC shutdown, door release, or PA voice evacuation.' },
      { question: 'Do you provide certification and testing?', answer: 'Yes — we perform acceptance testing and provide documentation for compliance.' }
    ]
  },
  {
    id: 'fire-suppression',
    title: 'Fire Suppression System',
    description: 'For server rooms, archives and protected spaces we supply clean-agent systems (FM-200, NOVEC), sprinkler systems and hydrant networks. Systems are engineered to control and extinguish fires while minimizing collateral damage.',
    features: [
      'FM-200 / NOVEC clean-agent systems for sensitive areas',
      'Wet/dry sprinkler design and hydraulic calculations',
      'Hydrant networks and deluge solutions',
      'Automatic detection-to-release sequencing',
      'Maintenance and recharging services'
    ],
    icon: 'Zap',
    imageUrl: '/project_images/fm_200_system.webp',
    ctaText: 'Request a protected-space suppression design.',
    faqs: [
      { question: 'Are clean agents safe for electronics?', answer: 'Yes — FM-200 and NOVEC are non-conductive and safe for sensitive equipment.' },
      { question: 'How often must suppression systems be serviced?', answer: 'Annual inspections and periodic functional tests per manufacturer and code.' },
      { question: 'Can suppression interface with fire alarms?', answer: 'Yes — detection systems can initiate pre-discharge and discharge sequences.' }
    ]
  },
  {
    id: 'perimeter',
    title: 'Perimeter Protection System',
    description: 'Protect the outermost boundary with active sensors, fiber-optic detection, buried cable systems and smart fencing. Our perimeter solutions detect intrusion attempts early and integrate with CCTV and alarms.',
    features: [
      'Vibration and transceiver sensors for fences and walls',
      'Fiber-optic and buried cable detection options',
      'Long-range detection for large perimeters',
      'Integration with lighting, CCTV and access control',
      'False-alarm mitigation and zone tuning'
    ],
    icon: 'Fence',
    imageUrl: '/project_images/perimeter-protection-system.svg',
    ctaText: 'Book a perimeter threat assessment.',
    faqs: [
      { question: 'Do perimeter sensors give many false alarms?', answer: 'Proper sensor selection and tuning reduce false alarms; we tune systems to site conditions.' },
      { question: 'Can perimeter detection be integrated with lighting?', answer: 'Yes — detection events can trigger targeted lighting and camera PTZ focus.' },
      { question: 'What range can buried sensors cover?', answer: 'Systems vary; design is based on site geometry and threat profile.' }
    ]
  },
  {
    id: 'pava',
    title: 'Public Address & Voice Evacuation (PA / PAVA)',
    description: 'PA and voice-evacuation systems deliver intelligible messages during emergencies and support everyday announcements in malls, hospitals, schools and corporate campuses.',
    features: [
      'Multi-zone paging and scheduled messaging',
      'Emergency voice evacuation with priority override',
      'Background music and BGM integration for lobbies',
      'Redundant amplifiers and supervised speaker lines',
      'Integration with fire alarm and ISMS'
    ],
    icon: 'Megaphone',
    imageUrl: '/project_images/public_address_system.webp',
    ctaText: 'Get a zoning and intelligibility study.',
    faqs: [
      { question: 'What is voice evacuation?', answer: 'A high-priority system that overrides other audio to broadcast evacuation instructions with clear intelligibility.' },
      { question: 'Can PA be used for regular announcements?', answer: 'Yes — day-to-day paging and scheduled messages are standard.' },
      { question: 'How is system reliability ensured?', answer: 'Via redundant amplifiers, supervised speaker lines and battery backup.' }
    ]
  },
  {
    id: 'av-lighting',
    title: 'Audio-Visual & Lighting Control System',
    description: 'We deliver integrated AV and lighting control systems for boardrooms, auditoria and hospitality spaces — offering simple user interfaces, source routing, and scene-based lighting control.',
    features: [
      'Centralized matrix switching and digital signal routing',
      'Lighting scenes, dimming controls and occupancy sensing',
      'Source controllers for video conferencing and AV streaming',
      'Simple touch-panel or app-based user interfaces',
      'Commissioning and user training included'
    ],
    icon: 'Video',
    imageUrl: '/project_images/audio-visual-lighting-control.svg',
    ctaText: 'Book an AV workflow and control UX review.',
    faqs: [
      { question: 'Will AV work with popular video-conferencing platforms?', answer: 'Yes — systems are tested with major vendors and configured for single-touch meeting start.' },
      { question: 'Can lighting scenes be scheduled?', answer: 'Yes — scenes and cron-based schedules are standard.' },
      { question: 'Do you provide operator training?', answer: 'Yes — user training and operation manuals are provided at handover.' }
    ]
  },
  {
    id: 'networking',
    title: 'Data & Voice Networking Solutions',
    description: 'Structured cabling, switches, LAN design and IP telephony form the backbone of your security and business services. We design resilient networks to support CCTV, access control, data and voice systems.',
    features: [
      'Structured copper & fiber cabling with labeling and test reports',
      'LAN/WAN switching and VLAN/security segregation',
      'VoIP / IP telephony design and PSTN integration',
      'Rack design, cable management and redundancy',
      'Documentation and test certification'
    ],
    icon: 'Network',
    imageUrl: '/project_images/IT_Networking.webp',
    ctaText: 'Request a network capacity and vulnerability review.',
    faqs: [
      { question: 'Do you handle cabling certification?', answer: 'Yes — we provide end-to-end testing and certification (FLUKE test reports).' },
      { question: 'Can network prioritize CCTV traffic?', answer: 'Yes — QoS and VLANs are configured to ensure video throughput and low latency.' },
      { question: 'Do you offer ongoing network support?', answer: 'Yes — SLA-based support and monitoring packages are available.' }
    ]
  },
  {
    id: 'datacenter',
    title: 'Datacentre Protection & VESDA',
    description: 'Protect critical IT assets with VESDA very-early-smoke-detection systems, leak detection, raised flooring, PAC and environmental monitoring to prevent outages and data loss.',
    features: [
      'VESDA for earliest possible smoke detection',
      'Water/leak detection and rodent-repellent measures',
      'Raised flooring and optimized airflow (PAC systems)',
      'Environmental monitoring (temp/humidity/power)',
      'Integration with BMS and fire suppression'
    ],
    icon: 'Database',
    imageUrl: '/project_images/wld_system.webp',
    ctaText: 'Arrange a datacentre risk assessment.',
    faqs: [
      { question: 'Why use VESDA?', answer: 'VESDA detects microscopic smoke early, enabling intervention before visible smoke or fire develops.' },
      { question: 'What is PAC?', answer: 'Precision Air Conditioning (PAC) maintains optimal temperature and humidity for IT equipment.' },
      { question: 'Do you provide leak detection?', answer: 'Yes — point and cable-based leak detection with alarm integration.' }
    ]
  },
  {
    id: 'contraband',
    title: 'Contraband Detection Solutions',
    description: 'We supply baggage scanners, door-frame metal detectors, handheld detectors (HHMD), DFMDs and vapor tracing systems to detect contraband and hazardous materials in airports, institutions and gated facilities.',
    features: [
      'X-ray baggage scanners and conveyor systems',
      'Door-frame metal detectors and walkthroughs',
      'Hand-held metal detectors (HHMD) and DFMDs',
      'Vapor trace and chemical sniffing options',
      'Operator training and calibration services'
    ],
    icon: 'Search',
    imageUrl: '/project_images/contraband-detection-solutions.svg',
    ctaText: 'Request equipment selection and screening-flow design.',
    faqs: [
      { question: 'Are baggage scanners certified?', answer: 'Yes — we supply certified units meeting regulatory standards.' },
      { question: 'How is operator competency assured?', answer: 'We provide hands-on training and periodic re-certification.' },
      { question: 'Do vapour-trace units detect drugs/explosives?', answer: 'They detect trace particles and vapors depending on sensor capability and calibration.' }
    ]
  },
  {
    id: 'gate-automation',
    title: 'Gate Automation & Barriers',
    description: 'From boom barriers and swing/slide gates to rising bollards and UVSS (under-vehicle scanning), our gate automation solutions provide secure vehicle access and perimeter hardening for residential, commercial and industrial sites.',
    features: [
      'Motorized bollards, boom barriers and full-height turnstiles',
      'UVSS and under-vehicle inspection options',
      'ANPR/LPR integration for automated vehicle identification',
      'safety interlocks, loop detectors and fail-safe controls',
      'Local maintenance and spare parts support'
    ],
    icon: 'Car',
    imageUrl: '/project_images/gate-automation-barriers.svg',
    ctaText: 'Get a traffic flow & gate-hardware feasibility report.',
    faqs: [
      { question: 'Can gates integrate with visitor management?', answer: 'Yes — ANPR and intercom integration with booking systems is available.' },
      { question: 'Are rising bollards crash-rated?', answer: 'We supply rated bollards per threat-level and local standards.' },
      { question: 'What backup options exist for power outages?', answer: 'Battery backup or UPS systems can maintain operation for critical access points.' }
    ]
  },
  {
    id: 'emergency-lighting-hydrant',
    title: 'Emergency Lighting & Fire Hydrant Systems',
    description: 'Emergency lighting and hydrant systems ensure safe egress and firefighting capability. We design, supply and install compliant lighting and hydrant networks aligned with NBC/NFPA guidelines.',
    features: [
      'Emergency luminaires with battery backup and self-test',
      'Escape-route illumination and photometric planning',
      'Hydrant mains, hydrant valves and hose-reel systems',
      'Commissioning to local regulatory standards',
      'Annual testing and maintenance contracts'
    ],
    icon: 'Droplets',
    imageUrl: '/project_images/emergency-lighting-fire-hydrant.svg',
    ctaText: 'Request a compliance check for emergency lighting and hydrants.',
    faqs: [
      { question: 'How frequently must emergency lights be tested?', answer: 'Monthly functional checks and annual full-duration testing are typical.' },
      { question: 'Do you design hydrant systems to code?', answer: 'Yes — layouts, hydraulic calculations and installation to NBC/NFPA standards.' },
      { question: 'Can emergency lighting run on central battery?', answer: 'Yes — options include central battery systems or local self-contained units.' }
    ]
  },
  {
    id: 'rodent-leak',
    title: 'Rodent Repellent & Water Leak Detection Systems',
    description: 'Specialized infrastructure protection: electronic rodent repellent measures, early water/leak detection for ceilings and raised floors, and preventative services to protect sensitive assets and finishes.',
    features: [
      'Electronic rodent repellent deployment and monitoring',
      'Cable-based and point leak detection for floors and ceilings',
      'Integrated alarms and shutdown workflows for leaks',
      'Preventive maintenance and site surveys',
      'Reporting and corrective action guidance'
    ],
    icon: 'Zap',
    imageUrl: '/project_images/rodent_repellent_system.webp',
    ctaText: 'Book a site survey for environmental and pest-risk mitigation.',
    faqs: [
      { question: 'How do leak detectors alert operators?', answer: 'They trigger local alarms and can send alerts to central monitoring systems for immediate action.' },
      { question: 'Are rodent repellent systems environmentally safe?', answer: 'Electronic and non-toxic repellent technologies are used; selection is based on site constraints.' },
      { question: 'Do you provide periodic inspections?', answer: 'Yes — inspection, calibration and preventative maintenance packages are available.' }
    ]
  }
];

export const STATS: Stat[] = [
  { label: 'Security Impact', value: '10B+', subLabel: 'Messages/year delivered via LinQ2' },
  { label: 'Operational Efficiency', value: '99%', subLabel: 'Drop in phishing logins with mPass' },
  { label: 'Adoption & Reach', value: '2x', subLabel: 'Higher training completion using InfoShield' },
  { label: 'Integrations', value: '5000+', subLabel: 'Integrations across enterprise & legacy' },
  { label: 'Compliance', value: '80%', subLabel: 'Of Saudi banks trust KSS' }
];

export const PARTNER_LOGOS: string[] = [
  'Honeywell', 'SYRIS', 'MORLEY IAS', 'SAMSUNG TECHWIN', 'PELCO', 'HEINRICH', 'COOPER', 'TRANE', 'HID', 'Rapiscan Systems', 'SAFRAN Morpho', 'HIKVISION', 'DETEX', 'Kidde', 'Schneider Electric', 'Magnetic Autocontrol', 'BlueBox', 'FAAC', 'EDWARDS', '3M', 'SYSTEM SENSOR', 'Secutron', 'AXIS COMMUNICATIONS', 'HOCHIKI', 'GARRETT', 'EINS', 'BOSCH', 'UV-GUARD', 'CISCO', 'hp', 'DELL', 'AMP NETCONNECT'
];

export const CUSTOMER_LOGOS: string[] = [
  'RAMADA', 'at&t', 'EXPERION', 'DAIKIN', 'ESTER INDUSTRIES LTD.', 'LI & FUNG LIMITED', 'TATA AIG INSURANCE', 'Fareportal', 'UP BHAVAN', 'OKS GROUP', 'GLC', 'SOM PRO FACILITIES', 'Noble System Control', 'ZARA OSSA', 'AMAZON VENDING SOLUTIONS', 'SPL', 'SHIV NADAR SCHOOL', 'NIFTEM', 'JSG', 'KRISHNA CONSTRUCTION'
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Alex Thompson",
    role: "IT Director at Tata AIG",
    content: "KSS has transformed our building management. Their integrated approach to security and automation is truly world-class.",
    avatar: "/kanha_security_logo.webp"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do you provide end-to-end design and installation?",
    answer: "Yes, KSS provides comprehensive turnkey solutions from initial site assessment and system design to installation, testing, and final commissioning."
  },
  {
    question: "What kind of maintenance support (AMC) do you offer?",
    answer: "We offer both comprehensive and non-comprehensive Annual Maintenance Contracts. Our support includes 24/7 technical assistance and routine system health checks."
  },
  {
    question: "Are your fire safety systems compliant with local and international codes?",
    answer: "Absolutely. All our fire protection and suppression systems are designed and executed strictly as per NBC (National Building Code) and NFPA guidelines."
  },
  {
    question: "Can multiple security systems be integrated into a single platform?",
    answer: "Yes, our Integrated Security Management System (ISMS) is designed to combine CCTV, Access Control, Fire Alarms, and BMS into a single unified command center."
  },
  {
    question: "What geographical areas do you serve?",
    answer: "Based in New Delhi, we provide services across major industrial and commercial hubs throughout India, handling large-scale enterprise deployments."
  }
];
