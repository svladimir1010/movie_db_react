import React, { Component } from "react";
import "./video.css";
import VideoLists from "../item-video";
import { Grid } from "@material-ui/core";
import SwapiService from "../../services";
import Spinner from "../spinner";

export default class Video extends Component {
    swapi = new SwapiService();
    state = {
        videos: [],
        id: this.props.id,
        loading: true
    };

    componentDidMount() {
        this.getVideo(this.state.id);
    }

    getVideo = id => {
        if (id) {
            return this.swapi
                .getMoviesVideos(id)

                .then(data => {
                    this.setState({
                        videos: data,
                        loading: false
                    });
                })
                .catch(this.onError);
        }
    };

    render() {
        const { videos, loading } = this.state;
        this.videoLists = videos.map(video => <VideoLists video={video} />);

        return <Grid container spacing={16} className="dashboard">
                <div className="video">
                    {loading ? <Spinner /> : this.videoLists}
                </div>
            </Grid>
    }
}
