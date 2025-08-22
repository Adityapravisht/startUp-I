import React from "react";
import { FaCube } from "react-icons/fa";
import { GrNext } from "react-icons/gr";
import MyImage from "../../atoms/MyImage";
import MyButton from "../../atoms/MyButton";
import { FaCheck } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { FaPen } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

const UserDetail = () => {
  const purchData = [
    { date: "6th June, 2025 ", type: "Subscription Purchase", time: "9:30" },
    { date: "12th June, 2025  ", type: "Magazine in Transit", time: "12:30" },
    {
      date: "6th June, 2025 ",
      type: "Magazine Delivered Order Marked as Complete",
      time: "8:30",
    },
  ];

  const addressdata = [
    {
      type: "Billing Address",
      location1: "11 Dalanwala",
      city: "Dehradun",
      pincode: "248001",
      country: "India",
    },
    {
      type: "Shipping Address",
      location1: "11 Dalanwala",
      city: "Dehradun",
      pincode: "248001",
      country: "India",
    },
  ];


  return (
    <div className="userDtailCont">
      {/* nav section */}
      <div className="navSection roboto-bold">
        <div style={{ display: "flex", gap: "1rem", fontSize: "1rem" }}>
          <FaCube className="grayText" />
          <p className="grayText">News Management </p>
          <GrNext />
          <p className="grayText">Subscription</p>
          <GrNext />
          <p style={{ color: "#D20004" }}>User Details</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <MyImage
            src={"./avatar.png"}
            alt={"avatar"}
            className={"avatarImg"}
          />
          <p>Admin</p>
        </div>
      </div>

      {/* details head */}
      <div className="detailsHead">
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="roboto-bold"
        >
          <p style={{ fontSize: "24px", color: "gray", paddingInline: "30px" }}>
            Subscription:{" "}
          </p>
          <span>16 June,25-Priya Sharma</span>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <MyButton
            type={"button"}
            className={"selectButton1"}
            name={"Save Changes"}
            icon={<FaCheck />}
          />
          <MyButton
            type={"button"}
            className={"selectButton2"}
            name={"Discard"}
            icon={<RxCross1 />}
          />
        </div>
      </div>

      {/* details card */}
      <div className="cardCont">
        {/* card 1 */}
        <div className="card1 shadowButtonBlack" style={{}}>
          <div
            className="roboto-bold"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h1 style={{ fontSize: "1rem", color: "#4F4F4F" }}>
              SUBSCRIPTION DETAILS
            </h1>
            <MyButton
              type={"button"}
              className={"selectButton2"}
              name={"Download Invoice"}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              padding: "10px",
            }}
          >
            <div>
              <p>Date of Purchase</p>
              <p className="shadowButtonBlack dateBadge" style={{}}>
                16/05/2025
                <span>
                  <FaPen />
                </span>
              </p>
            </div>
            <div>
              <p>Valid Till</p>
              <p className="shadowButtonBlack dateBadge">
                16/05/2025
                <span>
                  <FaPen />
                </span>
              </p>
            </div>
            <div>
              <p>Subscription Plan</p>
              <p className="shadowButtonBlack dateBadge">
                Pro Plan
                <span>
                  <FaChevronDown />
                </span>
              </p>
            </div>
          </div>

          <div style={{ borderBottom: "1px solid gray" }}>
            <p>Payment Details</p>
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  paddingTop: "1rem",
                }}
              >
                <p>Pro Plan</p>
                <div>
                  <p style={{ marginBlock: "10px" }}>
                    Subtotal
                    <span style={{ marginLeft: "45px", color: "gray" }}>
                      &#8377;3024
                    </span>
                  </p>
                  <p style={{ marginBlock: "10px" }}>
                    GST And Taxes{" "}
                    <span style={{ color: "gray" }}>&#8377;98</span>
                  </p>
                  <p style={{ marginBlock: "10px" }}>
                    Total
                    <span style={{ marginLeft: "70px", color: "gray" }}>
                      &#8377;3423
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <p>Mode Of Payment</p>
              <MyButton
                type={"button"}
                className={"selectButton2"}
                name={"See More"}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "10px",
                marginRight: "10px",
              }}
            >
              <p>GooglePay</p>
              <MyImage src={"GPay.png"} alt={"gpay"} className={""} />
            </div>
          </div>
        </div>

        {/* card2 */}
        <div style={{}} className="card2 shadowButtonBlack">
          <h1 className="roboto-bold" style={{ paddingInline: "" }}>
            Customer Details
          </h1>

          <div style={{ borderBottom: "1px solid gray", paddingBlock: "10px" }}>
            <p style={{ marginBlock: "7px" }}>
              Name: <span>Priya Sharma</span>
            </p>
            <p style={{ marginBlock: "7px" }}>
              Email: <span>priyasharma@gmail.com</span>
            </p>
            <p style={{ marginBlock: "7px" }}>
              Telephone: <span>+91 9997693231</span>
            </p>
          </div>

          {addressdata.map((data, idx) => (
            <div key={idx}>
              <h1 className="roboto-bold" style={{ paddingBlock: "1rem" }}>
                {data.type}
              </h1>
              <div>
                <div>
                  <p>{data.location1}</p>
                  <p>{data.city}</p>
                  <p>{data.pincode}</p>
                  <p>{data.country}</p>
                </div>
              </div>
            </div>
          ))}

         
          <MyButton
            type={"button"}
            name={"Update Shipping Address"}
            className={"addressUpdBtn"}
          />
        </div>

        {/* card 3 */}
        <div className="card3 shadowButtonBlack">
          <h1 className="roboto-bold" style={{ padding: "1rem" }}>
            HISTORY
          </h1>

          {purchData?.map((data, idx) => (
            <div
              key={idx}
              style={{ padding: "10px", borderBottom: "1px solid gray",fontSize:'17px' }}
              className="roboto-regular "
            >
              <p style={{fontWeight:'bold'}}>{data?.date}</p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBlock: "4px",
                }}
              >
                {data?.type}
                <span style={{}}>{data?.time}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
