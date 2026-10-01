/**
 * Centralized portfolio data.
 * Update every personal detail, skill, project and link here —
 * all components read from this single file.
 */
export const portfolioData = {
  name: 'Arpita Acharya',
  greeting: "Hi, I'm Arpita.",
  tagline: 'I build things for the web.',
  intro:
    "I'm a Computer Science student who enjoys building interactive digital experiences and exploring technology through creative projects.",

  email: 'arpitariya2006@gmail.com',
  phone: '7601838140',

  social: {
    github: 'https://github.com/arpita2901',
    linkedin: 'https://www.linkedin.com/in/arpita-acharya-653974402',
    instagram: 'https://www.instagram.com/lilybloom_05',
  },

  skills: {
    web: ['HTML', 'CSS', 'JavaScript', 'React'],
    programming: ['Python', 'C', 'Java'],
    tools: ['Git', 'GitHub'],
  },

  projects: [
    {
      title: 'Portfolio Website',
      description:
        'A personal portfolio focused on modern UI, responsive design and interactive web experiences.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      link: 'https://arpita2901.github.io/My-portfolio/',
      code: 'https://github.com/arpita2901/My-portfolio.git',
    },
    {
      title: 'Currency Converter',
      description:
        'A clean web application for converting values between different currencies.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://arpita2901.github.io/Currency-Exchange/',
      code: 'https://github.com/arpita2901/Currency-Exchange.git',
    },
    {
      title: 'Web Game',
      description:
        'An interactive browser game built to explore JavaScript logic, user interaction and frontend development.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://arpita2901.github.io/stone-paper-scissors/',
      code: 'https://github.com/arpita2901/stone-paper-scissors.git',
    },
  ],
}
