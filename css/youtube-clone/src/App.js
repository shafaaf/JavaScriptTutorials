import './App.css';

const App = () => {
    const getRandomInt = max => Math.floor(Math.random() * max);

    const categoryCount = 2;
    const categoryArr = [...Array(categoryCount+1).keys()].slice(1);

    const videosPerCategoryCount = 7;
    const videosArr = [...Array(videosPerCategoryCount+1).keys()].slice(1);

    return (
        <div>
            <div className="categories">
                <section className="category-section">
                    <button className="category active">All</button>
                    <button className="category">Category 1</button>
                    <button className="category">Category 2</button>
                    <button className="category">Category 3</button>
                    <button className="category">Category 4</button>
                    <button className="category">Category 5</button>
                    <button className="category">Category 6</button>
                    <button className="category">Category 7</button>
                    <button className="category">Category 8</button>
                    <button className="category">Category 9</button>

                    <button className="category">Category 10</button>
                    <button className="category">Category 11</button>
                    <button className="category">Category 12</button>
                    <button className="category">Category 13</button>
                    <button className="category">Category 14</button>
                    <button className="category">Category 15</button>
                    <button className="category">Category 16</button>

                </section>
            </div>
            <div className="videos">
                {categoryArr.map((value, index1) => (
                    <section className="video-section">
                        <h2 className="video-section-title">
                            Special Section
                            <button className="video-section-title-close">&times;</button>
                        </h2>
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
        </div>
    );
};

export default App;
