import React from "react";
import "./css/course.css";

function Course({ course }) {
  //   console.log(course);
  const { id, title, description, price, link, image } = course;

  return (
    <div className="course-box" key={id}>
      <div className="image-box">
        <img src={image} className="course-image" />
      </div>
      <div className="course-heading">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className="course-footer">
        <h4>{price}</h4>
        <a href={link}>Ziyaret Et</a>
      </div>
    </div>
  );
}

export default Course;
