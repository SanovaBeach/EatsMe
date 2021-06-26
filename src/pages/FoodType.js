import React, {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'
import {client} from '../contentful'
import {useFoodsContext} from '../context/context'
import {Loading, FoodTypeList} from '../components'

const FoodType = () => {
  const {foodType} = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [foods, setFoods] = useState([])
  const {formatData} = useFoodsContext()

  async function getFoodTypeData(foodType) {
    setIsLoading(true)
    const response = await client.getEntries({
      content_type: 'foodReview',
      'fields.foodType': foodType
    })
    const data = await formatData(response.items)
    setFoods(data)
    setIsLoading(false)
  }

  async function getRecommended(foodType) {
    setIsLoading(true)
    const response = await client.getEntries({
      content_type: 'foodReview',
      'fields.recommended': true
    })
    const data = await formatData(response.items)
    setFoods(data)
    setIsLoading(false)
  }

  

  useEffect(()=> {
    if(foodType === 'recommended') {
      getRecommended(foodType)
    }
    else {
      getFoodTypeData(foodType)
    }
  }, [foodType ])

  if(isLoading || foods===undefined)  {
    return <Loading />
  }


  return (
    <React.Fragment>

      <FoodTypeList foods={foods} title={foodType} />
    
    </React.Fragment>
  )
}

export default FoodType