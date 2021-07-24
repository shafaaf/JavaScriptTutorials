import {getByText, render, screen, waitForElementToBeRemoved} from '@testing-library/react';
import App from './App';
describe('Testing App Component', () => {

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

  test('loading text is shown while API request is in progress', async () => {
    render(<App/>);
    const loading = screen.getByText('Loading...');

    expect(loading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
  });

  test("user's name is rendered", async () => {
    window.fetch = jest.fn(() => {
      const user = { name: 'Jack', email: 'myEmail@email.com' };
      return Promise.resolve({
        json: () => Promise.resolve(user),
      });
    });

    render(<App />);
    const userName = await screen.findByText('Jack', {exact: false});
    expect(userName).toBeInTheDocument();
  });

  test('error message is shown', async () => {
    window.fetch = jest.fn(() => {
      return Promise.reject({message: 'API is down'});
    });

    render(<App/>);

    const errorMessage = await screen.findByText('API is down');
    expect(errorMessage).toBeInTheDocument();
  });

});
