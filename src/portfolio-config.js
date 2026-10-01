// Easy Configuration File - Customize Your Portfolio Here

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: 'Vishwa Subash',
    title: 'Full-Stack Developer & CS Engineering Student',
    tagline: 'Building ideas into practical software',
    taglineHighlight: 'practical software',
    bio: 'I am a final-year CSE student passionate about full-stack development and artificial intelligence. Currently seeking internship opportunities to apply my technical skills to real-world challenges.',
    status: 'Open to Opportunities',
  },

  // Resume
  resume: {
    downloadLink: 'https://example.com/resume.pdf',
    buttonText: 'Download Resume',
  },

  // Navigation Links
  navigation: [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ],

  // About Section
  about: {
    title: 'About Me',
    description1: 'I\'m a Computer Science Engineering student with a passion for building scalable web applications and exploring AI/ML technologies. With experience in full-stack development, I\'ve worked on various projects spanning frontend, backend, and database technologies.',
    description2: 'My journey in tech has taught me the importance of clean code, collaborative development, and continuous learning. I\'m excited to contribute to innovative projects and grow alongside talented teams.',
    education: {
      degree: 'B.Tech in Computer Science Engineering',
      status: 'Final Year Student',
    },
    focusAreas: ['Full-Stack Development', 'AI/ML', 'Web Technologies'],
  },

  // Skills
  skills: [
    {
      category: 'Frontend',
      icon: '💻',
      color: 'blue',
      items: [
        'React.js & Next.js',
        'Tailwind CSS & Material UI',
        'JavaScript & TypeScript',
        'HTML5 & CSS3',
      ],
    },
    {
      category: 'Programming Languages',
      icon: '🐍',
      color: 'green',
      items: [
        'Python & JavaScript',
        'C++ & Java',
        'SQL',
        'Bash',
      ],
    },
    {
      category: 'Database',
      icon: '💾',
      color: 'blue',
      items: [
        'MongoDB & Firebase',
        'PostgreSQL & MySQL',
        'Redis',
        'GraphQL',
      ],
    },
    {
      category: 'Tools',
      icon: '🛠️',
      color: 'green',
      items: [
        'Git & GitHub',
        'Docker & Linux',
        'VS Code',
        'AWS & Google Cloud',
      ],
    },
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: 'Student Management System',
      description: 'A comprehensive platform for managing student records, attendance, and academic performance. Built with React and Node.js.',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      id: 2,
      title: 'Bingo Restaurant App',
      description: 'A full-stack restaurant management application with reservation system and menu management features.',
      tags: ['React', 'Express', 'Firebase'],
      link: '#',
    },
    {
      id: 3,
      title: 'Resource Analyzer',
      description: 'Advanced analytics tool for resource management with real-time monitoring and reporting capabilities.',
      tags: ['Python', 'React', 'PostgreSQL'],
      link: '#',
    },
    {
      id: 4,
      title: 'Expense Tracker App',
      description: 'Personal finance management application with expense categorization and visual analytics.',
      tags: ['React', 'Firebase', 'Charts.js'],
      link: '#',
    },
    {
      id: 5,
      title: 'Bino Bose',
      description: 'E-commerce platform with product catalog, shopping cart, and payment integration.',
      tags: ['Next.js', 'Stripe', 'MongoDB'],
      link: '#',
    },
    {
      id: 6,
      title: 'Smart Attendance Dispatch',
      description: 'Automated attendance tracking system with real-time notifications and reporting.',
      tags: ['React', 'Python', 'WebSocket'],
      link: '#',
    },
  ],

  // Experience
  experience: [
    {
      id: 1,
      title: 'Frontend Development Intern',
      company: 'Tech Startup',
      period: 'June 2024 - Present',
      description: 'Developed responsive web interfaces using React and Tailwind CSS. Collaborated with design team to implement pixel-perfect designs. Improved application performance by optimizing rendering and reducing bundle size.',
    },
    {
      id: 2,
      title: 'Cyber Security Intern',
      company: 'Security Solutions Inc',
      period: 'January 2024 - April 2024',
      description: 'Conducted security audits and vulnerability assessments. Implemented security best practices and created documentation. Participated in incident response and threat analysis activities.',
    },
    {
      id: 3,
      title: 'Blockchain Hackathon Participant',
      company: 'Innovation Summit 2023',
      period: 'November 2023',
      description: 'Developed a blockchain-based solution for supply chain transparency. Implemented smart contracts and web3 integration. Won Best Innovation Award.',
    },
  ],

  // Contact
  contact: {
    title: 'Ready to launch my career',
    description: 'I\'m actively seeking opportunities to grow as a developer and contribute to impactful projects. Let\'s connect and discuss how I can add value to your team.',
    email: 'vishwa@example.com',
    phone: '+91 XXXXXXXXXX',
    items: [
      { icon: '✉️', label: 'Email', value: 'vishwa@example.com', link: 'mailto:vishwa@example.com' },
      { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/vishwa', link: 'https://linkedin.com/in/vishwa' },
      { icon: '🐙', label: 'GitHub', value: 'github.com/vishwa', link: 'https://github.com/vishwa' },
      { icon: '📱', label: 'Phone', value: '+91 XXXXXXXXXX', link: 'tel:+91' },
    ],
  },

  // Footer
  footer: {
    copyright: '© 2024 Vishwa Subash. Built for performance.',
    socialLinks: [
      { label: 'LinkedIn', url: 'https://linkedin.com/in/vishwa' },
      { label: 'GitHub', url: 'https://github.com/vishwa' },
      { label: 'Email', url: 'mailto:vishwa@example.com' },
    ],
  },

  // Colors (Tailwind CSS classes)
  colors: {
    primary: 'blue', // blue-500, blue-600
    secondary: 'green', // green-400, green-600
    background: 'slate-950',
    surface: 'slate-900',
    text: 'gray-100',
  },
};

export default portfolioConfig;
