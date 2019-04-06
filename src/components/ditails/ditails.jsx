import React from "react";
import "./ditails.css";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import {
    URL_DETAIL,
    API_KEY,
    LANG_EN,
    URL_IMG,
    IMG_SIZE_LARGE
} from "../../const.js";
import {
    Grid,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from "@material-ui/core";
import Recommendation from "../recommendation";
import Video from '../video'
// import Button from "../button";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import SwapiService from "../../services";

const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#faf9fc"
      },
      secondary: {
        main: "#202833"
      },
    }
  });

export default class Ditails extends React.Component {

    swapi = new SwapiService();
    state = {
        movie: [],
        id: 299,
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
        this.dataMovie(this.data);
    }

    data = id => {
        return this.swapi.getDitails(id);
    };

    dataMovie = func => {
        const id = this.state.id;
        if (id) {
            return func(id)
                .then(data => {
                    this.setState({
                        movie: data,
                        loading: false
                    });
                })
                .catch(this.onError);
        }
    };

    render() {
        const { movie } = this.state;
        // console.log(movie);

        this.Pro =
            movie.production_companies &&
            movie.production_companies.map(pc => (
                <div key={pc.id} className="pro">
                    {pc.logo_path && (
                        <img
                            alt="logo"
                            src={URL_IMG + IMG_SIZE_LARGE + pc.logo_path}
                            className="pro-img"
                        />
                    )}
                    <Typography color="primary">{pc.name}</Typography>
                    <Typography color="primary">{pc.origin_country}</Typography>
                </div>
            ));

        this.Genres =
            movie.genres &&
            movie.genres.map(genre => (
                <div key={genre.id}>
                    <Typography color="primary" variant={"subtitle1"}>
                        {genre.name + ","}&nbsp;
                    </Typography>
                </div>
            ));

        return (
            <MuiThemeProvider theme={theme}>
            <Grid container justify="center" >
                <div className="detail">
                    <Typography color="primary" variant={"h2"} className="fw-900">
                        {movie.title}
                    </Typography>
                    <div className="detail-genres" color="secondary">
                        <Typography color="primary" variant={"subtitle1"} className="fw-600">
                            {" "}
                            Genres:&nbsp; &nbsp;{" "}
                        </Typography>
                        {this.Genres}
                    </div>
                    <div>
                        <img
                            alt="poster"
                            src={URL_IMG + IMG_SIZE_LARGE + movie.poster_path}
                            className="detail-poster-img"
                        />
                        <img
                            alt="poster"
                            src={URL_IMG + IMG_SIZE_LARGE + movie.backdrop_path}
                            className="detail-img"
                        />
                    </div>
                    <Grid container>
                        <Typography
                        color="primary"
                            variant={"subtitle1"}
                            className="fw-600 detail-video">
                            Videos
                        </Typography>
                        <Video id={this.state.id}/>
                    </Grid>
                    <Typography color="primary" variant={"subtitle1"} className="detail-overview">
                        <Typography color="primary" variant={"subtitle1"} className="fw-600 ">
                            Overview
                        </Typography>
                        {movie.overview}
                    </Typography>
                    <div className="detail-big-content">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <Typography color="primary"
                                            variant={"subtitle1"}
                                            className="fw-600">
                                            Budget
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                        color="primary"
                                            variant={"subtitle1"}
                                            className="fw-600">
                                            Popularity
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                        color="primary"
                                            variant={"subtitle1"}
                                            className="fw-600">
                                            Release date
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                        color="primary"
                                            variant={"subtitle1"}
                                            className="fw-600">
                                            Vote average
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                        color="primary"
                                            variant={"subtitle1"}
                                            className="fw-600">
                                            Vote count
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                        color="primary"
                                            variant={"subtitle1"}
                                            className="fw-600">
                                            Runtime
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <Typography color="primary" variant={"subtitle1"}>
                                            {movie.budget + "$"}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography color="primary" variant={"subtitle1"}>
                                            {movie.popularity}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography color="primary" variant={"subtitle1"}>
                                            {movie.release_date}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography color="primary" variant={"subtitle1"}>
                                            {movie.vote_average}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography color="primary" variant={"subtitle1"}>
                                            {movie.vote_count}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography color="primary" variant={"subtitle1"}>
                                            {movie.runtime + "min"}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <div className="detail-min-content">
                        <Typography color="primary" variant={"subtitle1"} className="fw-600">
                            {"Budget: " + movie.budget + "$"}
                        </Typography>
                        <Typography color="primary" variant={"subtitle1"} className="fw-600">
                            {"Popularity: " + movie.popularity}
                        </Typography>
                        <Typography color="primary" variant={"subtitle1"} className="fw-600">
                            {"Release date: " + movie.release_date}
                        </Typography>
                        <Typography color="primary" variant={"subtitle1"} className="fw-600">
                            {"Release date: " + movie.vote_average}
                        </Typography>
                        <Typography color="primary" variant={"subtitle1"} className="fw-600">
                            {"Vote count: " + movie.vote_count}
                        </Typography>
                        <Typography color="primary" variant={"subtitle1"} className="fw-600">
                            {"Runtime: " + movie.runtime + "min"}
                        </Typography>
                    </div>
                    &nbsp;
                    {movie.homepage && (
                        <Typography color="primary" variant={"subtitle1"}>
                            {"Official homepage:"}
                            <a href={movie.homepage}>{movie.homepage}</a>
                        </Typography>
                    )}
                    <div className="detail-row">
                        <Typography color="primary" variant={"subtitle1"} className="fw-600 company">
                            Company
                        </Typography>
                        {this.Pro}
                    </div>
                    <Grid container className="detail-rec">
                        <Typography color="primary" variant={"subtitle1"} className="fw-600 ">
                            Recommendation
                        </Typography>
                        <Recommendation id={this.state.id} {...this.props}/>
                    </Grid>
                </div>
            </Grid>
            </MuiThemeProvider>
        );
    }
}
