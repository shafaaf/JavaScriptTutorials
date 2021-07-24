import {render, screen, waitForElementToBeRemoved} from '@testing-library/react';
import App from './App';
describe('Testing user api calls', () => {

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
