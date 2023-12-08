import { useNavigate } from "react-router-dom";
import "./Login.css";
import Logo from "../../ui/Logo";
import Button from "../../ui/Button";
import adinLogo from "../../assets/adin-logo.svg";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { useState } from "react";
// IoEyeSharp,

function Login() {
  const [passwordRevealed, setPasswordRevealed] = useState(false);
  const navigate = useNavigate();

  function toggleSelection() {
    setPasswordRevealed((prev) => !prev);
  }

  return (
    <>
      <div className="container">
        <Logo
          width={350}
          margin={70}
          imageUrl={adinLogo}
          imageAlt="adin-logo"
        />

        <div className="heading-desc">
          <h2>Welcome back!</h2>
          <p>Enter your matric number and password to login.</p>
        </div>

        <form>
          <div className="form-details">
            <label htmlFor="">Matric number</label>
            <input
              type="text"
              value={15057308}
              placeholder="Enter matric number"
            />
          </div>

          <div className="form-details">
            <label htmlFor="">Password</label>

            <div className="form-password-toggle">
              <input
                type="password"
                value={12345678}
                placeholder="Enter password"
              />
              <div className="eye-icon" onClick={toggleSelection}>
                {passwordRevealed ? <IoEyeSharp /> : <IoEyeOffSharp />}
              </div>
            </div>
          </div>

          <div className="form-foot">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>

            <a href="#" rel="noreferrer">
              Forgot password?
            </a>
          </div>

          <Button
            width={100}
            fontWeight={600}
            color="#fff"
            bgColor="#9CA3AF"
            onClick={() => navigate("/overview")}
          >
            Login
          </Button>
        </form>
      </div>
    </>
  );
}

export default Login;
