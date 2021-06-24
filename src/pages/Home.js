import React from 'react';
import { useFoodsContext } from '../context/context';
import { MainContent, Loading, Header } from '../components';

const Home = () => {
  const { foodData, recommendedData, veganData, seaFoodData, isLoading } = useFoodsContext();

  if (isLoading || foodData === undefined || veganData === undefined || seaFoodData === undefined) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      <Header />
      <MainContent
        foodData={foodData}
        title="Recently Reviewed"
        size={6}
        isLoading={isLoading}
      />
      <MainContent
        foodData={recommendedData}
        title="Recommended"
        foodType='recommended'
        size={6}
        isLoading={isLoading}
      />
      <MainContent
        foodData={veganData}
        title="Vegan Foods"
        foodType='healthy'
        size={6}
        isLoading={isLoading}
      />
      <MainContent
        foodData={seaFoodData}
        title="Sea Foods"
        foodType='seafood'

        size={6}
        isLoading={isLoading}
      />
    </React.Fragment>
  );
};

export default Home;
