import GitHubIcon from '@mui/icons-material/GitHub';

export default {
  Hero: {
    text: `I'm a software engineer graduate specializing in building web
                and machine learning applications. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Repellendus, nobis eos? Aliquam
                accusamus voluptatem, iure ratione neque, saepe magnam fuga,
                soluta sit illum dignissimos magni iusto rem ab laudantium.
                Ratione.`,
  },

  projects2: [
    {
      tag: 'Web Development',
      image:
        'https://twt-thumbs.washtimes.com/media/image/2020/03/24/chargers_logo_football_26584_c0-47-2918-1748_s885x516.jpg?59d2cd3ec462f608e6dce720d95845aa74747b52',
      title: 'Project 1',
      description: 'This is my project description, please fill  in',
      tech: ['python', 'typescript', 'next.js'],
      //   links: [{ link: 'https://www.google.com', icon: <GitHubIcon/> }],
    },
    {
      tag: 'Blockchain',
      image:
        'https://twt-thumbs.washtimes.com/media/image/2020/03/24/chargers_logo_football_26584_c0-47-2918-1748_s885x516.jpg?59d2cd3ec462f608e6dce720d95845aa74747b52',
      title: 'Project 2',
      description: 'This is my project description, please fill  in',
      tech: ['python', 'typescript', 'next.js'],
      //   links: [{ link: 'https://www.google.com', icon: <GitHubIcon/> }],
    },
    {
      tag: 'Machine Learning',
      image:
        'https://twt-thumbs.washtimes.com/media/image/2020/03/24/chargers_logo_football_26584_c0-47-2918-1748_s885x516.jpg?59d2cd3ec462f608e6dce720d95845aa74747b52',
      title: 'Project 3',
      description: 'This is my project description, please fill  in',
      tech: ['python', 'typescript', 'next.js'],
      //   links: [{ link: 'https://www.google.com', icon: <GitHubIcon/> }],
    },
    {
      tag: 'Machine Learning',
      image:
        'https://twt-thumbs.washtimes.com/media/image/2020/03/24/chargers_logo_football_26584_c0-47-2918-1748_s885x516.jpg?59d2cd3ec462f608e6dce720d95845aa74747b52',
      title: 'Project 4',
      description: 'This is my project description, please fill  in',
      tech: ['python', 'typescript', 'next.js'],
      //   links: [{ link: 'https://www.google.com', icon: <GitHubIcon/> }],
    },
  ],

  experience: [
    {
      title: 'Software Engineer',
      company: 'Index Cooop',
      duration: 'May 2021 - June 2022',
      location: 'Remote',
      website: 'indexcoop.com',
      slug: 'https://indexcoop.com/',
      bullets: [
        'Automated the collection, recording and calculations of community monthly contributions for the Finance group.',
        'Created technical documentation on Solidity, Ethers.js and Hardhat.',
        'Contributed to the creation of the engineering on-boarding process and training for new Solidity developers.',
        'Built Index Coop Subgraph using graphQL and the graph protocol.',
      ],
      logo: '/index-token.png',
      alt: 'index logo',
      panel: 'panel1',
    },
    {
      title: 'Applied Computer Science',
      company: 'Univserity of Colorado, Boulder',
      duration: 'Sept 2018 - August 2022',
      location: 'Boulder, Colorado',
      website: 'colorado.edu',
      slug: 'https://www.colorado.edu/',
      bullets: [
        'Graduated with a Bachelors Degree in Applied Computer Science.',
        'Developed core Computer Science principals. i.e Data Structures, Algorithms and Computer Systems.',
        'Specialized in Data Science, Analytics, Visualization and Machine Learning.',
      ],
      logo: '/cu.png',
      alt: 'ralphie buffalo logo',
      panel: 'panel2',
    },
    {
      title: 'Sr. IT Account Manager',
      company: 'Infinity Consulting Solution',
      duration: 'Sept 2015 - Sept 2020',
      location: 'Denver, Colorado',
      website: 'infinity-cs.com',
      slug: 'https://www.infinity-cs.com/',
      bullets: [
        'Gathered technical requirements from business stakeholders to provide end-to-end recruitment and hiring solutions for start-up, mid-size and fortune 100 technology clients.',
        'Managed the full life-cycle technical recruiting processes for various engineering teams.',
        'Recruited a varitey of candidates including: Web Developers, DevOps Engineers and Cloud Infrastructure Engineers.',
      ],
      logo: '/ics.png',
      alt: 'ICS logo',
      panel: 'panel3',
    },
  ],

  icons: [
    {
      name: 'typescript',
      url: '/tech/typescript.svg',
      level: '60%',
    },
    {
      name: 'javascript',
      url: '/tech/javascript.svg',
      level: '60%',
    },
    {
      name: 'python',
      url: '/tech/python.svg',
      level: '80%',
    },
    {
      name: 'nextjs',
      url: '/tech/next-js.svg',
      level: '60%',
    },
    {
      name: 'react',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/128px-React-icon.svg.png',
      level: '60%',
    },
    {
      name: 'mui',
      url: '/tech/mui.svg',
      level: '60%',
    },
    {
      name: 'django',
      url: '/tech/django.svg',
      level: '50%',
    },
    {
      name: 'pandas',
      url: '/tech/pandas.svg',
      level: '75%',
    },
    {
      name: 'numpy',
      url: '/tech/numpy.svg',
      level: '75%',
    },
    { name: 'postgress', url: '/tech/postgres.svg', level: '50%' },
    {
      name: 'graphql',
      url: '/tech/graphql.svg',
      level: '50%',
    },
    { name: 'solidity', url: '/tech/solidity.svg', level: '80%' },
    {
      name: 'ethers',
      url: '/tech/ethersjs.svg',
      level: '80%',
    },
    {
      name: 'hardhat',
      url: '/tech/hardhat.svg',
      level: '80%',
    },
  ],
};
