import React from "react";
import { useForm } from "react-hook-form";
import "../index.css";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // Here you would typically make an API call to authenticate the user
    // Example:
    // try {
    //   const response = await axios.post('/api/login', data);
    //   handleLoginSuccess(response.data);
    // } catch (error) {
    //   handleLoginError(error);
    // }
  };

  return (
    <div className="MyLoginPage">
        
      {/* Background Image Section */}
      <div className="background_image">
        <div className="upper_content">
          {/* Top Section */}
          <div className="imageHeading">
            <div>
              <img src="./StartUp&I.png" alt="startUpImage" />
            </div>
            <div>
              <img src="./latestImage.png" alt="latestImage" />
            </div>
          </div>

          {/* Middle Section */}
          <div className="imageContainer">
            <img src="./magazine1.png" alt="" className="frontImage" />
            <img src="./magazine3.png" alt="" className="frontImage2" />
            <img src="./magazine2.png" alt="" className="frontImage" />
          </div>

          {/* Bottom Section */}
          <p className="loginPageMessage">
            Stay Ahead with the Latest News, Exclusive Stories, and Premium
            Features — All in One Subscription.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="formSection">
        <h1 className="heading">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formField">
            <i className="fa-solid fa-user icon_Style"></i>
            <input
              type="email"
              className="formInputs"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
          </div>
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}

          <div className="formField">
            <img src="./lock_icon.png" alt="lock_image" />
            <input
              type="password"
              className="formInputs"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
          </div>
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}

          <div>
            <button type="submit" className="loginButton">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;