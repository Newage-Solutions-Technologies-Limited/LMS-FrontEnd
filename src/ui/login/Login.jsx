import { useEffect, useState } from "react";
import "./Login.css";
import Logo from "../../ui/Logo";
import Modal from "../modal/Modal";
import edurexLogo from "../../assets/edurex-logo.svg";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";

function Login() {
  // React States
  const [isModalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    school_id: "",
    password: "",
  });

  // Toggle between see and unsee password
  function toggleSelection() {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }

  // Modal Controls
  const openModal = () => {
    setLoading(false);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Form Validation
  function validateForm() {
    const newErrors = {};

    if (!formData.school_id.trim()) {
      newErrors.school_id = "School ID is required";
    } else if (formData.school_id.length < 5) {
      newErrors.school_id = "Invalid School ID. Please check and try again.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@_])[A-Za-z\d@_]/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character (_ or @)";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  // Form Submit
  async function handleValidationOfForm() {
    // if (e.key === "Enter") {
    //   e.preventDefault();
    // }

    // console.log(e.key);

    const isValid = validateForm();

    if (isValid) {
      setLoading(true);
      setTimeout(() => {
        openModal();
      }, 2000);
    } else {
      console.log("Form validation error!");
    }

    if (formData.rememberMe) {
      localStorage.setItem("userInfo", JSON.stringify(formData));
    } else {
      localStorage.removeItem("userInfo");
    }
  }

  // Form Input Check
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the error when the field is not empty
    if (value.trim() !== "") {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  // Store User Info In LocalStorage (CheckBox)
  useEffect(() => {
    // Retrieve stored user info when the component mounts
    const storedUserInfo = localStorage.getItem("userInfo");

    if (storedUserInfo) {
      const parsedUserInfo = JSON.parse(storedUserInfo);
      setFormData(parsedUserInfo);
    }
  }, []);

  const handleCheckBoxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  return (
    <>
      <div className="container">
        <div>
          <Logo
            width={150}
            margin={70}
            imageUrl={edurexLogo}
            imageAlt="edurex-logo"
          />

          <div className="heading-desc">
            <h2>Welcome back!</h2>
            <p>Enter your Matric Number and School ID to login.</p>
          </div>

          <form onSubmit={handleValidationOfForm}>
            <div className="form-details">
              <label htmlFor="">Matric No.</label>
              <input
                type="tel"
                placeholder="Enter Matric No."
                name="school_id"
                value={formData.school_id || ""}
                onChange={handleInputChange}
                className={`${errors.school_id ? "error-style" : ""}`}
              />

              {errors.school_id ? (
                <div className="form-error-message">{errors.school_id}</div>
              ) : (
                <div className="hidden-text form-error-message">Hidden</div>
              )}
            </div>

            <div className="form-details">
              <label htmlFor="">Password</label>
              <div
                // className="form-password-toggle"
                className={`form-password-toggle ${
                  errors.password ? "error-style" : ""
                }`}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  name="password"
                  value={formData.password || ""}
                  onChange={handleInputChange}
                />
                {showPassword ? (
                  <IoEyeSharp
                    size={20}
                    color="#4f5662"
                    className="eye-icon"
                    onClick={toggleSelection}
                  />
                ) : (
                  <IoEyeOffSharp
                    size={20}
                    color="#4f5662"
                    onClick={toggleSelection}
                  />
                )}
              </div>

              {errors.password ? (
                <div className="form-error-message">{errors.password}</div>
              ) : (
                <div className="hidden-text form-error-message">Hidden</div>
              )}
            </div>

            <div className="form-foot">
              <div className="remember">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleCheckBoxChange}
                />
                <label htmlFor="">Remember me</label>
              </div>
            </div>

            <div
              className={` ${
                errors.school_id || errors.email || errors.password
                  ? "login-btn-error"
                  : "login-btn"
              }`}
              onClick={handleValidationOfForm}
            >
              <p
                className={` ${
                  errors.school_id || errors.email || errors.password
                    ? "login-btn-text-error"
                    : ""
                }`}
              >
                {loading ? "Logging In..." : "Login"}
              </p>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal} />
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;

{
  /* 
React state
const [formData, setFormData] = useState({email: "",})

  // Form Validation
if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email. Please check and try again.";
    }

  // Form Validate Email
  const validateEmail = (value) => {
    if (!value.trim()) {
      return "Email is required";
    } else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(value)) {
      return "Invalid email. Please check and try again.";
    }

    // Additional check for a valid provider
    const [, provider] = value.split("@");

    const validProviders = [
      "gmail.com",
      "yahoo.com",
      "yahoo.co.uk",
      "hotmail.com",
      "icloud.com",
      "newagesolutions.com",
      "edurex.com",
    ];

    if (!validProviders.includes(provider)) {
      return "Please check email provider (e.g. @edurex.com, @newagesolutions.com, @gmail.com, @yahoo.co.uk etc).";
    }

    return "";
  };

  // Form Input Check
   setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: name === "email" ? validateEmail(value) : undefined,
    }));

    // JSX:
     <div className="form-details">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email || ""}
                onChange={handleInputChange}
                className={`${errors.email ? "error-style" : ""}`}
              />
              {errors.email ? (
                <div className="form-error-message">{errors.email}</div>
              ) : (
                <div className="hidden-text form-error-message">Hidden</div>
              )}
            </div>

 
 */
}
