import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios, { all } from "axios";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { toast } from "react-toastify";
import MyImage from "../Components/Atoms/MyImage";
import MyButton from "../Components/Atoms/MyButton";
import MyInput from "../Components/Atoms/MyInput";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    setLoginError("");

    try {
      // Replace with your actual API endpoint
      const response = await axios.post(
        "http://localhost:8000/client/login",
        data
      );

      // Store JWT token and user data
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      toast.success("Logged in ");

      // navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      setLoginError(
        error.response?.data?.message ||
          "Login failed. Please check your credentials."
      );
      toast.error(error.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const imagesValues = [
    {
      src: "./magazine1.png",
      alt: "image1",
      className: "sideImage",
    },
    {
      src: "./magazine3.png",
      alt: "image2",
      className: "frontImage",
    },
    {
      src: "./magazine2.png",
      all: "image3",
      className: "sideImage",
    },
  ];

  return (
    <div className="MyLoginPage ">
      {/* Background MyImage Section */}
      <div className="loginBg ">
        <div className="flex-column upper_content">
          {/* Top Section */}
          <div className="flex-column imageHeading">
            <div>
              <MyImage src={"./StartUp&I.png"} alt={"startUpImage"} />
              <img src="latestImage.png" alt="" />
            </div>
            <div>
              <MyImage src={"./latestImage.png"} alt={"latestImage"} />
            </div>
          </div>

          {/* Middle Section */}
          <div className=" imageContainer">
            {imagesValues.map((image, idx) => (
              <MyImage
                src={image.src}
                alt={image.alt}
                className={image.className}
                key={idx}
              />
            ))}
          </div>

          {/* Bottom Section */}
          <p className="loginPageMessage">
            Stay Ahead with the Latest News, Exclusive Stories, and Premium
            Features — All in One Subscription.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-column formSection">
        <h1 className="heading">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formField">
            <i className="fa-solid fa-user icon_Style"></i>

            <MyInput
              type="email"
              className="formInputs"
              placeholder="Email"
              name="email"
              register={register}
              required="Email is required"
              pattern={{
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
                message: "Invalid email address",
              }}
            />
          </div>
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}

          <div className="formField">
            {/* <img src="./lock_icon.png" alt="lock_image" /> */}
            <MyImage src={"./lock_icon.png"} alt={"lock_image"} />

            <MyInput
              type="password"
              name="password"
              className="formInputs"
              placeholder="Password"
              register={register}
              required="Password is required"
              minLength={{
                value: 6,
                message: "Password must be at least 6 characters",
              }}
            />
          </div>
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}

          {/* Display login error */}
          {loginError && <p className="error-message">{loginError}</p>}

          <div style={{display:'flex', width:'100%', justifyContent:'center'}}>
            
            <MyButton
              type={"submit"}
              className={`loginButton `}
              disabled={isLoading}
              name="Login"
            />
          </div>
        </form>
      </div>
    </div>
  );

  // return (
  //   <div className="login-page">
  //     <div className="login-page__background">
  //       <div className="login-page__content">
  //         <div className="image-heading">
  //           <div>
  //             <MyImage src={"./StartUp&I.png"} alt={"startUpImage"} />
  //           </div>
  //           <div>
  //             <MyImage src={"./latestImage.png"} alt={"latestImage"} />
  //           </div>
  //         </div>

  //         <div className="image-container">
  //           {imagesValues.map((image, idx) => (
  //             <MyImage
  //               src={image.src}
  //               alt={image.alt}
  //               className={`image-${image.className}`}
  //               key={idx}
  //             />
  //           ))}
  //         </div>

  //         <p className="login-page__message">
  //           Stay Ahead with the Latest News, Exclusive Stories, and Premium
  //           Features — All in One Subscription.
  //         </p>
  //       </div>
  //     </div>

  //     <div className="form-section">
  //       <h1 className="heading">Login</h1>
  //       <form onSubmit={handleSubmit(onSubmit)}>
  //         <div className="form-field">
  //           <i className="fa-solid fa-user icon-style"></i>
  //           <MyInput
  //             type="email"
  //             className="form-inputs"
  //             placeholder="Email"
  //             name="email"
  //             register={register}
  //             required="Email is required"
  //             pattern={{
  //               value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  //               message: "Invalid email address",
  //             }}
  //           />
  //         </div>
  //         {errors.email && <p className="error-message">{errors.email.message}</p>}

  //         <div className="form-field">
  //           <MyImage src={"./lock_icon.png"} alt={"lock_image"} />
  //           <MyInput
  //             type="password"
  //             name="password"
  //             className="form-inputs"
  //             placeholder="Password"
  //             register={register}
  //             required="Password is required"
  //             minLength={{
  //               value: 6,
  //               message: "Password must be at least 6 characters",
  //             }}
  //           />
  //         </div>
  //         {errors.password && (
  //           <p className="error-message">{errors.password.message}</p>
  //         )}

  //         {loginError && <p className="error-message">{loginError}</p>}

  //         <div>
  //           <MyButton
  //             type={"submit"}
  //             className={"btn btn-primary btn-full"}
  //             disabled={isLoading}
  //           />
  //         </div>
  //       </form>
  //     </div>
  //   </div>
  // );
};

export default LoginPage;
