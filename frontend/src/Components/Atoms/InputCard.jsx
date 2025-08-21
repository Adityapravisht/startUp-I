import MyImage from "./MyImage";

// const InputCard = () => {
//   return (
//     <div style={{ display: "flex"}}>
//       {/* left image */}
//       <div>
//         <MyImage
//           src={"./cardLeftImage.jpg"}
//           alt={"cardLeftImg"}
//           className="cardLeftImg"
//         />
//       </div>
//       {/* right card */}
//       <div
//         className="roboto-regular rightCardCont"
//       >
//         <div>
//           <MyImage
//             src={"./cardRightImage.png"}
//             alt={"cardRightImg"}
//             className="girlImage"
//           />
//         </div>
//         <div>
//           <h1 className="parahead roboto-medium">
//             Enjoyed the read?
//           </h1>
//           <p
//             className="cardPara"
//           >
//             Join our monthly newsletter for helpful tips on how to run your
//             <br />
//             business smoothly
//           </p>
//           <div
//             className="emailInput"
//           >
//             <input
//               type="email"
//               name=""
//               id=""
//               placeholder="Your Email"
//               className="cardInp"
//             />
//             <button
//               className="cardBtn"
//             >
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const InputCard = () => {
  return (
    <div className="inputCardCont">
      {/* Left Image */}
      <div className="leftImgCont">
        <MyImage
          src={"./cardLeftImage.jpg"}
          alt={"cardLeftImg"}
          className="cardLeftImg"
        />
      </div>

      {/* Right Card */}
      <div className="roboto-regular rightCardCont">
        <MyImage
          src={"./cardRightImage.png"}
          alt={"cardRightImg"}
          className="girlImage"
        />

        <h1 className="parahead roboto-medium">Enjoyed the read?</h1>
        <p className="cardPara">
          Join our monthly newsletter for helpful tips on how to run your
          business smoothly
        </p>

        <div className="emailInput">
          <input
            type="email"
            placeholder="Your Email"
            className="cardInp"
          />
          <button className="cardBtn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default InputCard;


