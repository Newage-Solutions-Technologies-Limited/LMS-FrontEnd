import { useEffect, useState } from "react";
import Login from "../../ui/login/Login";
import "./LoginPage.css";
import loginImg1 from "../../assets/login-img-1.png";
import loginImg2 from "../../assets/login-img-2.png";

function LoginPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="login-container">
      <div className="carousel">
        <img
          src={loginImg1}
          alt="boy-image"
          className={activeIndex === 0 ? "active" : ""}
        />
        <img
          src={loginImg2}
          alt="girl-image"
          className={activeIndex === 1 ? "active" : ""}
        />
      </div>

      <div>
        <Login username="Matric Number" />
      </div>
    </div>
  );
}

export default LoginPage;
