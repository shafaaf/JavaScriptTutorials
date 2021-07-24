import React from 'react';

const Counter = () => {
    const [counter, setCounter] = React.useState(0);

    const increment = () => {
        setCounter((prevCounter) => ++prevCounter);
    };

    const decrement = () => {
        setCounter((prevCounter) => --prevCounter);
    };

    return (
        <div>
            <h1>Counter:</h1>
            <h2 data-testid="counter">{counter}</h2>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default Counter;
