import GitHubIcon from '@mui/icons-material/GitHub';

export default {
  Hero: {
    text: `I’m a software engineer who recently completed a degree in Applied Computer Science from the University of Colorado, Boulder. 
    I have a passion for all things technolgoy and enjoy building custom applications for the web. `,
  },

  projects: [
    {
      tag: 'Machine Learning',
      image: '/project/netflix.jpeg',
      title: 'Netflix Recommendation System',
      description:
        'Unsupervised Learning Model for recommending Netflix movies.',
      tech: ['Python', 'Numpy', 'Sklearn', 'Pandas'],
      link: 'https://github.com/tyler-cranmer/Machine_Learning/blob/main/Project_2/netflix_recommendation.ipynb',
    },
    {
      tag: 'Machine Learning',
      image:
        'https://twt-thumbs.washtimes.com/media/image/2020/03/24/chargers_logo_football_26584_c0-47-2918-1748_s885x516.jpg?59d2cd3ec462f608e6dce720d95845aa74747b52',
      title: 'House Price Prediction',
      description:
        'Advance linear regression model for predicting home prices.',

      tech: ['Python', 'Numpy', 'Sklearn', 'Pandas'],
      link: 'https://github.com/tyler-cranmer/Data_Science/blob/main/Final_Project/DataSci_Final_Project.ipynb',
    },
    {
      title: 'CNN Image Classification',
      description:
        'Convolution neural network for classifying NFT pictures into their respected collection.',
      link: '/project/Machine=Learning.png',
      image: 'http://127.0.0.1:8000/media/image/Machine-Learning.png',
      tag: "Machine Learning",
      tech: ['Python', "Pillow", "TensorFlow", "Keras"]
    },

    {
      title: 'Index Coop Subgraph',
      description:
        "Index Coop's version 1 querying protocol for obtaining product data.",
      link: 'https://github.com/tyler-cranmer/index-coop-subgraph',
      image: '/project/Graph-Protocol.png',
      tech: ['Typescript', 'GraphQL', 'Graph Protocol'],
      tag: 'Blockchain',
    },
    {
      title: 'Predicting Credit Card Default',
      description:
        'Utilized four different machine learning models to predict client credit card defaults.',
      link: 'https://github.com/tyler-cranmer/Machine_Learning/blob/main/Project_1/credit_card_default.ipynb',
      image: '/project/cc_default.jpeg',
      tech: ['Python', 'Numpy', 'Sklearn', 'Pandas'],
      tag: 'Machine Learning',
    },
    {
      title: 'NFT Image Generator',
      description:
        'Jupyter Notebook for programmatically generating NFT pictures.',
      link: 'https://github.com/tyler-cranmer/nft_generator',
      image: '/project/nft.jpeg',
      tag: 'Blockchain',
      tech: ['Python', 'Pillow'],
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
      id: 1,
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
      id: 2
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
      logo: '/ICS.png',
      alt: 'ICS logo',
      id: 3
    },
  ],

  icons: [
    {
      name: 'Typescript',
      url: '/tech/typescript.svg',

    },
    {
      name: 'Javascript',
      url: '/tech/javascript.svg',

    },
    {
      name: 'Python',
      url: '/tech/python.svg',

    },
    {
      name: 'Nextjs',
      url: '/tech/next-js.svg',

    },
    {
      name: 'React',
      url: '/tech/react.svg',

    },
    {
      name: 'Mui',
      url: '/tech/mui.svg',

    },
    {
      name: 'Django',
      url: '/tech/django.svg',

    },
    {
      name: 'Pandas',
      url: '/tech/pandas.svg',

    },
    {
      name: 'Numpy',
      url: '/tech/numpy.svg',

    },
    {
      name: 'TensorFlow',
      url: '/tech/tensorflow.svg',

    },
    { name: 'Postgress', url: '/tech/postgres.svg'},
    {
      name: 'Graphql',
      url: '/tech/graphql.svg',

    },
    { name: 'Solidity', url: '/tech/solidity.svg' },
    {
      name: 'Ethers',
      url: '/tech/ethersjs.svg',

    },
    {
      name: 'Hardhat',
      url: '/tech/hardhat.svg',

    },
    {
      name: 'Git',
      url: '/tech/git.svg',
    },
  ],
};
