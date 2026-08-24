export type Project = {
  title: string;
  number: string;
  category: string;
  description: string;
  stack: string[];
  href: string;
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
    accent: 'lime',
  },
  {
    title: 'Crypto X',
    number: '02',
    category: 'Data / Full Stack',
    description: 'A cryptocurrency command center for exploring market data, trends, and assets through a fast, responsive dashboard experience.',
    stack: ['React', 'Node.js', 'MongoDB', 'REST', 'API'],
    href: 'https://github.com/ganesh-gowda/Crypto-X',
    accent: 'cyan',
  },
  {
    title: 'Medicine Recommendation',
    number: '03',
    category: 'Machine Learning',
    description: 'A recommendation application that connects symptom input to an ML-backed prediction workflow and user-friendly results.',
    stack: ['Python', 'ML', 'Flask', 'HTML', 'CSS'],
    href: 'https://github.com/ganesh-gowda/Medicine-Prediction',
    accent: 'pink',
  },
  {
    title: 'Summeriz',
    number: '04',
    category: 'AI Product',
    description: 'A focused summarization experience designed to turn dense source material into useful, readable outputs.',
    stack: ['React', 'AI', 'JavaScript', 'API'],
    href: 'https://github.com/ganesh-gowda/Summeriz',
    accent: 'violet',
  },
];

export const skills = [
  { name: 'Java', group: 'Core' },
  { name: 'Data Structures', group: 'Core' },
  { name: 'Algorithms', group: 'Core' },
  { name: 'React', group: 'Frontend' },
  { name: 'JavaScript', group: 'Frontend' },
  { name: 'Tailwind CSS', group: 'Frontend' },
  { name: 'Node.js', group: 'Backend' },
  { name: 'Express', group: 'Backend' },
  { name: 'REST APIs', group: 'Backend' },
  { name: 'MongoDB', group: 'Data' },
  { name: 'SQL', group: 'Data' },
  { name: 'Python', group: 'AI / ML' },
  { name: 'Machine Learning', group: 'AI / ML' },
  { name: 'Git', group: 'Tools' },
];
