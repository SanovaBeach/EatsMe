import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosThumbsDown, IoIosThumbsUp } from 'react-icons/io';

const Item = ({ food }) => {
  const {
    dishName,
    // id,
    price,
    slug,
    rating,
    // recommended,
    // restaurantName,
    // review,
    vegan,
    dishImage: {
      fields: {
        file: { url },
      },
      title,
    },
  } = food;

  return (
    <div className="Item">
      <Link to={`/foods/${slug}`}>
        <img src={url} alt={title} className="Item__image" />
      </Link>
      <div className="Item__descriptions">
        <h4 className="Item__title">{dishName} </h4>
        <p className="Item__price">Price: ${price.toLocaleString()}</p>
        <p className="Item__rating">
          Rating: {rating} / 5
          <span className={`Item__icon ${rating > 3 ? 'green' : 'red'}`}>
            {rating > 3 ? <IoIosThumbsUp /> : <IoIosThumbsDown />}
          </span>
          Vegan: 
          <span className={`Item__vegan ${vegan ? 'green' : 'red'}`}>
            {vegan ? 'Yes' : 'No'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Item;
