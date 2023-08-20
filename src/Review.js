import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(1);
  const { id, name, job, image, text } = people[index];

  const checkIndex = (number) => {
    if (number > people.length - 1) return 0;
    if (number < 0) return people.length - 1;
    return number;
  };
  const handlePrev = () => setIndex((index) => checkIndex(index + 1));
  const handleNext = () => setIndex((index) => checkIndex(index - 1));
  const handleRandom = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === index) randomIndex = index + 1;

    return setIndex(checkIndex(randomIndex));
  };
  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{name}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={handlePrev} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={handleNext} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button onClick={handleRandom} className="random-btn">
        surprise me
      </button>
    </article>
  );
};

export default Review;
