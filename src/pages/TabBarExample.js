// 引入主模块
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TabBar } from 'antd-mobile';
import '../assets/styles/tabbar.less'
// 引入组件
import HomePages from './HomePages.js';
import Love from './Love.js';
import My from './My.js';
import SmallTalk from './SmallTalk.js';
// 定义类 export default
export default class TabBarExample extends React.Component {
    // 构造器
  constructor(props) {
    super(props);
    // 定义静态属性
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: true,
    };
  }
  render() {     
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: '400px' }}>
        {/* 第一列 */}
        <TabBar
        // 未选中的字体颜色
          unselectedTintColor="#949494"
        //   选中的字体颜色
          tintColor="#33A3F4"
        //   tabbar背景色
          barTintColor="#ccc"
        //   是否隐藏
          hidden={this.state.hidden}
        >
        {/* 底部导航内容 */}
          <TabBar.Item
        //   标题文字
            title="首页"
            // 唯一标识
            key="首页"
            // 默认展示图片
            icon={<div style={{
                width: '30px',
                height: '30px',
              fontSize:'35px',
            //   background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
            
        }
        }
         className='iconfont icon-fangzi'
        
            />
            }
            // 选中后的展示图片
            selectedIcon={<div style={{
                width: '30px',
                height: '30px',
              fontSize:'35px',
            //   background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
             }}
              className='iconfont icon-fangzi'
            />
            }
            // 是否选中
            selected={this.state.selectedTab === 'blueTab'}
            // 徽标数
            // badge={1}
            // bar 点击触发，需要自己改变组件 state & selecte={true}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId1"
          >
          {/* 要渲染的数据 */}
            {/* {this.renderContent('Life')} */}
            <HomePages/>
          </TabBar.Item>
          {/* 第二列 */}
          <TabBar.Item
            icon={
              <div style={{
                width: '30px',
                height: '30px',
                fontSize:'30px',
                // background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
             }}
             className='iconfont icon-xiaoxi'
              />
            }
            selectedIcon={
              <div style={{
                width: '30px',
              height: '30px',
              fontSize:'30px',
                // background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
             }}
             className='iconfont icon-xiaoxi'
              />
            }
            title="微聊"
            key="微聊"
            // badge={'new'}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            // data-seed="logId1"
          >
            {/* {this.renderContent('Koubei')} */}
            <SmallTalk/>
          </TabBar.Item>
          {/* 第三列 */}
          <TabBar.Item
            icon={
              <div style={{
                width: '30px',
              height: '30px',
              fontSize:'30px',
                // background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
             }}
             className='iconfont icon-xingxing'
              />
            }
            selectedIcon={
              <div style={{
                width: '30px',
                height: '30px',
                fontSize:'30px',
                // background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
             }}
             className='iconfont icon-xingxing'
              />
            }
            title="推荐"
            key="推荐"
            // dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            {/* {this.renderContent('Friend')} */}
            <Love/>
          </TabBar.Item>       
          {/* 第四列 */}
             <TabBar.Item
            icon={
              <div style={{
                width: '30px',
              height: '30px',
              fontSize:'27px',
                // background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
             }}
             className='iconfont icon-icontouxiang'
              />
            }
            selectedIcon={
              <div style={{
                width: '30px',
                height: '30px',
                fontSize:'27px',
                // background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
             }}
             className='iconfont icon-icontouxiang'
              />
            }
            title="我的"
            key="我的"
            // dot
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            {/* {this.renderContent('my')} */}
            <My/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

