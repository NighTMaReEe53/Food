import Title from "../Title/Title";
import "./food.css";
import { motion } from "motion/react";

const Food = () => {
  return (
    <div className="food" id="food">
      <img src="shapes/1.jpg" className="shape-1" alt="" />
      <Title
        spanText="اكلاتنا المميزة"
        title="الأطعمة التي لدينا"
        text="من خلال هذا القسم سوف تعرف علي ما لدينا من طعام"
      />
      <div className="container">
        <motion.div
          className="box"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="image">
            <img src="food-1.png" alt="food" />
            <div className="icon">
              <span>+</span>
            </div>
          </div>
          <div className="text">
            <h2>Royal Cheese Burger with extra Fries</h2>
            <p>1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium</p>
            <span>
              Price : 100 <span>EGP</span>
            </span>
          </div>
        </motion.div>
        <motion.div
          className="box"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="image">
            <img src="food-3.png" alt="food" />
            <div className="icon">
              <span>+</span>
            </div>
          </div>
          <div className="text">
            <h2>The classics for 3</h2>
            <p>
              1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized
              French Fries , 3 cold drinks
            </p>
            <span>
              Price : 200 <span>EGP</span>
            </span>
          </div>
        </motion.div>
        <motion.div
          className="box"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="image">
            <img src="food-1.png" alt="food" />
            <div className="icon">
              <span>+</span>
            </div>
          </div>
          <div className="text">
            <h2>The classics for 3</h2>
            <p>
              1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized
              French Fries , 3 cold drinks
            </p>
            <span>
              Price : 300 <span>EGP</span>
            </span>
          </div>
        </motion.div>
        <motion.div
          className="box"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="image">
            <img src="food-2.png" alt="food" />
            <div className="icon">
              <span>+</span>
            </div>
          </div>
          <div className="text">
            <h2>The classics for 3</h2>
            <p>
              1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized
              French Fries , 3 cold drinks
            </p>
            <span>
              Price : 40 <span>EGP</span>
            </span>
          </div>
        </motion.div>
        <motion.div
          className="box"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="image">
            <img src="food-4.png" alt="food" />
            <div className="icon">
              <span>+</span>
            </div>
          </div>
          <div className="text">
            <h2>The classics for 3</h2>
            <p>
              1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized
              French Fries , 3 cold drinks{" "}
            </p>
            <span>
              Price : 35 <span>EGP</span>
            </span>
          </div>
        </motion.div>
        <motion.div
          className="box"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="image">
            <img src="food-5.png" alt="food" />
            <div className="icon">
              <span>+</span>
            </div>
          </div>
          <div className="text">
            <h2>The classics for 3</h2>
            <p>
              1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized
              French Fries , 3 cold drinks{" "}
            </p>
            <span>
              Price : 40 <span>EGP</span>
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Food;
