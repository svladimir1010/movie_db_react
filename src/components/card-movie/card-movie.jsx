import React from "react";
import "./card-movie.css";
import {
    Typography,
    Grid,
    Card,
    CardActionArea,
    CardMedia
} from "@material-ui/core";
import PropTypes from "prop-types";
import { URL_IMG, IMG_SIZE_LARGE } from "../../const";

const CardMovie = props => {
    const { dataMovie, goToDetail } = props;
    return (
        <Grid key={dataMovie.id} item xs={6} sm={4} md={4} lg={3}>
            <Card className="card">
                <CardActionArea onClick={() => goToDetail(dataMovie.id)}>
                    <CardMedia src="blob" className="content">
                        <div className="content-overlay" />

                        <img
                            src={URL_IMG + IMG_SIZE_LARGE + dataMovie.poster_path}
                            className="content-image"
                            alt="Here the pictur"
                        />

                        <div className="content-details fadeIn-bottom">
                            <Typography variant="h6" className="content-title">
                                {dataMovie.title}
                            </Typography>

                            <Typography component="p" className="content-text">
                                {dataMovie.vote_average}
                            </Typography>
                        </div>
                    </CardMedia>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

CardMovie.propTypes = {
    dataMovie: PropTypes.object.isRequired
};

export default CardMovie;
