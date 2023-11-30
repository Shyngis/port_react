import React from 'react';
import {BrowserRouter as Router, Routes, Route,Link,Switch} from 'react-router-dom';
import { Header } from '../common/Header';
import { Home } from '../home/Home';
import { About } from './About';
import { Portfolio } from './Portfolio';
import { Services } from './Services';
import { Footer } from '../common/Footer';

export const Pages = () => {
  return (
    <Router>
      <Header />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      
      <Footer />
    </Router>
  )
}
