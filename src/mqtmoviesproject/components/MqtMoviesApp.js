import React from 'react';
import '../css/mqtmoviesprojectcss.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Movies from './movies/Movies';
import { createStore } from 'redux';
import allReducers from '../redux/reducers/index';
import { Provider } from 'react-redux';
import Search from './search/Search';
import MovieDetails from './moviedetails/MovieDetails';

function MqtMoviesApp(){
    let store = createStore(allReducers);


    return(
        <Provider store={store}>
        <Router>
        <div>
            <Header />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/movies/popular'>
                    <Movies
                        pagename = "Popular Movies"
                        category = "popular"
                    />
                </Route>
                <Route path='/movies/now-playing'>
                    <Movies
                        pagename = "Now Playing Movies"
                        category = "now_playing"
                    />
                </Route>
                <Route path='/movies/upcoming'>
                    <Movies
                        pagename = "Upcoming Movies"
                        category = "upcoming"
                    />
                </Route>
                <Route path='/movies/top-rated'>
                    <Movies
                        pagename = "Top Rated Movies"
                        category = "top_rated"
                    />
                </Route>
                <Route path='/search'>
                   <Search />
                </Route>
                <Route path='/movie/:id' component={MovieDetails} />
            </Switch>
            <Footer />
        </div>
        </Router>
        </Provider>
    )
}

export default MqtMoviesApp;