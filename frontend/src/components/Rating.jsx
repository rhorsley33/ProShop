import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa';

const Rating = ({value, text}) => {
  return (
    <div className='rating'>
      {[1, 2, 3, 4, 5].map((index) => (
        <span key={index}>
          {value >= index ? (
            value >= index + 0.5 ? (
              <FaStar />
            ) : (
              <FaStarHalfAlt />
            )
            ) : (
            <FaRegStar />
          )}
        </span>
      ))}
      <span className='rating-text'>{text && text}</span>
    </div>
  )
}

export default Rating
