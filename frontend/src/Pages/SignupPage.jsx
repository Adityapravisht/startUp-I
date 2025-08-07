import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios, { all } from "axios";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { toast } from "react-toastify";
import Image from "../Components/Atoms/MyImage";
import MyButton from "../Components/Atoms/MyButton";
import MyInput from "../Components/Atoms/MyInput";

const SignupPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [SignupError, setLoginError] = useState("");
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
        "http://localhost:8000/client/signup",
        data
      );

      // Store JWT token and user data
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      navigate("/login");

      toast.success(response.data.message);

    } catch (error) {
      console.error("signup error:", error);
      setLoginError(
        error.response?.data?.message ||
          "signup failed. Please check your credentials."
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
      {/* Background Image Section */}
      <div className="background_image">
        <div className="flex-column ">
          {/* Top Section */}
          <div className="flex-column ">
            <div>
              <Image src={"./StartUp&I.png"} alt={"startUpImage"} />
            </div>
            <div>
              <Image src={"./latestImage.png"} alt={"latestImage"} />
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex-center imageContainer">
            {imagesValues.map((image, idx) => (
              <Image
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
      <div className="formSection">
        <h1 className="heading">Signup</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formField">
            <MyInput
              type="text"
              className="formInputs"
              // style = {{border:'2px solid black'}} 
              placeholder="Name"
              name="name"
              register={register}
              required="Name is required"
              minLength={{
                value: 4,
                message: "Min length is 4 ",
              }}
            />
          </div>
          {errors.name && (
            <p className="error-message">{errors.name.message}</p>
          )}

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
            <Image src={"./lock_icon.png"} alt={"lock_image"} />

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
          {SignupError && <p className="error-message">{SignupError}</p>}

          <div>
            <MyButton
              type={"submit"}
              className={"loginButton"}
              disabled={isLoading}
              name='Signup'
            />
          </div>
        </form>
      </div>
    </div>
  );

  };

export default SignupPage;
