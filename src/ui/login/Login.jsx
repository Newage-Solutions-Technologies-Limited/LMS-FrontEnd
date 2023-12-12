import { useEffect, useState } from "react";
import "./Login.css";
import Logo from "../../ui/Logo";
import Modal from "../modal/Modal";
import edurexLogo from "../../assets/edurex-logo.svg";

function Login() {
  // React States
  const [isModalOpen, setModalOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    school_id: "",
    email: "",
  });

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

    if (!formData.school_id?.trim()) {
      newErrors.school_id = "School ID is required";
    } else if (formData.school_id.length < 5) {
      newErrors.school_id = "Invalid School ID. Please check and try again.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email. Please check and try again.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  // Form Submit
  function handleValidationOfForm(e) {
    e.preventDefault();

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: undefined,
    });

    if (e.target.name === "email") {
      validateEmail(e.target.value);
    }
  };

  // Form Validate Email
  const validateEmail = (value) => {
    const emailErrors = {};

    if (!value.trim()) {
      emailErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(value)) {
      emailErrors.email = "Invalid email. Please check and try again.";
    }

    setErrors({
      ...errors,
      ...emailErrors,
    });
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
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
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
            <p>Enter your Email Address and School ID to login.</p>
          </div>

          <form onSubmit={handleValidationOfForm}>
            <div className="form-details">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleInputChange}
                className={`${errors.email ? "error-style" : ""}`}
              />
              {errors.email ? (
                <div className="form-error-message">{errors.email}</div>
              ) : (
                <div className="hidden-text form-error-message">Hidden</div>
              )}
            </div>

            <div className="form-details">
              <label htmlFor="">School ID</label>
              <input
                type="tel"
                name="school_id"
                placeholder="Enter ID"
                value={formData.school_id}
                onChange={handleInputChange}
                className={`${errors.school_id ? "error-style" : ""}`}
              />

              {errors.school_id ? (
                <div className="form-error-message">{errors.school_id}</div>
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
                errors.school_id || errors.email
                  ? "login-btn-error"
                  : "login-btn"
              }`}
              onClick={handleValidationOfForm}
            >
              <p
                className={` ${
                  errors.school_id || errors.email ? "login-btn-text-error" : ""
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
  // import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
   const [passwordRevealed, setPasswordRevealed] = useState(false);
  function toggleSelection() {
    setPasswordRevealed((prev) => !prev);
  }
  
  <div className="form-password-toggle">
                <div className="eye-icon" onClick={toggleSelection}>
                  {passwordRevealed ? (
                    <IoEyeSharp size={18} color="#008688" />
                  ) : (
                    <IoEyeOffSharp size={18} color="#008688" />
                  )}
                </div>
              </div> */
  // if (!formData.password.trim()) {
  //   newErrors.password = "Password is required";
  // } else if (formData.password.length < 6) {
  //   newErrors.password = "Password must be at least 6 characters";
  // }
}
