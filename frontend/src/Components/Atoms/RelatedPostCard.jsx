import React from "react";
import MyImage from "./MyImage";

const RelatedPostCard = () => {
  const postTemplate = {
    postImage: "./PostImage.jpg",
    postHead: "Essential guide to international driving permits.",
    postName: "Ankit",
    postDate: "Nov,13",
    postComment: "1.4K",
    postView: "100.5K",
  };

  const postData = Array(3).fill(postTemplate);

  return (
    <div className="roboto-regular postCardCont">
      <h1 className="roboto-bold relatedHeading">Related posts</h1>

      {postData.map((data, idx) => (
        <div className="postcardList" key={idx}>
          <div className="postImgCont">
            <MyImage src={data.postImage} alt="postImage" className="postImg" />
          </div>
          <div className="postHead">
            <p>{data.postHead}</p>
            <div className="postdetail">
              <p>{data.postName}</p>
              <p>{data.postDate}</p>
              <p>{data.postComment}</p>
              <p>{data.postView}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="postTags">
        <h3 className="relatedHeading">Tags</h3>
        <div className="tagList">
          <p className="tag">Driving permits</p>
          <p className="tag">Travel Log</p>
          <p className="tag">Travel Info</p>
          <p className="tag">Paradise</p>
        </div>
      </div>
    </div>
  );
};

export default RelatedPostCard;

