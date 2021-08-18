import  './App.css';

const App = () => {
    const titles = [
        "Pick a Template",
        "Make it your own",
        "Share it out"
    ];
    const descriptions = [
        "Choose from a selection of over 300 templates. Perfect for Birthdays, Graduation, Anniversaries and more!",
        "Customize your card by uploading images, videos and writing a personal message!",
        "Send your card out by email or text. You can send your card out immediately or schedule it for the perfect time and date."
    ];
    return (
        <main>
            <h1>Get Started</h1>
            <div className="wrapper"> {/* Will hold the cards */}
                {
                    titles.map((title, i) => (
                        <div key={i} className="container"> {/* each card */}
                            <h2 className="title">{title}</h2>
                            <p className="description">{descriptions[i]}</p>
                        </div>
                    ))
                }
            </div>
        </main>
    );
}

export default App;
