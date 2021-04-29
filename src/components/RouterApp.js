import React from 'react'
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom'
import Description from './Description'
import Trailer from './Trailer'
import MovieCard from './MovieCard'
import Home from '../Home'

const RouterApp = ({movie}) => {
    return (
        <Router>
        <Switch>
        <Route exact path="/" component ={Home}/>
        <Route exact path='/description/:id' component ={Description}/>
       
        <Route path= '/trailer' component={Trailer}/>
        </Switch>
        </Router>
        
    )
}

export default RouterApp
