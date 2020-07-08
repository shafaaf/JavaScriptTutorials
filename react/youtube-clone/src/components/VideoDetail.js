import React from 'react';

import { Paper, Typography } from "@material-ui/core";

class VideoDetail extends React.Component {
    render() {
        const {video} = this.props;

        console.log("VideoDetail: video is: ", video);

        if (!video) return <div>No Video...</div>;
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
        console.log("VideoDetail: videoSrc is: ", videoSrc);

        return (
            <React.Fragment>
                <Paper elevation={6} style={{ height: "70%" }}>
                    <iframe
                        frameBorder="0"
                        height="100%"
                        width="100%"
                        title="Video Player"
                        src={videoSrc}
                    />
                </Paper>
                <Paper elevation={6} style={{ padding: "15px" }}>
                    <Typography variant="h4">
                        {video.snippet.title} - {video.snippet.channelTitle}
                    </Typography>
                    <Typography variant="subtitle1">
                        {video.snippet.channelTitle}
                    </Typography>
                    <Typography variant="subtitle2">{video.snippet.description}</Typography>
                </Paper>
            </React.Fragment>
        );
    }
}

export default VideoDetail;
