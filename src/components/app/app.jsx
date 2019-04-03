import React, { Component } from "react";
import "./app.css";
import png from './837671.jpg'
import Header from "../header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
    GetPopularMovies,
    GetAllMovies,
    GetKidsMovies
} from "../MovieDB-components";

import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services";
import { SwapiServiceProvider } from "../swapi-service-context";

export default class App extends Component {
    swapiService = new SwapiService();
    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }
        return (
            <Router>
                <div className="app">
                    <SwapiServiceProvider value={this.swapiService}>
                        <Header />

                        <Route path="/" 
                               render={()=><div className="wallpaper"><img className="img-fluid" src={png} alt='wallpaper: World-People'/></div>} 
                               exact
                         />

                         <Route path="/all" 
                               render={()=> <h2 className='caption'>All Movies</h2> } 
                               exact
                         />
                        <Route path="/all" component={GetAllMovies} />

                        <Route path="/popular" 
                               render={()=> <h2 className='caption'>Popular</h2> } 
                               exact
                         />
                        <Route path="/popular" component={GetPopularMovies} />
                        
                        <Route path="/kids" 
                               render={()=> <h2 className='caption'>Kids Movies</h2> } 
                               exact
                         />
                        <Route path="/kids" component={GetKidsMovies} />
                        
                    </SwapiServiceProvider>
                </div>
            </Router>
        );
    }
}
