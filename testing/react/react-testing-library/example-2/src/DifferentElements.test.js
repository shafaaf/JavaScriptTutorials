import {render, screen} from '@testing-library/react';
import App from './App';

describe('Testing DifferentElements', () => {

    test('render h1 element', () => {
        render(<App/>);
        expect(screen.getByText('Hello World')).toBeInTheDocument();
    });

    test('get span element', () => {
        render(<App/>);
        const el = screen.getByTestId('mySpan');
        console.log(el.innerHTML);
    });

    test('list contains 5 animals', () => {
        render(<App/>);
        const listElements = screen.getAllByRole('list');

        for (let item of listElements) {
            expect(item).toBeInTheDocument();
        }
        expect(listElements[0]).toHaveClass('animals');
        expect(listElements[1]).toHaveClass('pets');

        const listItems = screen.getAllByRole('listitem');
        expect(listItems.length).toEqual(6);
    });
});
