import React, { Component } from "react";
import "./video.css";
import { Typography, Grid } from "@material-ui/core";
import YoutubePlayer from "react-youtube-player";
import SwapiService from "../../services";

export default class Video extends Component {
    swapi = new SwapiService();
    state = {
        videos: [],
        id: this.props.id,
    };

    componentDidMount() {
        this.getVideo(this.data);
    }

    data = id => {
        return this.swapi.getMoviesVideos(id);
    };

    getVideo = func => {
        const id = this.state.id;
        if (id) {
            return func(id)
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
        const { videos } = this.state;

        this.VideoLists =
            videos &&
            videos.map(video => (
                <Grid key={video.id} item xs={4} sm={2} md={2} lg={2}>
                    <div className="card">
                        <YoutubePlayer
                            videoId={video.key}
                            playbackState="unstarted"
                            configuration={{
                                showinfo: 2,
                                controls: 3
                            }}
                        />
                        <div className="content-details fadeIn-bottom">
                            <Typography variant="h6" className="content-title">
                                {video.name}
                            </Typography>
                        </div>
                    </div>
                </Grid>
            ));

        return (
            <Grid container spacing={16} className="dashboard">
                {this.VideoLists ? this.VideoLists : "Movie has not trailers"}
            </Grid>
        );
    }
}
