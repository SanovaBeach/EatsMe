import React from 'react'
import {FoodsContainer, Loading} from '../components'
import {useFoodsContext} from '../context/context'
import {useFilterContext} from '../context/filter_context'

const Foods = () => {
  const {isLoading, foodData} = useFoodsContext()
  const {filterFoods} = useFilterContext()

  if(isLoading || foodData === undefined || filterFoods === undefined) {
    return <Loading />
  }


  return (
    <React.Fragment>
      <FoodsContainer />
    </React.Fragment>
  )
}

export default Foods