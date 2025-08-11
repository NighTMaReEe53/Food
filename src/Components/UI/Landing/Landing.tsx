import Nav from "../Navbar/Nav";
import "./landing.css";
import { motion } from "motion/react";
const Landing = () => {
  return (
    <div className="landing" id="home">
      <img src="shapes/1.jpg" className="shape-1" alt="" />
      <Nav />
      <div className="container">
        <div className="landing-content">
          <div className="text">
            <motion.span
              initial={{ top: -10, opacity: 0 }}
              whileInView={{ top: 0, opacity: 1 }}
              animate={{ top: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              مـــطـــعـــم الـــشـــرقـــي
            </motion.span>
            <motion.h2
              initial={{ top: -100, opacity: 0 }}
              animate={{ top: 0, opacity: 1 }}
              whileInView={{ top: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              المطعم الشعبي
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                src="shapes/2.png"
                alt="chef"
              />
              <br />
              الأول في فلسطين
            </motion.h2>
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى.
            </motion.p>
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="main-btn"
            >
              انظر القائمة
            </motion.button>
          </div>
          <div className="left">
            <div className="box">
              <motion.div
                className="image"
                initial={{ top: -100, opacity: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                animate={{ top: 0, opacity: 1 }}
                whileInView={{ top: 0, opacity: 1 }}
              >
                <img src="image/landing-1.png" alt="chef" />
              </motion.div>
              <div className="review">
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  src="image/1.png"
                  alt=""
                />
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  src="image/2.png"
                  alt=""
                />
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  src="image/3.png"
                  alt=""
                />
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  src="image/1.png"
                  alt=""
                />
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  src="image/2.png"
                  alt=""
                />
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileInView={{ opacity: 1 }}
                  src="image/3.png"
                  alt=""
                />
              </div>
            </div>
            <div className="box box-2">
              <motion.div
                className="image"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <img src="image/landing-2.png" alt="" />
              </motion.div>
              <div className="sub-image">
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileInView={{ opacity: 1 }}
                  src="shapes/3.png"
                  className="shape-2"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
