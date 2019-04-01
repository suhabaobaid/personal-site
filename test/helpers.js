const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Suha Baobaid',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Suha Baobaid',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Suha Baobaid',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Suha Baobaid',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Suha Baobaid',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
