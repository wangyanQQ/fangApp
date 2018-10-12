import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LoginPages from './LoginPages.js';
import HomePages from './HomePages.js';
import Register  from './Register.js'
import Love from './Love.js';



export default class App extends Component {
  render() {
    return (
    //  登录
    //  <LoginPages/>
    // 首页
     <HomePages/>
    //  注册
    //  <Register/> 
    // 测试
      // <Text/>  
      // 猜你喜欢
      // <Love/> 
    
    )
  }
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)