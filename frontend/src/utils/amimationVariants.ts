import { Variants } from 'framer-motion';

// about Section
export const aboutVariant: Variants = {
  offscreen: {
    scale: 1,
    opacity: 0,
    y: 80,
  },
  offscreenPic: {
    scale: 0,
    opacity: 0,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.9,
    },
  },
  onscreenP1: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
    },
  },
  onscreenP2: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.1,
    },
  },
  onscreenP3: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.2,
    },
  },
  onscreenPic: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.9,
    },
  },
};

// accordian Section
export const accordianVariant: Variants = {
  offscreen: {
    scale: 1,
    opacity: 0,
    x: -80,
  },
  onscreen: (i: number) => ({
    scale: 1,
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.6,
    },
  }),
};

// contact Section
export const contactVariant: Variants = {
  offscreen: {
    scale: 1,
    opacity: 0,
    x: -80,
  },

  offscreen2: {
    scale: 1,
    opacity: 0,
    x: 80,
  },

  offscreenForm: {
    scale: 0,
    opacity: 0,
  },

  onscreen: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
    },
  },

  onscreen2: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
    },
  },

  onscreen3: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.7,
    },
  },

  onscreenForm: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.8,
    },
  },
};

// experience Section
export const experienceVariant: Variants = {
  offscreen: {
    scale: 1,
    opacity: 0,
    y: 80,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
    },
  },
};

// Expertise Section
export const titleVariant: Variants = {
  offscreen: {
    scale: 1,
    opacity: 0,
    y: -80,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
    },
  },
};
export const cardVariant: Variants = {
  offscreen: {
    scale: 1,
    opacity: 0,
    y: 80,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.4,
    },
  },
};
export const cardVariant2: Variants = {
  offscreen: {
    scale: 1,
    opacity: 0,
    y: 80,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.2,
    },
  },
};

