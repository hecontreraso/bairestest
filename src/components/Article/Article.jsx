import React from "react";
import "./Article.scss";

function Article(props) {
  const { thumbnailUrl, title } = props.article;
  return (
    <div className="article">
      <img src={thumbnailUrl} className="image" />
      <p>{title}</p>
    </div>
  );
}

export default Article;
