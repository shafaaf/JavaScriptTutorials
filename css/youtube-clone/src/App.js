import './App.css';

const App = () => {
    const N = 22;
    const videos = [...Array(N+1).keys()].slice(1);


    const M = 2;
    const videosTypes = [...Array(M+1).keys()].slice(1);

    const getRandomInt = max => Math.floor(Math.random() * max);

    return (
        <div className="videos">
            <section className="video-section">
                {videos.map((value, index) => (
                    <article className="video-container">
                        <a href="#" className="thumbnail" data-duration="12:24">
                            <img
                                className="thumbnail-image"
                                src={`https://picsum.photos/id/${20+index}/250/150`}
                                alt="random video image"/>
                        </a>

                        <div className="video-bottom-section">
                            {/*left side - channel's profile image*/}
                            <a href="#">
                                <img
                                    className="channel-icon"
                                    src={`https://picsum.photos/id/${60+index}/250/150`}
                                    alt="random user image"/>
                            </a>
                            {/*right side - video details*/}
                            <div className="video-details">
                                <a href="#" className="video-title">Video Title</a>
                                <a href="#" className="video-channel-name">Channel Name</a>
                                <div className="video-metadata">
                                    <span>{getRandomInt(1000)}K views • {getRandomInt(10)} weeks ago</span>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
};

export default App;
