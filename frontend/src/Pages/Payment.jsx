import React from 'react'
import { useLocation } from 'react-router-dom';
import MyButton from '../components/atoms/MyButton';

export const Payment = () => {
  const { state } = useLocation();
 const plan = state?.plan;
  return (
      <div className="user-form-page">
          <div className="user-form-content">
            <div className="plan-box">
              <h4 className="form-title">
                Get in print, delivered to your door, with full digital access
              </h4>
              <p className="plan-price">{plan.price}</p>
              <p className="plan-duration">{plan.duration}</p>
              <MyButton className="plan-btn" name="Selected" disabled />
            </div>
            </div>
            </div>
  )
}
