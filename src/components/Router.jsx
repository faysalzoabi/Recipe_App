import React from 'react'
import App from '../App';
import Recipe from './Recipe';
import {BrowserRouter, Switch, Route} from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path ="/" component={App}/>
            <Route exact path ="/recipe/:id" component={Recipe}/>
        </Switch>
    </BrowserRouter>
  )
}

export default Router