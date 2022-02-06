import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.scss';
import MenuToggle from '../../MenuToggle/MenuToggle';
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { sideVariants, itemVariants } from "../Content/Motions";

function Header() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(show => !show);
  };
  return (
    <div className={s.header}>
      <div className="container">
        <div className={s.wrapper}>
          <Link to="/" className={s.logo}>Jewel Michael</Link>
          <div className={s.navContainer}>

            <MenuToggle onClick={handleClick} show={show} />
            <AnimatePresence>
              {show &&
                <motion.div
                  className="navWrapper"
                >
                  <motion.nav
                    className={s.navBlock}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={sideVariants}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      variants={itemVariants}
                      className={s.navItem}
                    >
                      <Link to="/">Home</Link>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      variants={itemVariants}
                      className={s.navItem}
                    >
                      <Link to="/about">about</Link>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      variants={itemVariants}
                      className={s.navItem}
                    >
                      <Link to="/works">work</Link>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      variants={itemVariants}
                      className={s.navItem}
                    >
                      <Link to="/contact">contact</Link>
                    </motion.div>
                  </motion.nav>
                </motion.div>
              }
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
