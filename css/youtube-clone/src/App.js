import './App.css';

const App = () => {
    const getRandomInt = max => Math.floor(Math.random() * max);

    const categoryCount = 2;
    const categoryArr = [...Array(categoryCount+1).keys()].slice(1);

    const videosPerCategoryCount = 7;
    const videosArr = [...Array(videosPerCategoryCount+1).keys()].slice(1);

    return (
        <div className="videos">
            {categoryArr.map((value, index1) => (
                <section className="video-section">
                    {videosArr.map((value, index2) => (
                        <article className="video-container">
                            <a href="#" className="thumbnail" data-duration="12:24">
                                <img
                                    className="thumbnail-image"
                                    src={`https://picsum.photos/id/${((index1 + 1) * 3) + 40 + index2}/250/150`}
                                    alt="random video image"/>
                            </a>

                            <div className="video-bottom-section">
                                {/*left side - channel's profile image*/}
                                <a href="#">
                                    <img
                                        className="channel-icon"
                                        src={`https://picsum.photos/id/${((index1 +1) * 4) + 60 + index2}/250/150`}
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
            ))}
        </div>
    );
};

export default App;
