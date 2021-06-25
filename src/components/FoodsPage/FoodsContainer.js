import React from 'react'
import FoodsList from './FoodsList'
import FoodsFilter from './FoodsFilter'

const FoodsContainer = () => {


  return (
    <React.Fragment>
      <FoodsFilter  />
      <FoodsList />
    </React.Fragment>
  )
}

export default FoodsContainer