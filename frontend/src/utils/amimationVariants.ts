import { Variants } from 'framer-motion';

// About Section
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
      duration: 0.5,
    },
  },
  onscreenP1: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 0.5,
    },
  },
  onscreenP2: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.1,
      duration: 0.5,
    },
  },
  onscreenP3: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.2,
      duration: 0.5,
    },
  },
  onscreenP4: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.3,
      duration: 0.5,
    },
  },
  onscreenPic: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.9,
      duration: 0.5,
    },
  },
};

// Skills Section
export const titleVariant: Variants = {
  offscreen: {
    scale: 1,
    opacity: 0,
    y: 80,
  },

  offscreenSubtitle: {
    scale: 1,
    opacity: 0,
    y: -80,
  },

  onscreen: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 0.5,
    },
  },

  onscreenTech: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: .5,
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
      delay: 1.2,
      duration: 0.5,
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
      delay: 1,
      duration: 0.5,
    },
  },
};

// Projects Section
export const workVariant: Variants = {
  offscreen: {
    scale: 1,
    opacity: 0,
    y: 80,
  },
  offscreen2: {
    scale: 1,
    opacity: 0,
    x: -80,
  },
  offscreenCards: {
    scale: 1,
    opacity: 0,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
      duration: 0.5,
    },
  },
  onscreen2: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.7,
      duration: 0.5,
    },
  },
  onscreen3: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.7,
      duration: 0.5,
    },
  },

  onscreenCards: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
};

// Experience Section
export const experienceVariant: Variants = {
  offscreen: {
    scale: 1,
    opacity: 0,
    y: 80,
  },

  offscreenSubtitle: {
    scale: 1,
    opacity: 0,
    y: -80,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
  onscreenSubtitle: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
};


// Accordian Section
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

// Contact Section
export const contactVariant: Variants = {
  offscreenTitle: {
    scale: 1,
    opacity: 0,
    y: -80,
  },

  offscreenSubtitle: {
    scale: 1,
    opacity: 0,
    y: 80,
  },

  offscreenPersonal: {
    scale: 0,
    opacity: 0,
  },

  offscreenForm: {
    scale: 0,
    opacity: 0,
  },

  onscreenTitle: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },

  onscreenSubtitle: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },

  onscreenPersonal: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.7,
      duration: 0.5,
    },
  },

  onscreenForm: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 0.5,
    },
  },
};

