import {LOAD_FOODS, FILTER_FOODS, UPDATE_FILTERS, CLEAR_FILTERS} from '../action'

const filter_reducer = (state, action) => {
  if(action.type === LOAD_FOODS) {
    let maxPrice = action.payload.map((p) => p.price)
    maxPrice = Math.max(...maxPrice)

    return {
      ...state,
      filterFoods: [...action.payload],
      allFoods: [...action.payload],
      filters: {...state.filters, maxPrice: maxPrice, price: maxPrice}
    }
  }
  if(action.type === UPDATE_FILTERS) {
    const {name, value} = action.payload
    return {...state, filters: {...state.filters, [name]: value} }
  }

  if(action.type === FILTER_FOODS) {
    const {allFoods} = state
    const {restaurantName, type, foodType, price, vegan} = state.filters
    let tempFoods = [...allFoods]
    

    if(restaurantName !== 'all') {
      tempFoods = tempFoods.filter((food) => food.restaurantName === restaurantName)
    }
    if(type !== 'all') {
      tempFoods = tempFoods.filter((food) => food.type === type)
    }
    if(foodType !== 'all') {
      tempFoods = tempFoods.filter((food) => food.foodType === foodType)
    }
    if(vegan) {
      tempFoods = tempFoods.filter((item)=> item.vegan === true)
      
    }
    tempFoods = tempFoods.filter((food) => food.price <= price)

     return {...state, filterFoods: tempFoods}
  }

  if(action.type === CLEAR_FILTERS) {
    return {
      ...state,

      filters: {
        ...state.filters,
        restaurantName: 'all',
        type: 'all',
        foodType:'all',
        minPrice: 0,
        maxPrice: 0,
        price: state.filters.maxPrice,
        vegan: false,
      }
    }

  }
}

export default filter_reducer