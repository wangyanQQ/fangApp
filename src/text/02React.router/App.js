import React, { Component } from 'react'
import {
    Router,
    Route,
    hashHistory,
    IndexRoute,
    IndexRedirect
} from 'react-router';
import ReactDom from 'react-dom'
import About from './About.js';
import Home from './Home.js';
import Deasil from './Deasil.js';


export default class App extends Component {
   
    render() {     
    return (
       <div><h1>顶级组件</h1>
       <ul>
       <li><a href='#/'>顶级组件</a></li>
        <li><a href='#/home'>首页</a></li>
        <li><a  href='#/about'>关于</a></li>
        <li><a  href='#/desail'>详情</a></li>
       </ul>
       {this.props.children}
       </div>
    )
  }
}
// 简单路由配置
const router=(
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/about" component={About}/>
       
        <Route path="/desail" component={Deasil}/>
         <Route path="/home" component={Home}/>
    </Router>
)
// 嵌套路由
const router1=(
    <Router history={hashHistory}>
        <Route path = "/" component = {App}> 
            <Route path = "home" component = {Home}/>  {/* 子路线： parent.path+child.path (相对) */}
            <Route path = "about" component = {About}/>
            <Route path="desail" component={Deasil}/> 
    </Route>
</Router>
)
// 路线参数
const router2=(
    <Router history={hashHistory}>
        <Route path = "/" component = {App}> 
            <Route path = "home" component = {Home}/>  {/* 子路线： parent.path+child.path (相对) */}
            <Route path = "about" component = {About}/>
            <Route path="desail/:userId" component={Deasil}/> 
    </Route>
</Router>
)
// 默认路线路径不变
const router3=(
    <Router history={hashHistory}>
        <Route path = "/" component = {App}> 
            <IndexRoute component = {Home}/>  {/* 子路线： parent.path+child.path (相对) */}
            <Route path = "about" component = {About}/>
            <Route path="desail" component={Deasil}/> 
    </Route>
</Router>
)
// 重定向路线（路线会变）
const router4=(
    <Router history={hashHistory}>
        <Route path = "/" component = {App}> 
            <IndexRedirect to="home"/> 
            <Route path = "home" component = {Home}/>
            <Route path = "about" component = {About}/>
            <Route path="desail" component={Deasil}/> 
    </Route>
</Router>
)
ReactDom.render(
    router4,
    document.querySelector('#root')
)