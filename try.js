<div className="Filter">
        <div className="Filter__container container">
          <form className="Form">
          {/* Restaurants name */}
          <div className="Form__group">
            <label htmlFor="restaurantName" className="Form__label">
              <select
                name="restaurantName"
                id="restaurantName"
                value={restaurantName}
                className="Form__control"
                onChange={handleChange}
              >
                {restaurants}
              </select>
            </label>
          </div>
          {/* end ofRestaurants name */}
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
              onChange={handleChange}
              className='form-control'
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
                onChange={handleChange}
              />
              <label htmlFor="vegan" className="Form__label">Vegan</label>
            </div>
          </div>
          {/* end of vegan */}


          </form>
        </div>
      </div>