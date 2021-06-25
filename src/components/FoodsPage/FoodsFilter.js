import React from 'react';
import { useFilterContext } from '../../context/filter_context';

const getUniqueValues = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const FoodsFilter = () => {
  const {
    allFoods,
    filterFoods, 
    updateFilters,
    clearFilters,
    filters: {
    restaurantName,
    type,
    foodType,
    minPrice,
    maxPrice,
    price,
    vegan,
  }} = useFilterContext()

  let restaurants = getUniqueValues(allFoods, 'restaurantName')
  restaurants = ['all', ...restaurants]

  let types = getUniqueValues(allFoods, 'type')
  types = ['all', ...types]

  let foodTypes = getUniqueValues(allFoods, 'foodType')
  foodTypes = ['all', ...foodTypes]

  


  return (
    <React.Fragment>
      <div className="Filter">
        <div className="Filter__container container">
          <form className="Form">
          {/* Restaurants name */}
          <div className="Form__group">
            <label htmlFor="restaurantName" className="Form__label">
              Restaurant Name:  
            </label>
              <select
                name="restaurantName"
                id="restaurantName"
                value={restaurantName}
                className="Form__control"
                onChange={updateFilters}
              >
                {restaurants.map((name, index) => {
                  return <option value={name} key={index}>{name}</option>
                })}
              </select>
          </div>
          {/* end ofRestaurants name */}
        {/* Types */}
          <div className="Form__group">
            <label htmlFor="type" className="Form__label">
              Type: 
            </label>
              <select
                name="type"
                id="type"
                value={type}
                className="Form__control"
                onChange={updateFilters}
              >
                {types.map((name, index) => {
                  return <option value={name} key={index}>{name}</option>
                })}
              </select>
          </div>
          {/* end of Types */}
        {/* Food Types*/}
          <div className="Form__group">
            <label htmlFor="foodType" className="Form__label">
              Type of Food: 
            </label>
              <select
                name="foodType"
                id="foodType"
                value={foodType}
                className="Form__control"
                onChange={updateFilters}
              >
                {foodTypes.map((name, index) => {
                  return <option value={name} key={index}>{name}</option>
                })}
              </select>
          </div>
          {/* end of Food Types */}
          {/* price */}
          <div className="Form__group">
            <label htmlFor="price" className="Form__label">Price ${price}</label>
            <input 
              type="range" 
              name='price'
              min={minPrice}
              max={maxPrice}
              id='price'
              value={price}
              className='Form__control'
                onChange={updateFilters}

            />
          </div>
          {/* end of price */}
          {/* Vegan */}
          <div className="Form__group">
            <div className="Form__vegan">
              <input 
                type="checkbox" 
                name='vegan'
                id='vegan'
                checked={vegan}
                onChange={updateFilters}
                
              />
              <label htmlFor="vegan" className="Form__label">Vegan</label>
            </div>
          </div>
          {/* end of vegan */}

          <div className="Form__group">
            <button className="Clear__filter" onClick={clearFilters}>
              Clear Filter
            </button>
          </div>

          </form>
        </div>
        {filterFoods.length === 0 ? 
          (<h5 style={{textTransform: 'uppercase',
            textAlign: 'center', fontSize: '5rem', marginTop: '4rem', color: 'red'
        }}>No match</h5>) : null}
      </div>
    </React.Fragment>
  );
};

export default FoodsFilter;
