import MyButton from "../components/atoms/MyButton";
import MyImage from "../components/atoms/MyImage";
import { useLocation, useNavigate } from "react-router-dom";
import MyInput from "../components/atoms/MyInput";
import { useForm } from "react-hook-form";
import { FooterBg } from "../components/navigation/FooterBg";

export const UserForm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const plan = state?.plan;

  if (!plan) {
    return (
      <p>
        No plan selected. <button onClick={() => navigate("/")}>Go Back</button>
      </p>
    );
  }

  const onSubmit = (data) => {
    const fullData = { ...data, plan };
    console.log("Form Submitted ✅", fullData);
    // alert(JSON.stringify(fullData, null, 2));
    alert(`Subscribed to ${plan.name} plan!`);
    navigate("/");
  };

  return (
    <div className="user-form-page roboto-regular">
      <div className="user-form-content">
        <div className="plan-box">
          <h4 className="form-title">
            Get in print, delivered to your door, with full digital access
          </h4>
          <p className="plan-price">{plan.price}</p>
          <p className="plan-duration">{plan.duration}</p>
          <MyButton className="plan-btn" name="Selected" disabled />
        </div>

        <div className="subs-type">
          <label className="radio-label">
            <MyInput
              type="radio"
              className="radio-input"
              name="subscriptionType"
              value="subscription"
              {...register("subscriptionType", {
                required: "Please select one option",
              })}
            />
            SUBSCRIPTION
          </label>

          <label className="radio-label">
            <MyInput
              type="radio"
              className="radio-input"
              name="subscriptionType"
              value="renewal"
              {...register("subscriptionType", {
                required: "Please select one option",
              })}
            />
            RENEWAL
          </label>
        </div>
        {/* {errors.subscriptionType && <p className="error">{errors.subscriptionType.message}</p>} */}

        <div className="user-form-container">
          {/* Form */}
          <form className="subscription-form" onSubmit={handleSubmit(onSubmit)}>
            <h5 className="section-header">YOUR DETAILS</h5>
            <div className="form-row">
              <MyInput
                placeholder="Title"
                name="title"
                register={register}
                required
              />
              <MyInput
                placeholder="First Name"
                name="firstName"
                register={register}
                required
              />
              <MyInput
                placeholder="Last Name"
                name="lastName"
                register={register}
                required
              />
            </div>

            <div className="form-row">
              <MyInput
                placeholder="Email Address"
                name="email"
                type="email"
                register={register}
                required
              />
            </div>

            <div className="form-row">
              <MyInput
                type="number"
                placeholder="Country Code"
                name="countryCode"
                register={register}
              />
              <MyInput
                placeholder="Area Code"
                type="number"
                name="areaCode"
                register={register}
              />
              <MyInput
                placeholder="Mobile Number"
                type="number"
                name="mobileNumber"
                register={register}
                required
              />
            </div>

            <h5 className="section-header">BILLING ADDRESS</h5>
            <div className="form-row">
              <MyInput
                placeholder="Address Line 1"
                name="address1"
                register={register}
                required
              />
            </div>
            <div className="form-row">
              <MyInput
                placeholder="Address Line 2"
                name="address2"
                register={register}
              />
            </div>
            <div className="form-row">
              <MyInput placeholder="Town" name="town" register={register} />
              <MyInput
                placeholder="City"
                name="city"
                register={register}
                required
              />
              <MyInput
                placeholder="Postcode"
                type="number"
                name="postcode"
                register={register}
                required
              />
            </div>

            <div className="form-actions">
              <MyButton
                type="submit"
                className="next-btn"
                name="Next →"
                //  onClick={(() => navigate("/payment", { state: { plan } }))}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
