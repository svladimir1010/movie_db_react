import React, { Component } from "react";
import Header from "../header";

import {
    GetPopularMovies,
    GetAllMovies,
    GetKidsMovies
} from "../MovieDB-components";

import ErrorIndicator from "../error-indicator";

import "./app.css";

export default class App extends Component {

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

                <GetAllMovies />
                <GetPopularMovies />
                <GetKidsMovies />
                
            </div>
        );
    }
}
