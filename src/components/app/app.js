import React from 'react';
import './app.css';
import { Route, Switch } from 'react-router-dom'
import CartPage from '../pages/cart-page';
import HomePage from '../pages/home-page';
import ShopHeader from '../shop-header/shop-header';
import ShoppingCartTable from '../shopping-cart-table/shopping-cart-table';

const App = () => {
    return (
        <main role='main' className='container'>
            <ShopHeader numItems={5} total={210}/>
            <Switch>
                <Route path="/shop-react-redux" exact component={HomePage} />
                <Route path="/cart" component={CartPage} />
            </Switch>
            <ShoppingCartTable />
        </main>
    )
}

export default App;