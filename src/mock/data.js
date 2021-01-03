import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'haffner.io - Florent Haffner', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome on the website of Florent HAFFNER', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Florent HAFFNER',
  subtitle:
    "I'm a Data-science apprentice 🐣🤖 I'm interested in Data engineering, system design and making useful data product.",
  cta: 'See projects sandbox',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/nelth_fr/',
    },
    /* {
      id: uuidv1(),
      name: 'codepen',
      url: '',
    }, */
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/florent-haffner-31ab5911b/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/florent-haffner/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
