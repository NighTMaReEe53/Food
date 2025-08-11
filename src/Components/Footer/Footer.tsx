import {
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="text">
          <h2>
            <img src="logo.png" alt="logo" />
            مطعم الشرقي
          </h2>
          <p>نتمني لكم السعادة معانا وان يعجبكم مطعمنا وان نكون عند حسن ظنكم</p>
        </div>
        <div className="image">
          <img src="footer.png" alt="" />
        </div>
        <div className="contact">
          <h2>التواصل من خلال</h2>
          <div className="contact-item">
            <span>
              <FaFacebookF size={30} />
            </span>
            <span>
              <FaInstagram size={30} />
            </span>
            <span>
              <FaWhatsapp size={30} />
            </span>
            <span>
              <FaTelegramPlane size={30} />
            </span>
          </div>
        </div>
      </div>
      <h2 className="container copyright">
        تم أنشاء التصميم بواسطة{" "}
        <span>
          يوسف عادل
          <FaHeart size={25} color="var(--mainColor)" />
          <FaHeart size={25} color="var(--mainColor)" />
        </span>
      </h2>
    </div>
  );
};

export default Footer;
