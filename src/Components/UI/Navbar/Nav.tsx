import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./nav.css";
import { useEffect, useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Nav = () => {
  const [open, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const [active, setIsActive] = useState<
    "home" | "about" | "good" | "category" | "food" | "review"
  >("home");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        ref.current?.classList.add("active");
      } else {
        ref.current?.classList.remove("active");
      }
    });
  }, []);

  return (
    <header ref={ref}>
      <div className="container">
        <a href="#index.html" className="logo">
          <img src="logo.png" alt="Logo" />
          <h1>
            الشرقي
            <span> مـــطـــعـــم</span>
          </h1>
        </a>
        <div className="icon" onClick={() => setIsOpen(!open)}>
          {open ? (
            <IoCloseSharp size={35} color="#f05" />
          ) : (
            <MdOutlineRestaurantMenu size={35} color="var(--blackColor)" />
          )}
        </div>
        <ul className={`links ${open && "show"}`}>
          <li>
            <a
              href="#home"
              className={`${active == "home" && "active"}`}
              onClick={() => setIsActive("home")}
            >
              <span>الصفحة الرئيسية</span>
            </a>
          </li>
          <li>
            <a
              href="#about"
              id="#about"
              className={`${active == "about" && "active"}`}
              onClick={() => setIsActive("about")}
            >
              <span>ماذا عنا</span>
            </a>
          </li>
          <li>
            <a
              href="#good"
              className={`${active == "good" && "active"}`}
              onClick={() => setIsActive("good")}
            >
              <span>مميزاتنا</span>
            </a>
          </li>
          <li>
            <a
              href="#category"
              className={`${active == "category" && "active"}`}
              onClick={() => setIsActive("category")}
            >
              <span>استكشف</span>
            </a>
          </li>

          <li>
            <a
              href="#food"
              className={`${active == "food" && "active"}`}
              onClick={() => setIsActive("food")}
            >
              <span>اكلاتنا</span>
            </a>
          </li>
          <li>
            <a
              href="#review"
              className={`${active == "review" && "active"}`}
              onClick={() => setIsActive("review")}
            >
              <span>اراء العملاء</span>
            </a>
          </li>
        </ul>
        <button className="secondary-btn">اتصل بنا</button>
      </div>
    </header>
  );
};

export default Nav;
