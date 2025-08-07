import React from "react";
import MyImage from "./MyImage";

const InputCard = () => {
  return (
    <div style={{ display: "flex"}}>
      {/* left image */}
      <div style={{ width: "" }}>
        <MyImage
          src={"./cardLeftImage.jpg"}
          alt={"cardLeftImg"}
          className="cardLeftImg"
        />
      </div>

      {/* right card */}
      <div
       
        className="roboto-medium rightCardCont"
      >
        <div>
          <MyImage
            src={"./cardRightImage.png"}
            alt={"cardRightImg"}
            className="girlImage"
          />
        </div>
        <div style={{}}>
          <h1 style={{ textAlign: "center", marginBlock: "0.6rem" }} >
            Enjoyed the read?
          </h1>
          <p
            
            className="cardPara"
          >
            Join our monthly newsletter for helpful tips on how to run your
            <br />
            business smoothly
          </p>
          <div
            
            className="flex-center"
          >
            <input
              type="email"
              name=""
              id=""
              placeholder="Your Email"
              
              className="cardInp"
            />
            <button
              
              className="cardBtn"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputCard;
