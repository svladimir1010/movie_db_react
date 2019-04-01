import React, { Component } from "react";
import Header from "../header";
import PopularMoviesList from "../popular-movie-list";
// import Spinner from '../spinner'
import SwapiService from "../../services";

import ErrorIndicator from "../error-indicator";

import "./app.css";

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
            <div className="app">
                <Header />

                <PopularMoviesList getData={this.swapiService.getPopularMovies} />
                {/* <Spinner /> */}
            </div>
        );
    }
}
