import React from "react";
import image from "../assets/news-2444778_960_720.webp";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block m-3 p-2"
      style={{ maxWidth: "305px" }}
    >
      <img
        src={src ? src : image}
        style={{ height: "200px", width: "290px" }}
        className="card-img-top h-25"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "Lorem ipsum dolor sit amet consectetur adipisicingfacilis itaque fugit laudantium harum explicabo porro corrupti dicta."}
        </p>
        <a href={url} target="_blank" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
