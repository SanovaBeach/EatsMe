import React, { useEffect, useContext, useReducer } from "react";
import reducer from '../reducer/filter_reducer'
import {useFoodsContext} from './context'

// actions
import {LOAD_FOODS, FILTER_FOODS, UPDATE_FILTERS} from '../action'

const FilterContext = React.createContext()

const initialState = {
  filterFoods : [],
  allFoods: [],
  filters: {
    restaurantName: 'all',
    type: 'all',
    foodType:'all',
    minPrice: 0,
    maxPrice: 0,
    price: 0,
    vegan: false,
  }
}

export const FilterProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const {foodData} = useFoodsContext()

  useEffect(()=> {
    dispatch({type: LOAD_FOODS, payload: foodData})
  }, [foodData])

  useEffect(()=> {
    dispatch({type: FILTER_FOODS})
  }, [foodData, state.filters])

  const updateFilters = (e) => {
    let name = e.target.name
    let value = e.target.value
    if(name === 'price') {
      value = Number(value)
    }
    if(name === 'vegan') {
      value = e.target.checked
    }
    console.log('name', name)
    console.log('value', value)
     dispatch({type: UPDATE_FILTERS, payload: {name, value}})
  }

  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateFilters
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export const useFilterContext = () => {
  return useContext(FilterContext);
};