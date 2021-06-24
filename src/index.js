import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { FoodsProvider } from './context/context';
import { FilterProvider } from './context/filter_context';
import './_main.scss';

ReactDOM.render(
  <React.StrictMode>
    <FoodsProvider>
      <FilterProvider>
        <Router>
          <App />
        </Router>
      </FilterProvider>
    </FoodsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
