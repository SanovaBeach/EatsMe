import React from 'react';
import { IoIosThumbsDown, IoIosThumbsUp } from 'react-icons/io';

const Food = ({ food }) => {
  const {
    fields: {
      dishName,
      price,
      rating,
      recommended,
      restaurantName,
      review,
      vegan,
      dishImage: {
        fields: {
          file: { url },
        },
        title,
      },
    },
  } = food;
  return (
    <React.Fragment>
      <div className="Food">
        <div className="Food__container container">
          <div className="Food__container--row">
            <div className="Food__container--column">
              <div className="Food__container--pics">
                <img src={url} alt={title} className="Food__container--img" />
              </div>
            </div>
            <div className="Food__container--column">
              <div className="Food__container--text">
                <h1 className="Food__container--title">{dishName}</h1>
                <p className="Food__container--price">Price: ${price}</p>
                <h3 className="Food__container--restaurant">
                  Restaurant Name: {restaurantName}
                </h3>
                <div className="Food__container--desc">
                  <p className="Food__container--rating">
                    Rating: {rating} / 5
                    <span
                      className={`Item__icon ${rating > 3 ? 'green' : 'red'}`}
                    >
                      {rating > 3 ? <IoIosThumbsUp /> : <IoIosThumbsDown />}
                    </span>
                  </p>
                  <p className="Food__container--vegan">
                    Vegan: {vegan}
                    <span className={`Item__vegan ${vegan ? 'green' : 'red'}`}>
                      {vegan ? 'Yes' : 'No'}
                    </span>
                  </p>
                  <p className="Food__container--recommended">
                    Recommended:  
                    <span className={`Item__vegan ${recommended ? 'green' : 'red'}`}>
                      {recommended ? ' Yes' : ' No'}
                    </span>
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="Food__container--review container">  
          <h2 className="Food__container--review--heading">
            Review
          </h2>
          <p className="Food__container--review-text">
             {review}
          </p>
        </h2>
      </div>
    </React.Fragment>
  );
};

export default Food;
