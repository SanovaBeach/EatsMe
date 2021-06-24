import React from 'react';
import Item from './Item';
import {Link, Route} from 'react-router-dom'
import Loading from '../Loading/Loading'
import FoodType from '../../pages/FoodType'
import Title from '../Title/Title';

const MainContent = ({foodData, title, size, isLoading, foodType}) => {


  return (
    <React.Fragment>
      <div className="MainContent">
        <Title title={title} />
        <div className="MainContent__container container">
          <div className="MainContent__reviews">
            {foodData.slice(0, size).map((food) => {
              return <Item key={food.id} food={food} />;
            })}
          </div>
          {foodType ? 
            (
            <Link to={`/foods/type/${foodType}`}  className='see-more' >
             See More
           </Link>
           ) 
           :
           (<Link to='/foods' className='see-more' >
             See More
           </Link>)
           }
        </div>
      </div>
      
    </React.Fragment>
  );
};

export default MainContent;

 
 // {slug ? (<Link to={{
 //             pathname: `/foods/type/${slug}`,
 //             state: {
 //               data: foodData
 //             }
 // 
 //           }}  className='see-more' >
 //             See More
 //           </Link>) :
 //           (<Link to='/foods' className='see-more' >
 //             See More
 //           </Link>)
 //           }