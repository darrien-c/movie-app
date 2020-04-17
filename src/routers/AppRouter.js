import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

//Components
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

// Pages
import About from '../components/About';
import Home from '../components/Home';
import Favourites from '../components/Favourites';
import Individual from '../components/Individual';
import PageNotFound from '../components/PageNotFound';

const AppRouter = () => (

    <Router>
        <div className="wrapper">
            <Header />
            <Switch>
                <Route path="/" exact><Home /></Route>
                <Route path="/about"><About /></Route>
                <Route path="/individual"><Individual /></Route>
                <Route path="/favourites"><Favourites /></Route>
                <Route><PageNotFound /></Route>
            </Switch>
            <Footer />
        </div>
    </Router>
)

export default AppRouter;
