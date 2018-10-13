import { NavBar, Icon } from 'antd-mobile';
import React, { Component } from 'react';

export default class TopNavBar extends Component {  
    render() {
      return (
  <div>
    <NavBar
      mode="light"
      icon={<Icon type="left" />}
      onLeftClick={() =>console.log('123')}
      style={{backgroundColor:'#F8F8F8',fontSize:25,height:60}}
     
    >手机注册</NavBar>  
  </div>)
    }
}
