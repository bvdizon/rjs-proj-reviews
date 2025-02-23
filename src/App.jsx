import { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  // helper function
  const checkNumber = (number) => {
    if (number < 0) {
      return people.length - 1;
    }
    if (number > people.length - 1) {
      return 0;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex((currIndex) => {
      const newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const nextPerson = () => {
    setIndex((currIndex) => {
      const newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  // random person
  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    randomIndex !== index
      ? setIndex(checkNumber(randomIndex))
      : setIndex(checkNumber(randomIndex + 1));
  };

  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>

        <div className='btn-container'>
          <button className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button
          type='button'
          className='btn btn-hipster'
          onClick={randomPerson}>
          suprise me
        </button>
      </article>
    </main>
  );
};
export default App;
