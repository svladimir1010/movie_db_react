import React, { Component } from "react";
import "./video.css";
import VideoLists from "../item-video";
import { Grid } from "@material-ui/core";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
export default class Video extends Component {

    state = {
        videos: [],
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
        this.getVideo(this.state.id);
        console.log(this)
    }

    getVideo = id => {
        const {swapi} = this.props
        if (id) {
            return swapi
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
        const { videos, loading, error } = this.state;
        if (error) return <div className='error-video'><ErrorIndicator /></div>;
        this.videoLists = videos.map(video => <VideoLists video={video} />);

        return <Grid container spacing={16} className="dashboard">
                <div className="video">
                    {loading ? <Spinner /> : this.videoLists}
                </div>
            </Grid>
    }
}
