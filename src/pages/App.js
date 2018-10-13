import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  Router,
  Route,
  hashHistory
} from 'react-router';

import LoginPages from './LoginPages'
import TabBarExample from './TabBarExample.js'
import Register  from './Register.js'

export default class App extends Component {
  render() {
    return (
      <LoginPages/>
    )
  }
}

// 定义路由
const router = (
                <Router history={hashHistory}>
                     <Route path="/" component={LoginPages}/>
                    <Route path="/TabBarExample" component={TabBarExample}/>                    
                    <Route path="/Register" component={Register}/>
                </Router>
)

ReactDOM.render(router, document.getElementById('root'));

