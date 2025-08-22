import React from 'react'
import MyImage from '../components/atoms/MyImage'
import { FooterBg } from '../components/navigation/FooterBg';
import { UserForm } from './UserForm';
import { useNavigate } from 'react-router-dom';
import MyButton from '../components/atoms/MyButton';


export const Subscribe = () => {

  const navigate = useNavigate();
  // const [selectedPlan, setSelectedPlan] = useState(null);

    const plans = [
    {
      name: "PRO",
      price: "₹3,029",
      duration: "3 Months of Print & Digital Access",
      features: [
        "Get up to 2 months free issues, delivered to your door",
        "FREE digital special issues",
        "Web Access, via the following links",
      ],
      highlight: true,
    },
    {
      name: "PREMIUM",
      price: "₹10,095",
      duration: "1 Year of Print & Digital Access + 2 months FREE",
      features: [
        "Get up to 2 months free issues, delivered to your door",
        "FREE digital special issues",
        "Web Access, via the following links",
      ],
      highlight: true,
    },
    {
      name: "BASIC",
      price: "₹731",
      duration: "3 Months of Digital Access at 50% Off",
      features: [
        "FREE digital special issues, via TIME Magazine app",
        "Listen to TIME’s top stories",
        "Web Access, via the following links",
      ],
      highlight: false,
    },
  ];

  return (
    <div className="roboto-regular subs-container">
      {/* Background image */}
      <MyImage
        src="./subscribe-bg.png"
        alt="subscribe-bg"
        className="subs-bg-img"
      />

       <div className="subs-wrapper">
      <p className="subs-title">CHOOSE YOUR PLAN</p>
      <p className="subs-subtitle">
        Get in print, delivered to your door, with full digital access
      </p>
    </div>

      <div className="subs-cards">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`subs-card ${plan.name.toLowerCase()}`}
          >
            <div className="plan-header">{plan.name}</div>
            <h3 className="plan-price">{plan.price}</h3>
            <p className="plan-duration">{plan.duration}</p>
            <MyButton
            className="plan-btn"
            name="Select"
            onClick={(() => navigate("/user-form", { state: { plan } }))}


            />
            <ul className="plan-features">
              {plan.features.map((f, idx) => (
                <li key={idx}>
                <span className='list-check'> ✔ </span>
                <span className=' list'>{f} </span></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* {selectedPlan && (
        <UserForm
          plan={selectedPlan}
          onClose={() => setSelectedPlan(null)}
        />
      )} */}
      <FooterBg />
    </div>
  );
};
