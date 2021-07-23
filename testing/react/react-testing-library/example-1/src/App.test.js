import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

describe('tests', () => {

  test('renders learn react h1 text', () => {
    render(<App/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('try screen debug option', () => {
    render(<App/>);
    screen.debug();
  });

  test("theme button toggle", () => {
    render(<App/>);
    const buttonEl = screen.getByText(/Current theme/i);

    expect(buttonEl).toHaveTextContent(/light/i);
    userEvent.click(buttonEl);
    expect(buttonEl).toHaveTextContent(/dark/i);
  });

});
