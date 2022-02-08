export const pageMotion = {
  initial: { opacity: 0, y: 5 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, y: 5, transition: { duration: 0.2 } }
};
export const sideVariants = {
  closed: {
    height: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.2,
      when: "afterChildren",
      staggerDirection: -1
    }
  },
  open: {
    height: '100vh',
    transition: {
      duration: 0.3,
      staggerChildren: 0.2,
      when: "beforeChildren",
      staggerDirection: 1
    }
  }
};
export const itemVariants = {
  closed: {
    opacity: 0
  },
  open: {
    opacity: 1
  }
};