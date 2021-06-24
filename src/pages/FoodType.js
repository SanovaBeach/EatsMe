import React, {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'
import {client} from '../contentful'
import {useFoodsContext} from '../context/context'
import {Loading, FoodTypeList} from '../components'

const FoodType = () => {
  const {foodType} = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [food, setFood] = useState([])
  const {formatData} = useFoodsContext()

  async function getFoodTypeData(foodType) {
    setIsLoading(true)
    let {items} = await client.getEntries({
      content_type: 'foodReview',
      'fields.foodType': foodType
    })
    setFood(items)
    setIsLoading(false)  
  }
  async function getRecommended(foodType) {
    setIsLoading(true)
    let {items} = await client.getEntries({
      content_type: 'foodReview',
      'fields.recommended': true
    })
    setFood(items)
    setIsLoading(false)  
  }

  useEffect(()=> {
    if(foodType === 'recommended') {
      getRecommended(foodType)
    }
    else {
      getFoodTypeData(foodType)
    }
  }, [])

  if(isLoading || food===undefined)  {
    return <Loading />
  }

  console.log('foods', food)

  return (
    <React.Fragment>
      <h1>Food Type</h1>
      <p>{foodType}</p>
      <FoodTypeList />
    </React.Fragment>
  )
}

export default FoodType