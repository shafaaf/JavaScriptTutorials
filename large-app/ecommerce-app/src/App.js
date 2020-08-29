import React from 'react';
import data from './data';
import Products from "./ components/Products";
import Filter from "./ components/Filter";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products: data.products,
            // user selected
            size: "",
            sort: ""
        };
        console.log("products is: ", this.state.products);
    }

    sortProducts = e => {
        const sortBy = e.target.value;
        console.log("calling sortProducts: ", sortBy);
    };

    filterProductsBySize = e => { // filter by size
        const size = e.target.value;
        console.log("calling filterProducts: ", size);

        if (size === "ALL") { // show all products
            console.log("All selected");
            this.setState({
                products: data.products
            });
        } else { // filter by some size
            this.setState({
                size: size,
                products: data.products.filter(product =>
                    product.availableSizes.indexOf(size) >= 0
                )
            });
        }
    };

    render() {
        return (
            <div className="App">
                <div className="grid-container">
                    <header>
                        <a href="/">React Shopping Cart</a>
                    </header>
                    <main>
                        <div className="content">
                            <div className="main">
                                <Filter
                                    count = {this.state.products.length}
                                    size = {this.state.size}
                                    sort = {this.state.sort}
                                    filterProductsBySize = {this.filterProductsBySize}
                                    sortProducts = {this.sortProducts}
                                />
                                <Products products = {this.state.products}/>
                            </div>
                            <div className="sidebar">
                                Cart Items
                            </div>
                        </div>
                    </main>

                    <footer>
                        All rights reserved.
                    </footer>

                </div>
            </div>
        );
    }
}

export default App;
