 import React, { Component } from 'react';
 import FormInput from '../components/FormInput.js';
 import Solid from '../components/Solid.js';
 import FlexList from '../components/FlexList.js';
 import Demo from '../components/Demo';
//  import ButtomNav from '../components/ButtomNav.js';
 import GridExample from '../components/Grid.js';
 import '../assets/styles/homepage.less';
export default class HomePages extends Component {  
  render() {
    return (
      <div className='homepage-container'>
       
        {/* top导航 */}
            <div className='homepage-top'>
                <select className='homepage-top-nav'>
                    <option value="1">成都</option> 
                    <option value="2">南充</option> 
                    <option value="3">达州</option> 
                </select>
                <div className='homepage-top-input'>
                    <i className='iconfont icon-sousuo homepage-top-input-icon'></i>
                    <input className='homepage-top-input-search' type='text' placeholder='搜好房，上源码搜房App'/>
                </div>
                <div className='homepage-top-map'>
                    <i className='iconfont icon-ditu homepage-top-map-icon'></i>
                    <span>地图</span>
                </div>
            </div>
            {/* 轮播图 */}
            <Solid/>
            {/* 特色 */}
            <GridExample/>
          
            {/* 推荐 */}
            <FlexList/>
           
            {/* 猜你喜欢 */}
            <div className='list'>                           
                <Demo/>               
            </div>
            {/* 底部导航 */}
            {/* <ButtomNav/> */}
        </div>
     
    )
  }
}


