import React from 'react';
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Products from "./ components/Products";
import Filter from "./ components/Filter";
import Cart from "./ components/Cart";
import AdminScreen from "./Screens/AdminScreen";
import HomeScreen from "./Screens/HomeScreen";

class App extends React.Component {
    render() {
        return (
            <Provider store = {store}>
                <BrowserRouter>
                        <div className="grid-container">
                            <header>
                                <Link to="/">React Shopping Cart</Link>
                                <Link to="/admin">Admin</Link>
                            </header>
                            <main>
                                <Route path="/admin" component={AdminScreen} />
                                <Route path="/" component={HomeScreen} exact />
                            </main>

                            <footer>
                                All rights reserved.
                            </footer>

                        </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
