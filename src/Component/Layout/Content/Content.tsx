import React from 'react';
import { motion } from 'framer-motion';
import { pageMotion } from "./Motions";

function Content(props: any) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageMotion}
      className="content"
    >
      {props.children}
    </motion.div>
  );
}

export default Content;
