import { FaStar } from "react-icons/fa";
import Title from "../Title/Title";
import "./review.css";
import { motion } from "motion/react";

const Review = () => {
  return (
    <div className="review-content" id="review">
      <img src="review.png" className="review-img" alt="" />
      <Title
        spanText="قالوا عنا"
        title="الشهادات - التوصيات"
        text="من خلال هذا القسم سوف تعرف رأي العملاء عنا"
      />
      <div className="container">
        <motion.div
          className="box"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="icon">
            <img src="quote.png" className="quote" alt="" />
          </div>
          <p>
            مطعم الشرقي فعلاً من أفضل المطاعم اللي جربتها للأكل العربي الأصيل.
            الأجواء فيه دافئة ومميزة، بتحس كأنك في قلب الشام أو بيروت. جربت
            الكباب والفتوش، وكانوا فوق الممتاز! الطعم أصيل، والتوابل متوازنة
            جدًا. كمان الخدمة ممتازة والموظفين ودودين وبشوشين. أنصح أي حد يحب
            الأكل الشرقي يزور مطعم الشرقي، تجربة ما تتفوت{" "}
          </p>
          <div className="info">
            <img src="1.png" alt="" />
            <div className="text">
              <div className="stars">
                <FaStar size={25} color="var(--SecondaryColor)" />
                <FaStar size={25} color="var(--SecondaryColor)" />
                <FaStar size={25} color="var(--SecondaryColor)" />
                <FaStar size={25} color="var(--SecondaryColor)" />
                <FaStar size={25} color="#CCC" />
              </div>
              <h2>محمد علي</h2>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="box"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="icon">
            <img src="quote.png" className="quote" alt="" />
          </div>
          <p>
            مطعم الشرقي فعلاً من أفضل المطاعم اللي جربتها للأكل العربي الأصيل.
            الأجواء فيه دافئة ومميزة، بتحس كأنك في قلب الشام أو بيروت. جربت
            الكباب والفتوش، وكانوا فوق الممتاز! الطعم أصيل، والتوابل متوازنة
            جدًا. كمان الخدمة ممتازة والموظفين ودودين وبشوشين. أنصح أي حد يحب
            الأكل الشرقي يزور مطعم الشرقي، تجربة ما تتفوت{" "}
          </p>
          <div className="info">
            <img src="2.png" alt="" />
            <div className="text">
              <div className="stars">
                <FaStar size={25} color="var(--SecondaryColor)" />
                <FaStar size={25} color="var(--SecondaryColor)" />
                <FaStar size={25} color="var(--SecondaryColor)" />
                <FaStar size={25} color="var(--SecondaryColor)" />
                <FaStar size={25} color="#CCC" />
              </div>
              <h2>مصطفي محمود</h2>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Review;
