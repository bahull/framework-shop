import React from "react";
import {Switch, Route} from 'react-router-dom';

import Landing from "./components/Landing/Landing";
import Shop from "./components/Shop/Shop";
import Details from "./components/Details/Details";
import Cart from "./components/Cart/Cart";
import ThankYou from "./components/ThankYou/ThankYou";



export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/Shop' component={Shop} />
        <Route path='/Details/:name' component={Details} />
        <Route path='/Cart' component={Cart} />
        <Route path='/ThankYou' component={ThankYou} />
        </Switch>
)