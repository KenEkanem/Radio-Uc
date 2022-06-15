import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Header from '../component/header';
import Notfound from '../component/notfound';
import Login from './Authentication/login';
import Register from './Authentication/register';
import newPost from './newPost';
import Post from './post';
import Welcome from './welcome';
import Podcast from './podcast';
export default function Layout() {

    
    return (
        <>
        <div>
            <Header/>
        </div>
        <Router>
            <Switch>
                <Route path={'/welcome'} exact component={Welcome}/>
                <Route path={'/'} exact component={Welcome}/>
                <Route path={'/post/:id'} exact component={Post}/>
                <Route path={'/login'} exact component={Login}/>
                <Route path={'/createPost'} exact component={newPost}/>
                <Route path={'/register'} exact component={Register}/>
                <Route path={'/podcast'} exact component={Podcast}/>
                <Route path={'*'} component={Notfound}/>
            </Switch>
        </Router>
        </>
    )
}
