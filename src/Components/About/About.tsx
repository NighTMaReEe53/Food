import Title from "../Title/Title";
import "./about.css";

import { motion } from "motion/react";

const About = () => {
  return (
    <div className="about" id="about">
      <img src="shapes/5.png" className="shape-5" alt="" />
      <img src="shapes/6.png" className="shape-6" alt="" />
      <Title
        spanText="مـــــاذا عــــنا"
        title="تعرف علينا أكثر"
        text="من خلال هذا القسم سوف تعرف معلومات عنا"
      />
      <div className="container">
        <div className="content">
          <div className="image"></div>
          <div className="text">
            <motion.span
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              معلومات عن مطعم
              <img src="shapes/4.png" alt="" />
            </motion.span>
            <motion.h2
              initial={{ top: -100, opacity: 0 }}
              whileInView={{ top: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              المطعم الشعبي الأول
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, bottom: -100 }}
              whileInView={{ opacity: 1, bottom: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              مطعم "الشرقي" هو وجهتك المثالية لعشّاق المذاق العربي الأصيل. يتميز
              بتقديم تشكيلة واسعة من الأطباق الشرقية التقليدية، المحضّرة بعناية
              باستخدام مكونات طازجة وتوابل أصلية تعبّر عن روح المطبخ العربي.
              أجواء المطعم دافئة وديكوره مستوحى من الطراز الشرقي الأنيق، مما
              يجعله مكانًا مثاليًا للعائلات والأصدقاء.
            </motion.p>
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="secondary-btn"
            >
              معلومات عنا
            </motion.button>
          </div>
          <div className="boxes">
            <div className="box">
              <motion.div
                initial={{ top: -50, opacity: 0 }}
                whileInView={{ top: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="image"
              >
                <motion.img src="image/about-1.png" alt="about-1" />
              </motion.div>
            </div>
            <div className="box">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="image"
              >
                <img src="image/about-2.png" alt="about-1" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
