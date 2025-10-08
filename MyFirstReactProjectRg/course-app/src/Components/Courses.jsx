import React from "react";

function Courses({ course }) {
  // console.log(course)
  const { id, course_name, description, price, link, image } = course; // distructing
  return (
    <>
      <div className="course-box">
        <img src={image} />
        <h4>{course_name}</h4>
        <h4>{description}</h4>
        <h4>{price} TL</h4>
        <a href={link}>satın alın</a>
      </div>
    </>
  );
}

export default Courses;
