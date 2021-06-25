import React from 'react'
import Item from '../HomePage/Item'
import {useFilterContext} from '../../context/filter_context'

const FoodsList = () => {
  const {filterFoods} = useFilterContext()


  return (
    <React.Fragment>
      <div className="FoodsList">
        <div className="FoodsList__container container">
          <div className="FoodsList__section">
            {
              filterFoods.map((food)=> {
                return <Item key={food.id} food={food} />
              })
            }
          </div>  
        </div>
      </div>  
    </React.Fragment>
  )
}


export default FoodsList