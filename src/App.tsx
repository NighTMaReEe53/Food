import { useEffect, useState } from "react";
import About from "./Components/About/About";
import Category from "./Components/Category/Category";
import Food from "./Components/Food/Food";
import Footer from "./Components/Footer/Footer";
import Good from "./Components/Good/Good";
import Review from "./Components/Review/Review";
import Landing from "./Components/UI/Landing/Landing";

function App() {
  const [loading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <>
          <Landing />
          <About />
          <Good />
          <Category />
          <Food />
          <Review />
          <Footer />
        </>
      ) : (
        <div className="overlay-loader">
          <span className="loader"></span>
          <h2>
            <img src="logo.png" alt="logo" />
            <span className="loading-text">اهلا بك في مطعم الشرقي</span>
          </h2>
        </div>
      )}
    </>
  );
}

export default App;
