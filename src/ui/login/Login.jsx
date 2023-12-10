import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Login.css";
import Logo from "../Logo";
import Button from "../Button";
import edurexLogo from "../../assets/edurex-logo.svg";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
// IoEyeSharp,

Login.propTypes = {
  username: PropTypes.string,
};

function Login({ username = "Username" }) {
  const [passwordRevealed, setPasswordRevealed] = useState(false);
  const navigate = useNavigate();

  function toggleSelection() {
    setPasswordRevealed((prev) => !prev);
  }

  return (
    <>
      <div className="container">
        <div>
          <Logo
            width={150}
            margin={70}
            imageUrl={edurexLogo}
            imageAlt="adin-logo"
          />

          <div className="heading-desc">
            <h2>Welcome back!</h2>
            <p>Enter your {username} and Password to login.</p>
          </div>

          <form>
            <div className="form-details">
              <label htmlFor="">{username}</label>
              <input type="text" placeholder={`Enter ${username}`} />
            </div>

            <div className="form-details">
              <label htmlFor="">Password</label>

              <div className="form-password-toggle">
                <input type="password" placeholder="Enter Password" />
                <div className="eye-icon" onClick={toggleSelection}>
                  {passwordRevealed ? (
                    <IoEyeSharp size={18} />
                  ) : (
                    <IoEyeOffSharp size={18} />
                  )}
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
              backgroundColor="#008688"
              hoverIn="#a1dfe4"
              onClick={() => navigate("/dashboard")}
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
