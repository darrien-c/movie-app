import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideToggle from '../components/sideToggle/sideToggle';
import Backdrop from '../components/sideToggle/Backdrop';



//Filters
import NowPlaying from '../components/filters/NowPlaying';
import TopRated from '../components/filters/TopRated';
import Upcoming from '../components/filters/Upcoming';

// Pages
import About from '../components/About';
import Home from '../components/Home';
import Favourites from '../components/Favourites';
import PageNotFound from '../components/PageNotFound';
import Movie from '../components/sections/Movie';




class AppRouter extends React.Component {

   state = {
        sideToggleOpen: false,   
    }

    //Opens side navigaion
    sideToggleClickHandler = () => {
        this.setState( (prevState) => { 
            return { sideToggleOpen: !prevState.sideToggleOpen};
        });
    };

    //Closes side navigaion  by clicking the background
    backdropClickHandler = () => {
        this.setState({sideToggleOpen: false});
    }
 
    render() {
        let sideToggle;
        let backdrop;
        let navlinks;

        if( this.state.sideToggleOpen) {
            backdrop   = <Backdrop click={this.backdropClickHandler}/>;
            navlinks  = <SideToggle click={this.backdropClickHandler}/>;
        };
   
        return (
            <Router>
                <div className="wrapper">
                    <Header sideToggleClickHandler={this.sideToggleClickHandler}/>
                    
                    <SideToggle show={this.state.sideToggleOpen} 
                                click={this.backdropClickHandler} />
                    {backdrop}
                    
                    <Switch>
                        <Route path="/" exact><Home /></Route>
                        <Route path="/about" exact><About /></Route>
                        <Route path="/favourites" exact><Favourites /></Route>
                        <Route path="/nowplaying" exact component={NowPlaying} />
                        <Route path="/toprated" exact component={TopRated} />
                        <Route path="/upcoming" exact component={Upcoming} />
                        <Route path="/movie/:movieId" exact component={Movie} />
                        <Route path="/movie/:movieId" exact component={Favourites} />
                        <Route><PageNotFound /></Route>
                    </Switch>
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default AppRouter;
