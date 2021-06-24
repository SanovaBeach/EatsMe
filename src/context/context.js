import React, { useContext, useEffect, useReducer,useState } from 'react';
import reducer from '../reducer/foodReducer'
import {FOOD_DATA, FOOD_DATA_LOADING, SINGLE_FOOD, SINGLE_FOOD_LOADING} from '../action'
import { client } from '../contentful';



const initialState = {
  foodData: [],
  recommendedData: [],
  singleFood: {},
  isLoading: false,
}

const FoodsContext = React.createContext();

export const FoodsProvider = ({ children }) => {
  const [foodData, setFoodData] = useState([])
  const [recommendedData, setRecommendedData] = useState([])
  const [singleFood, setSingleFood] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [veganData, setVeganData] = useState([])
  const [seaFoodData, setSeaFoodData] = useState([])

  async function getData() {
    try {
      setIsLoading(true)
      let response = await client.getEntries({
        content_type: 'foodReview',
      });
      let foods = await formatData(response.items);
      let recommendedData = await foods.filter(
        (food) => food.recommended === true
      );
      let veganData = await foods.filter((food)=> food.vegan === true)
      let seaFoodData = await foods.filter((food)=> food.foodType === 'seafood')
      let maxPrice = Math.max(...foods.map((item)=> item.price))
      setFoodData(foods)
      setRecommendedData(recommendedData)
      setVeganData(veganData)
      setSeaFoodData(seaFoodData)
      setIsLoading(false)
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  

  // format our data through mapping
  async function formatData(items) {
    let tempData =  Promise.all(
      items.map(async (item) => {
        let id =  item.sys.id;
        let data = { ...item.fields, id };
        return data;
      })
    );
    return tempData
  }
  return (
    <FoodsContext.Provider value={{
      foodData,
      veganData,
      isLoading,
      recommendedData,
      seaFoodData,
      formatData
    }}>
      {children}
    </FoodsContext.Provider>
  );
};

export const useFoodsContext = () => {
  return useContext(FoodsContext);
};
