import React from 'react';
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";

import HomePage from '../components/HomePage';
import ContactPage from '../components/ContactPage';
import MediaPage from '../components/MediaPage';
import MediaItem from '../components/MediaItem';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/media" exact component={MediaPage} />
        <Route path="/media/:id" exact component={MediaItem} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default AppRouter;