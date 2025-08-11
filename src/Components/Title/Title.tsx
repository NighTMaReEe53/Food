interface IText {
  spanText: string;
  title: string;
  text: string;
}
import "./title.css";
import { motion } from "motion/react";

const Title = ({ spanText, text, title }: IText) => {
  return (
    <div className="main-title">
      <motion.span
        initial={{ top: -50, opacity: 0 }}
        whileInView={{ top: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {spanText}
      </motion.span>
      <motion.h2
        initial={{ bottom: -50, opacity: 0 }}
        whileInView={{ bottom: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {text}
      </motion.p>
    </div>
  );
};

export default Title;
