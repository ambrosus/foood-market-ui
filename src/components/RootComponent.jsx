import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import React, {Component} from "react";
import HeaderContainer from "./stateless/HeaderContainer/HeaderContainer";
import PageContainer from "./stateless/PageContainer/PageContainer";
import FilteredMarketPage from "./stateful/FilteredMarketPage/FilteredMarketPage";
import Welcome from "./stateful/Welcome/Welcome.js";
import CreatingMarketContainer from "./stateful/Pages/CreatingMarketPage/CreatingMarketContainer.js";
import OrdersPage from "./stateful/Pages/OrdersPage/OrdersPage";
import ProfilePage from "./stateful/Pages/ProfilePage/ProfilePage";
import CreateOffer from "./stateful/CreateOffer/CreateOffer.js";
import Product from "./stateful/Product/Product.js";
import {Provider} from "react-redux";
import store from "../redux/reducers/index.js";
import ConfirmBuyModal from "./stateless/ConfirmBuyModal/ConfirmBuyModal";

require("./RootComponent.scss");

export default class RootComponent extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <PageContainer>
                        <HeaderContainer/>
                        <Route exact path="/" component={Welcome}/>
                        <Route exact path="/create-market" component={CreatingMarketContainer}/>
                        <Route exact path="/market" component={FilteredMarketPage}/>
                        <Route exact path="/orders" component={OrdersPage}/>
                        <Route exact path="/profile" component={ProfilePage}/>
                        <Route exact path="/product-info" component={Product}/>
                        <Route exact path="/create-offer" component={CreateOffer}/>
                        <Route exact path="/modal" component={ConfirmBuyModal}/>
                    </PageContainer>
                </Router>
            </Provider>)
    }
};