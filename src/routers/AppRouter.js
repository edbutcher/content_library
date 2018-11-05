import React from 'react';
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";

import HomePage from '../components/HomePage';
import ContactPage from '../components/ContactPage';
import MediaPage from '../components/MediaPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/media" component={MediaPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;