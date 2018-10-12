import React, { Component } from 'react'
import { Grid } from 'antd-mobile';
import '../assets/styles/grid.less';
// 引入图片
import nav1 from '../assets/images/nav_1.jpg';
import nav2 from '../assets/images/nav_2.jpg';
import nav3 from '../assets/images/nav_3.jpg';
import nav4 from '../assets/images/nav_4.jpg';
import nav5 from '../assets/images/nav_5.jpg';
import nav6 from '../assets/images/nav_6.jpg';
import nav7 from '../assets/images/nav_7.jpg';
import nav8 from '../assets/images/nav_8.jpg';
// 定义数组
let dataList = [
    { src: nav1, text: '新房' },
    { src: nav2, text: '二手房'},
    { src: nav3, text: '租房'},
    { src: nav4, text: '商铺写字楼'},
    { src: nav5, text: '卖方' },
    { src: nav6, text: '海外地产'},
    { src: nav7, text: '小区房价'},
    { src: nav8, text: '问答'},
]

// 循环遍历数组
const data = dataList.map(val => ({
  icon:val.src,
  text:val.text
}));
const GridExample = () => (
    
  <div> 
      {/* 渲染 */}
   <Grid data={data} hasLine={false} activeStyle={false}/>
  </div>
);
// 导出
export default GridExample;
