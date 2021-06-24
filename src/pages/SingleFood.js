import React, {useEffect, useState} from 'react'
import {useFoodsContext} from '../context/context'
import {useParams} from 'react-router-dom'
import {client} from '../contentful'
import {Loading, Food} from '../components'

const SingleFood = () => {
  const [food, setFood] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const {slug} = useParams()
  console.log(slug)

  async function getSingleFood(slug) {
    setIsLoading(true)
    let {items} = await client.getEntries({
      content_type: 'foodReview',
      'fields.slug': slug
    })
    setFood(items[0])
    setIsLoading(false)
  }

  console.log(food)

  useEffect(()=> {
    getSingleFood(slug)
  }, [])

  if(isLoading || food===undefined || food.fields === undefined)  {
    return <Loading />
  }

  return (
    <React.Fragment>
      <Food food={food} />
    </React.Fragment>
  )
}

export default SingleFood