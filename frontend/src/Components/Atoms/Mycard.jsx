import React from "react";
import PropTypes from "prop-types";
import MyImage from "./MyImage";

const Mycard = ({ classname, description, title, avatar, userName }) => {


  return (
    <div>
      {avatar && (
        <div>
          <div>
            <MyImage src={"./comma.png"} alt={"comma"} />
          </div>
          <div className="comment-text">{description}</div>
          <div className="comment-footer">
            <MyImage src={avatar} alt={"avatar"} />
            <p>{userName}</p>
            <MyImage src={"./spotify.png"} alt={"spotify"} />
          </div>
        </div>
      )}
      {title && (
        <div >
            {title}
        </div>
      )}
    </div>
  );
};

Mycard.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  avatar: PropTypes.string,
  userName: PropTypes.string,
};

Mycard.defaultProps = {
  src: "",
  alt: "",
  className: "",
  description: "",
  title: "",
  avatar: "",
  userName: "",
};

export default Mycard;
