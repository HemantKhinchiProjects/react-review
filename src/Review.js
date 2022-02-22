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
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const randomPerson = () => {
    let rendomNumber = Math.floor(Math.random() * people.length);
    if (rendomNumber === index) {
      rendomNumber = index + 1;
    }
    setIndex(checkNumber(rendomNumber));
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const preProson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

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
        <button className="prev-btn" onClick={preProson}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Surprise me
      </button>
    </article>
  );
};

export default Review;
