import React from "react";
import "./recommendation.css";
import {
    Typography,
    Grid,
    Card,
    CardActionArea,
    CardMedia
} from "@material-ui/core";
import { URL_IMG, IMG_SIZE_LARGE } from "../../const";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";

export default class Recommendation extends React.Component {
    //regExp = /^\/\D*\/\d\/\D+/regExp
    regExp = /^\/\S*[^0-9]/;
    state = {
        recommendations: [],
        id: this.props.id,
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
        this.getRecommendation(this.state.id);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.id !== this.state.id) {
            this.getRecommendation(this.state.id);
        }
    }

    getRecommendation = id => {
        if (id) {
            return this.props.swapi
                .getRecommendation(id)
                .then(data => {
                    this.setState({
                        recommendations: data,
                        loading: false
                    });
                })
                .catch(this.onError);
        }
    };

    goToDetail = id => {
        this.setState({ id: id });
        const url = this.regExp.exec(this.props.match.url)[0];
        this.props.history.push(url + id);
    };

    render() {
        const { recommendations, loading, error } = this.state;
        (() => {
            setTimeout(() => {
                window.scroll(0, 0);
            }, 0);
        })();

        const hasData = !(loading || error);
        if (loading) return <Spinner />;
        if (error) return <ErrorIndicator />;
        this.RecommendationLists =
            hasData &&
            recommendations.map(rec => (
                <Grid
                    key={rec.id}
                    item
                    xs={4}
                    sm={2}
                    md={2}
                    lg={2}
                    className="recommendationCard">
                    <Card className="card">
                        <CardActionArea onClick={() => this.goToDetail(rec.id)}>
                            <CardMedia className="content">
                                <div className="content-overlay" />
                                <img
                                    alt="pic"
                                    src={URL_IMG + IMG_SIZE_LARGE + rec.poster_path}
                                    className="content-image"
                                />
                                <div className="content-details fadeIn-bottom">
                                    <Typography
                                        variant="h6"
                                        className="content-title">
                                        {rec.title}
                                    </Typography>
                                    <Typography
                                        component="p"
                                        className="content-text">
                                        {rec.vote_average}
                                    </Typography>
                                </div>
                            </CardMedia>
                        </CardActionArea>
                    </Card>
                </Grid>
            ));

        return (
            <Grid container spacing={16} className="dashboard">
                {this.RecommendationLists}
            </Grid>
        );
    }
}
