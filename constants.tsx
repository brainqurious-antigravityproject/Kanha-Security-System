
import { Service, Stat, Partner, Testimonial } from './types';

export interface HeroSlide {
  id: string;
  tagline: string;
  title: string;
  highlight: string;
  description: string;
  imageUrl: string;
  iconName: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'kss-main',
    tagline: 'TRUSTED BY ENTERPRISES',
    title: 'SECURED BY',
    highlight: 'INNOVATION',
    description: 'Kanha Security System develops advanced electronic safety and automation solutions designed to protect the infrastructure of tomorrow. Empowering organizations to stay ahead of evolving threats.',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920',
    iconName: 'Shield'
  },
  {
    id: 'mpass',
    tagline: 'MULTI-FACTOR AUTHENTICATION',
    title: 'MPASS',
    highlight: 'IDENTITY',
    description: 'Protect your enterprise with robust identity verification. Multi-factor solutions designed for high-security environments, ensuring only authorized access to your most critical assets.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1920',
    iconName: 'Lock'
  },
  {
    id: 'linq2',
    tagline: 'MESSAGING INFRASTRUCTURE',
    title: 'LINQ2',
    highlight: 'CONNECT',
    description: 'Enterprise-grade messaging delivery with over 10B+ monthly capacity. Scalable, secure, and lightning-fast communication infrastructure for modern global businesses.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920',
    iconName: 'Network'
  },
  {
    id: 'infoshield',
    tagline: 'SECURITY AWARENESS',
    title: 'INFOSHIELD',
    highlight: 'EMPOWER',
    description: 'Educate your workforce with high-completion training modules. Transform your employees into your strongest defense against social engineering and cyber threats.',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1920',
    iconName: 'Building'
  },
  {
    id: 'cybersphere',
    tagline: 'SITUATIONAL AWARENESS',
    title: 'CYBER',
    highlight: 'SPHERE',
    description: 'A unified command and control hub for total building automation and security management. Real-time visibility and proactive threat detection in a single intuitive interface.',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=1920',
    iconName: 'Zap'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'bms',
    title: 'Building Management System (BMS)',
    description: 'A computer-based control system installed in buildings that controls and monitors mechanical and electrical equipment.',
    features: ['HVAC Monitoring and Control', 'Power and Energy Management', 'Lighting Control', 'Third-party Integration'],
    icon: 'Building',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'isms',
    title: 'Integrated Security Management System',
    description: 'Command and Control center at the heart of comprehensive security solutions combining multiple technologies.',
    features: ['Command & Control Center', 'Situational Awareness', 'Event-based information', 'Cross-system Intelligence'],
    icon: 'Shield',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'access-control',
    title: 'Access Control System',
    description: 'Determines who is allowed to enter or exit, where they are allowed, and when.',
    features: ['Proximity Cards', 'Smart Cards', 'Biometric (Finger, Vein, Iris)', 'Smart Locks'],
    icon: 'Lock',
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cctv',
    title: 'Closed Circuit TV (CCTV)',
    description: 'Fulfills basic criteria of monitoring and surveillance with IP and Analogue solutions.',
    features: ['IP based CCTV', 'Analogue CCTV', 'Intelligent Video Analytics', 'Night Vision'],
    icon: 'Camera',
    imageUrl: 'https://images.unsplash.com/photo-1557597774-9d2739f85a94?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fire-protection',
    title: 'Fire Protection System',
    description: 'Detection and alarm systems including Hydrant Wet Riser and Water Sprinkler Systems.',
    features: ['Analogue Addressable/Conventional', 'Automatic Fire Extinguishing (FM200, NOVAC)', 'Hydrant Wet Riser'],
    icon: 'Flame',
    imageUrl: 'https://images.unsplash.com/photo-1599700403969-f77b3df74e8e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'perimeter',
    title: 'Perimeter Protection System',
    description: 'Reliable protection options for security sensitive applications and harsh environments.',
    features: ['Concertina Barbed Wire', 'Fiber Optic Cable System', 'Buried Cable System', 'PIR Based Sensors'],
    icon: 'Fence',
    imageUrl: 'https://images.unsplash.com/photo-1517420879524-86d64ac2f339?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'audio-video',
    title: 'Audio Video & Lighting Control',
    description: 'Intuitive user interfaces and source controllers for hospitality, commercial and educational projects.',
    features: ['Professional Audio', 'Projectors', 'Dimming and Control', 'Video Conferencing'],
    icon: 'Video',
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'voice-data',
    title: 'Voice and Data Networking',
    description: 'Network infrastructure planning, engineering and installation for modern high-speed requirements.',
    features: ['IP/Analogue Telephone', 'LAN Networking', 'Fiber Optics', 'Structured Cabling'],
    icon: 'Network',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'public-address',
    title: 'Public Address & Voice Evacuation',
    description: 'Crucial role in evacuation during emergencies in large buildings like malls and hospitals.',
    features: ['IP/Analogue PA System', 'Voice Evacuation', 'Large Gatherings Support', 'Background Music'],
    icon: 'Megaphone',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'contraband',
    title: 'Contraband Detection',
    description: 'Innovative high technology products for household and commercial purpose safety.',
    features: ['Baggage Scanner', 'DFMD & HHMD', 'Vapour Tracer', 'Drug Recognition'],
    icon: 'Search',
    imageUrl: 'https://images.unsplash.com/photo-1566411520896-01e7ca4726af?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gate-automation',
    title: 'Gate Automation',
    description: 'Automation systems for industrial, commercial and residential complexes.',
    features: ['Bollards', 'Boom Barrier', 'UVSS with LPR', 'ANPR Systems'],
    icon: 'Car',
    imageUrl: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'datacenter',
    title: 'Datacenter / VESDA',
    description: 'Specialized smoke detection and environment control for critical IT infrastructure.',
    features: ['VESDA (Very Early Smoke Detecting)', 'Rodent Repellent System', 'Water leak detection', 'Raised flooring'],
    icon: 'Database',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'emergency-lighting',
    title: 'Emergency Lighting',
    description: 'Lights with built-in battery that switch on automatically during power outages.',
    features: ['Automatic Switchover', 'Battery Backup', 'High Occupancy Safety', 'Mall/Hospital Compliance'],
    icon: 'Lightbulb',
    imageUrl: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fire-suppression',
    title: 'Fire Suppression System',
    description: 'Efficient and cost-effective passive and automatic fire protection systems.',
    features: ['Automatic Detection', 'Clean Agent Gaseous System', 'Early Stage Control', 'Life Safety Focused'],
    icon: 'Zap',
    imageUrl: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fire-hydrant',
    title: 'Fire Hydrant Systems',
    description: 'Critical life safety systems executed as per NBC/NFPA guidelines.',
    features: ['Wet Riser Systems', 'Landing Valves', 'External Hydrants', 'Standard Compliance'],
    icon: 'Droplets',
    imageUrl: 'https://images.unsplash.com/photo-1583424168067-15478f2445b2?auto=format&fit=crop&q=80&w=800'
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
  'Honeywell', 'Samsung', 'Bosch', 'Hikvision', 'Cisco', 'Schneider', 'Dell', 'HP', '3M', 'Axis', 'Pelco', 'HID', 'Dahua', 'CP Plus', 'Panasonic', 'Sony', 'LG', 'ZKTeco', 'Veritas', 'Commscope', 'Siemens', 'Nokia', 'Aruba', 'Fortinet'
];

export const CUSTOMER_LOGOS: string[] = [
  'Ramada', 'AT&T', 'Daikin', 'Amazon', 'Tata AIG', 'Experion', 'Daikin', 'Ester'
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Alex Thompson",
    role: "IT Director at Tata AIG",
    content: "KSS has transformed our building management. Their integrated approach to security and automation is truly world-class.",
    avatar: "https://picsum.photos/seed/alex/100/100"
  },
  {
    name: "Sarah Jenkins",
    role: "Security Head at Daikin",
    content: "The VESDA system installation was flawless. Their team's technical competence and commitment to deadlines are commendable.",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    name: "Michael Chen",
    role: "Facility Manager at Experion",
    content: "Working with KSS has been a game-changer for our surveillance infrastructure. Their IP solutions are top-notch.",
    avatar: "https://picsum.photos/seed/chen/100/100"
  },
  {
    name: "Priya Sharma",
    role: "Operations Chief at Ramada",
    content: "Their gate automation and access control systems have streamlined our visitor management significantly.",
    avatar: "https://picsum.photos/seed/priya/100/100"
  },
  {
    name: "Robert Ford",
    role: "Technical Lead at Amazon",
    content: "Reliability is key for us, and KSS delivers exactly that. Their fire suppression systems are extremely dependable.",
    avatar: "https://picsum.photos/seed/robert/100/100"
  },
  {
    name: "Linda Wu",
    role: "Director at Daikin India",
    content: "Exceptional service and support. The team at Kanha Security understands complex networking requirements perfectly.",
    avatar: "https://picsum.photos/seed/linda/100/100"
  },
  {
    name: "Vikram Mehta",
    role: "Security Consultant",
    content: "I recommend KSS for all major enterprise projects. Their command and control center designs are future-proof.",
    avatar: "https://picsum.photos/seed/vikram/100/100"
  },
  {
    name: "James Wilson",
    role: "Infrastructure Lead",
    content: "The level of detail in their perimeter protection designs is what sets them apart from other vendors.",
    avatar: "https://picsum.photos/seed/james/100/100"
  }
];
