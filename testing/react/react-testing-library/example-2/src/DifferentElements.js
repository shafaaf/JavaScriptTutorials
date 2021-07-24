import React from 'react';

const DifferentElements = () => {
    return (
        <>
            <h1>Hello World</h1>
            <span data-testid="mySpan">this is a span</span>
            <ul className="animals">
                <li>Cat</li>
                <li>Whale</li>
                <li>Lion</li>
                <li>elephant</li>
                <li>Rhino</li>
            </ul>

            <ul className="pets">
                <li>dog</li>
            </ul>
        </>
    );
};

export default DifferentElements;
