import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Location from './components/Location';
import Login from './components/Login';
import Payment from './components/Payment';
import Register from './components/Register';




const Routes=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Donate" exact component={Payment}/>
                <Route path="/Login" exact component={Login}/>
                <Route path="/Register" exact component={Register}/>
                <Route path="/Location" exact component={Location}/>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;