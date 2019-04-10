import React, { Component } from "react";
import "./app.css";
import {createBrowserHistory} from "history";
import jpg from "./cinema-logo.jpg";
import Header from "../header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
    GetPopularMovies,
    GetAllMovies,
    GetKidsMovies
} from "../MovieDB-components";
import ErrorIndicator from "../error-indicator";
import Ditails from "../ditails";
import SwapiService from "../../services";
const history = createBrowserHistory();
export default class App extends Component {

    swapi = new SwapiService();
     wallpaper = {
        'display': 'flex',
        'justify-content': 'center'
     }

    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        const  Scrolldown = () => {
            setTimeout(() => {
             window.scroll(0,0);
            },0); 
        }
        window.onload = Scrolldown();
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }
        return (
            <Router history={history} >
                <div className="app">
                    <Header />
                    <Route
                        path="/"
                        render={() => (
                            <div className="wallpaper" style={this.wallpaper}>
                                <img
                                    className="img-fluid"
                                    src={jpg}
                                    alt="wallpaper: World-People"
                                />
                            </div>
                        )}
                        exact
                    />

                    <Route
                        path="/all/:id?"
                        render={() => <h2 className="caption">All Movies</h2>}
                        exact
                    />
                    <Route path="/all/:id?" exact component={GetAllMovies} />

                    <Route
                        path="/popular/:id?"
                        render={() => <h2 className="caption">Popular</h2>}
                        exact
                    />
                    <Route path="/popular/:id?" exact component={GetPopularMovies} />

                    <Route
                        path="/kids/:id?"
                        render={() => <h2 className="caption">Kids Movies</h2>}
                        exact
                    />
                    <Route path="/kids/:id?" exact component={GetKidsMovies} />

                    <Route path="/all/:id/ditail/:id" render={(props)=><Ditails swapi={this.swapi} {...props}/>} exact />

                    <Route
                        path="/popular/:id/ditail/:id"
                        render={(props)=><Ditails swapi={this.swapi} {...props}/>}
                        exact
                    />
                    <Route path="/kids/:id/ditail/:id" render={(props)=><Ditails swapi={this.swapi} {...props}/>} exact      />

                    

                    


                </div>
            </Router>
        );
    }
}
