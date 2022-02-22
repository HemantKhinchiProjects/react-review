import React, { useState } from 'react';
import people from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  FaChevronLeft,
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
    </article>
  );
};

export default Review;
