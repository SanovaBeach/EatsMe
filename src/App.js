import React from 'react';
import {Route, Switch} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
// components
import { Navbar, Footer, About} from './components'
// pages
import Home from './pages/Home'
import Foods from './pages/Foods'
import SingleFood from './pages/SingleFood'
import FoodType from './pages/FoodType'


function App() {

  return (
    <React.Fragment>
    <ScrollToTop />
    <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/foods/' component={Foods} />
          <Route exact path='/foods/:slug' component={SingleFood} />
          <Route exact path='/foods/type/:foodType' component={FoodType} />
          <Route exact path='/about/' component={About} />
        </Switch>
    <Footer />
    </React.Fragment>
  );
}

export default App;
