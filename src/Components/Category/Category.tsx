import Title from "../Title/Title";
import "./category.css";

import { motion } from "motion/react";

const Category = () => {
  return (
    <div className="category" id="category">
      <img src="shapes/1.jpg" className="shape-1" alt="" />
      <Title
        spanText="الأقسام"
        text="من خلال هذا القسم سوف تعرف ما لدينا"
        title="تعرف علي ما لدينا"
      />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="box"
        >
          <img src="image/food-1.png" alt="" />
          <h2>مكرونة</h2>
        </motion.div>
        <motion.div
          className="box"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <img src="image/food-2.png" alt="" />
          <h2>برجر وأكل سريع</h2>
        </motion.div>
        <motion.div
          className="box"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <img src="image/food-3.png" alt="" />
          <h2>سلطة خضراء</h2>
        </motion.div>
        <motion.div
          className="box"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <img src="image/food-4.png" alt="" />
          <h2>بيتزا</h2>
        </motion.div>
        <motion.div
          className="box"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
        >
          <img src="image/food-5.png" alt="" />
          <h2>شوربة</h2>
        </motion.div>
      </div>
    </div>
  );
};

export default Category;
