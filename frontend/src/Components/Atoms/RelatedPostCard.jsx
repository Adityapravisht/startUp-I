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
    <div
      className="roboto-regular postCardCont"
    >
      <h1 style={{ fontSize: "1.5rem" }} className="roboto-bold">Related posts</h1>
      {postData.map((data, idx) => (
        <div

          className="postcardList"
          key={idx}
        >
          <div style={{ padding: "10px" }}>
            <MyImage
              src={data.postImage}
              alt={"postImage"}
              className="postImg"
            />
          </div>
          <div className="postHead">
            <p>{data.postHead}</p>
            <div

              className="postdetail"
            >
              <p>{data.postName}</p>
              <p>{data.postDate}</p>
              <p>{data.postComment}</p>
              <p>{data.postView}</p>
            </div>
          </div>
        </div>
      ))}
      <div>
        <h1>Tags</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2.4rem",
            color: "gray",
          }}
        >
          <p>Driving permits</p>
          <p>Travel Log</p>
          <p>Travel Info</p>
          <p>Paradise</p>
        </div>
      </div>
    </div>
  );
};

export default RelatedPostCard;
