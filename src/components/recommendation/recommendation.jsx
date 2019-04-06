import React from "react";
import {
    Typography,
    Grid,
    Card,
    CardActionArea,
    CardMedia
} from "@material-ui/core";
import { URL_IMG, IMG_SIZE_LARGE } from "../../const";
import SwapiService from "../../services";

export default class Recommendation extends React.Component {
    swapi = new SwapiService();
    state = {
        recommendations: [],
        id: this.props.id,
        loading: true
    };

    componentDidMount() {
        this.getRecommendation(this.data);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.page !== this.state.page) {
            this.getRecommendation(this.data);
        }
    }

    data = id => {
        return this.swapi.getRecommendation(id);
    };

    getRecommendation = fun => {
        const id = this.state.id;
        if (id) {
            return fun(id)
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
        console.log(id);
        this.props.history.push("/detail/" + id);
    };

    render() {
        const { recommendations } = this.state;

        this.RecommendationLists =
            recommendations &&
            recommendations.map(rec => (
                <Grid key={rec.id} item xs={4} sm={2} md={2} lg={2}>
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
