import React from 'react'
import './list-items.css'

import { Grid } from "@material-ui/core";
import Button from "../button";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import CardMovie from "../card-movie";

export default class PopularMoviesList extends React.Component {
    state = {
        listMovie: [],
        page: 1,
        loading: true,
        error: false
    };

    onError = err => {
        this.setState({
            error: true,
            loading: false
        });
    };


    componentDidMount() {
        const { getData } = this.props;
        this.listPopular(getData);
    }


    render() {



        return(
            
        )
        

    }