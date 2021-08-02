import './App.css';

const App = () => {
    const array1 = [1, 4, 9, 16];

    // return (
    //     <div>
    //     {array1.map((value, index) => (
    //
    //     ))}
    // </div>);


    return (
        <div className="videos">
            <section className="video-section">

                <article className="video-container">
                    <a href="#" className="thumbnail" data-duration="12:24">
                        <img src="https://unsplash.it/250/150?gravity=center" alt="random video image"
                             className="thumbnail-image"/>
                    </a>

                    <div className="video-bottom-section">
                        {/*left side - channel's profile image*/}
                        <a href="#">
                            <img className="channel-icon" src="https://unsplash.it/36/36?gravity=center"
                                 alt="random user image"/>
                        </a>
                        {/*right side - video details*/}
                        <div className="video-details">
                            <a href="#" className="video-title">Video Title</a>
                            <a href="#" className="video-channel-name">Channel Name</a>
                            <div className="video-metadata">
                                <span>12K views • 1 week ago</span>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="video-container">
                    <a href="#" className="thumbnail" data-duration="12:24">
                        <img className="thumbnail-image" src="https://unsplash.it/250/150?gravity=center"
                             alt="random video image"/>
                    </a>

                    <div className="video-bottom-section">
                        {/*left side - user image*/}
                        <a href="#">
                            <img className="channel-icon" src="https://unsplash.it/36/36?gravity=center"
                                 alt="random user image"/>
                        </a>
                        {/*right side - video details*/}
                        <div className="video-details">
                            <a href="#" className="video-title">Video Title</a>
                            <a href="#" className="video-channel-name">Channel Name</a>
                            <div className="video-metadata">
                                <span>12K views • 1 week ago</span>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    )
};

export default App;
