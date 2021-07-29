import React, { useState, useEffect } from 'react';

const App = () => {
    const SNIPPETS = [
        'Bears, beets, battlestar galactica',
        "What's Forrest Gump's password? 1Forrest1",
        'Where do programmers like to hangout? The Foo Bar'
    ];

    const INITIAL_GAME_STATE = { victory: false, startTime: null, endTime: null };
    const [snippet, setSnippet] = useState('');
    const [userText, setUserText] = useState('');
    const [gameState, setGameState] = useState(INITIAL_GAME_STATE);

    useEffect(() => {
        console.log("useEffect!");
        if (gameState.victory) {
            document.title = 'Victory!';
        } else {
            document.title = 'Playing!';
        }
    });

    const chooseSnippet = snippetIndex => () => {
        setSnippet(SNIPPETS[snippetIndex]);
        setGameState({ ...gameState, victory: false, startTime: new Date().getTime(), endTime: null});
        setUserText('');
    };

    const updateUserText = event => {
        setUserText(event.target.value);
        if (event.target.value === snippet) {
            setGameState({
                ...gameState,
                victory: true,
                endTime: new Date().getTime()
            });
        }
    };

    const millisToMinutesAndSeconds = (startTime, endTime) => {
        const millis = endTime - startTime;
        const minutes = Math.floor(millis / 60000);
        const seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + "mins, " + (seconds < 10 ? '0' : '') + seconds;
    };

    return (
        <div>
            <h2>Type Race</h2>
            <hr />
            <h3>Snippet</h3>
            {snippet}
            <h4>{gameState.victory ? `Done! 🎉 Time: 
            ${millisToMinutesAndSeconds(gameState.startTime, gameState.endTime)}s` : null}</h4>

            <input value={userText} onChange={updateUserText} />
            <hr />
            {
                SNIPPETS.map((SNIPPET, index) => (
                    <button key={index} onClick={chooseSnippet(index)}>
                        {SNIPPET.substring(0, 10)}...
                    </button>
                ))
            }
        </div>
    )
};

export default App;
