import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Food_collect from './components/food_collect';
import Home from './components/Home';
import Location from './components/Location';
import Login from './components/Login';
import panel_hotel from './components/panel-hotel';
import Payment from './components/Payment';
import Profile from './components/Profile';
import Register from './components/Register';
import Team from './components/Team';
import Track from './components/Track';




const Routes=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Donate" exact component={Payment}/>
                <Route path="/Login" exact component={Login}/>
                <Route path="/Register" exact component={Register}/>
                <Route path="/Location" exact component={Location}/>
                <Route path="/Track" exact component={Track}/>
                <Route path="/Food" exact component={Food_collect}/>
                <Route path="/Hotel_Restaurant_R" exact component={panel_hotel}/>
                <Route path="/Profile" exact component={Profile}/>
                <Route path="/Team" exact component={Team}/>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;