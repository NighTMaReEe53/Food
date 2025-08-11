import { CiApple } from "react-icons/ci";
import Title from "../Title/Title";
import "./good.css";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { LuChefHat } from "react-icons/lu";
import { motion } from "motion/react";

const Good = () => {
  return (
    <div className="good" id="good">
      <img src="shapes/7.png" className="shape-7" alt="" />
      <Title
        spanText="افــضــل مــطــعــم"
        title="مميزات المطعم"
        text="من خلال هذا القسم سوف تعرف ما يميز مطعمنا"
      />
      <div className="container">
        <div className="content">
          <motion.div
            className="box"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="icon">
              <CiApple size={70} color="var(--mainColor)" />
            </div>
            <h2>مطعم واستراحة</h2>
            <p>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى،
            </p>
            <button className="main-btn">تعرف أكثر</button>
          </motion.div>
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="icon">
              <MdOutlineDeliveryDining size={70} color="#5DC4B8" />
            </div>
            <h2>توصيل فوري</h2>
            <p>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى،
            </p>
            <button className="secondary-btn">تعرف أكثر</button>
          </motion.div>
          <motion.div
            className="box"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="icon">
              <LuChefHat size={70} color="#EDA42D" />
            </div>
            <h2>أكل طازج</h2>
            <p>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى،
            </p>
            <button className="main-btn">تعرف أكثر</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Good;
