export type Project = {
  title: string;
  number: string;
  category: string;
  description: string;
  stack: string[];
  href?: string;
  live?: string;
  accent: string;
};

export const projects: Project[] = [
  {
    title: 'KrishiAI',
    number: '01',
    category: 'AI / Full Stack',
    description: 'An intelligent agriculture platform that turns crop and soil inputs into practical recommendations through a modern web interface.',
    stack: ['React', 'FastAPI', 'Python', 'ML', 'Tailwind'],
    href: 'https://github.com/ganesh-gowda/KrishiAI',
    live: '',
    accent: 'cyan',
  },
  {
    title: 'Crypto X',
    number: '02',
    category: 'Data / Full Stack',
    description: 'A cryptocurrency command center for exploring market data, trends, and assets through a fast, responsive dashboard experience.',
    stack: ['React', 'Node.js', 'MongoDB', 'REST', 'API'],
    href: 'https://github.com/ganesh-gowda/Crypto-X',
    live: '',
    accent: 'cyan',
  },
  {
    title: 'MediConnect',
    number: '03',
    category: 'Healthcare / Full Stack',
    description: 'A full-stack telemedicine platform with JWT authentication, role-based access, 20+ REST APIs, Razorpay payments, Agora video consultations, digital prescriptions, a 57-disease AI symptom checker, and automated appointment reminders.',
    stack: ['React JS', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'Agora SDK', 'Cloudinary', 'Nodemailer', 'Python'],
    href: '',
    live: '',
    accent: 'cyan',
  },
];

export const skills = [
  { name: 'JavaScript', group: 'Frontend' },
  { name: 'React', group: 'Frontend' },
  { name: 'Tailwind CSS', group: 'Frontend' },
  { name: 'Python', group: 'AI / ML' },
  { name: 'GitHub', group: 'Tools' },
  { name: 'Figma', group: 'Design' },
  { name: 'TypeScript', group: 'Frontend' },
  { name: 'Vite', group: 'Frontend' },
];
