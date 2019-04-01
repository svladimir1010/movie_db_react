import React from "react";
import "./card-movie.css";
import {
    Typography,
    Grid,
    Card,
    CardActionArea,
    CardMedia
} from "@material-ui/core";
import { URL_LIST, API_KEY, URL_IMG, IMG_SIZE_LARGE, LANG_EN } from "../../const";

const CardMovie = ({dataMovie}) => {
    const movie  = dataMovie
    return (
        <Grid key={movie.id} item xs={6} sm={4} md={4} lg={3}>
            <Card className="card">
                <CardActionArea onClick={() => this.goToDetail(movie.id)}>
                    <CardMedia src="blob" className="content">
                        <div className="content-overlay" />

                        <img
                            src={URL_IMG + IMG_SIZE_LARGE + movie.poster_path}
                            className="content-image"
                            alt="Here the pictur"
                        />

                        <div className="content-details fadeIn-bottom">
                            <Typography variant="h6" className="content-title">
                                {movie.title}
                            </Typography>

                            <Typography component="p" className="content-text">
                                {movie.vote_average}
                            </Typography>
                        </div>
                    </CardMedia>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default CardMovie