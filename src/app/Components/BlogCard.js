import React from "react";

const BlogCard = (props) => {
  return (

    <div class="blogCard mx-3 mt-3">
      <div class="content">
        <p class="heading">{props.title}</p>
        <p class="para">
          {props.description}
        </p>
        {props.buttonText? <button class="btn">{props.buttonText}</button>: <></>}
      </div>
    </div>

  );

};

export default BlogCard;
