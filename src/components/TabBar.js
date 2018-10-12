// 引入主模块
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TabBar } from 'antd-mobile';
import '../assets/styles/tabbar.less'
// 定义类
class TabBarExample extends React.Component {
    // 构造器
  constructor(props) {
    super(props);
    // 定义静态属性
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: true,
    };
  }
//   渲染内容部分
  renderContent(pageText) {
//     return ( 
    //   <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
    //   1234
        // {/* <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div> */}
        // {/* <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
//           onClick={(e) => {
//             //   preventDefault() 方法阻止元素发生默认的行为
//             e.preventDefault();
//             // 重置状态
//             this.setState({
//               hidden: !this.state.hidden,
//             });
//           }}
//         >
//           Click to show/hide tab-bar
//         </a> */}
//         {/* <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
//           onClick={(e) => {
//             e.preventDefault();
//             this.setState({
//               fullScreen: !this.state.fullScreen,
//             });
//           }}
//         >
//           Click to switch fullscreen
//         </a> */}
//       </div>
//     ); 
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
            title="Life"
            // 唯一标识
            key="Life"
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
            data-seed="logId"
          >
            {this.renderContent('Life')}
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
             className='iconfont icon-lianxirenmingdan'
              />
            }
            selectedIcon={
              <div style={{
                width: '30px',
              height: '30px',
              fontSize:'30px',
                // background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
             }}
             className='iconfont icon-lianxirenmingdan'
              />
            }
            title="Koubei"
            key="Koubei"
            // badge={'new'}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            {this.renderContent('Koubei')}
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
            title="Friend"
            key="Friend"
            // dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            {this.renderContent('Friend')}
          </TabBar.Item>
         {/*  <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="My"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            {this.renderContent('My')}
          </TabBar.Item> */}
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
            title="my"
            key="my"
            // dot
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            {/* {this.renderContent('my')} */}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

ReactDOM.render(<TabBarExample />,  document.getElementById('root'));