import React from "react";
import { Typography, Grid } from "@material-ui/core";
import YoutubePlayer from "react-youtube-player";

const VideoLists = ({ video }) => {
    return <Grid key={video.id} item xs={4} sm={2} md={2} lg={2} className="videoCard">
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
};
export default VideoLists;
