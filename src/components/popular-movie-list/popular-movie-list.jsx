import React from "react";
import "./popular-movie-list.css";
import {
    Typography,
    Grid,
    Card,
    CardActionArea,
    CardMedia
} from "@material-ui/core";
import Button from "../button";
// import SwapiService from "../../services";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import { URL_LIST, API_KEY, URL_IMG, IMG_SIZE_LARGE, LANG_EN } from "../../const";

export default class PopularMoviesList extends React.Component {
    // swapi = new SwapiService();

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

    componentDidUpdate(prevProps, prevState) {
        const { getData } = this.props;
        if (prevState.page !== this.state.page) {
            this.listPopular(getData);
        }
    }

    listPopular = data => {
        const page = this.state.page;
        if (!page) {
            return;
        }

        data(page)
            .then(listMovie => {
                this.setState({
                    listMovie: listMovie,
                    loading: false
                });
            })
            .catch(this.onError);
    };



    increment = () => {
        const newPage = this.state.page;
        newPage === 1
            ? this.setState()
            : this.setState({ page: newPage - 1, loading: true });
    };

    decrement = () => {
        const newPage = this.state.page;
        this.setState({ page: newPage + 1, loading: true });
    };

    renderItems(arr) {
        return arr.map(movie => {
            return (
                <Grid key={movie.id} item xs={6} sm={4} md={4} lg={3}>
                    <Card className="card">
                        <CardActionArea onClick={() => this.goToDetail(movie.id)}>
                            <CardMedia src="blob" className="content">
                                <div className="content-overlay" />

                                <img
                                    src={
                                        URL_IMG + IMG_SIZE_LARGE + movie.poster_path
                                    }
                                    className="content-image"
                                    alt="Here the pictur"
                                />

                                <div className="content-details fadeIn-bottom">
                                    <Typography
                                        variant="h6"
                                        className="content-title">
                                        {movie.title}
                                    </Typography>
                                    <Typography
                                        component="p"
                                        className="content-text">
                                        {movie.vote_average}
                                    </Typography>
                                </div>
                            </CardMedia>
                        </CardActionArea>
                    </Card>
                </Grid>
            );
        });
    }

    render() {
        const { listMovie, loading, error } = this.state;

        const hasData = !(loading || error);
        const items = this.renderItems(listMovie);

        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;

        const content = hasData ? (
            <PopularMovies
                items={items}
                decrement={this.decrement}
                increment={this.increment}
            />
        ) : null;

        return (
            <Grid container spacing={24} className="dashboard">
                {errorMessage}
                {spinner}
                {content}
            </Grid>
        );
    }
}

const PopularMovies = ({ decrement, increment, items }) => {
    return (
        <>
            <div className="dashboard-but top">
                <Button decrement={decrement} increment={increment} />
            </div>
            <div className="popular-content">{items}</div>
            <div className="dashboard-but bottom">
                <Button decrement={decrement} increment={increment} />
            </div>
        </>
    );
};
