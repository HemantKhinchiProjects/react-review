import React, { useState } from 'react';
import people from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faQuoteRight,
} from '@fortawesome/free-solid-svg-icons';
//import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  console.log(people);
  const { id, name, job, image, text } = people[index];
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FontAwesomeIcon icon={faQuoteRight} size={'2x'} />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="buttonContainer">
        <button className="prev-btn">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="next-btn">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <button className="random-btn">Surprise me</button>
    </article>
  );
};

export default Review;
