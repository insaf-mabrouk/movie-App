import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Description from './Description'
import Trailer from './Trailer'
import Home from '../Home'

const RouterApp = ({movie}) => {
    return (
        
        <Switch>
        <Route exact path="/" component ={Home}/>
        <Route exact path='/description/:id' component ={Description}/>
        <Route path= '/trailer' component={Trailer}/>
        </Switch>
        
        
    )
}

export default RouterApp
