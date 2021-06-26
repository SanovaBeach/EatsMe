import React from 'react'
import Item from '../HomePage/Item'
import Title from '../Title/Title'

const FoodType = ({foods, title}) => {
  return (
    <React.Fragment>
      <div className="FoodType">
        <Title title={title} />
        <div className="FoodType__container container">
          <div className="FoodType__contents">
            {
              foods.map((food)=> {
                return <Item key={food.id} food={food} />
              })
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default FoodType