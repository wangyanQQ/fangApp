import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';
import '../assets/styles/solid.less';
import img1 from '../assets/images/banner1.jpg';
import img2 from '../assets/images/banner2.jpg';

export default class App extends Component {
  state = {
    data: ['1', '2'],
    imgHeight: 176,
   
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data:[img1, img2],
      });
    }, 100);
  }
  render() {
    return (
     
        <Carousel
        // 自动播放
          autoplay={true}
          // 是否循环播放
          infinite
          // 切换面板前的回掉函数
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // 切换面板后的回掉函数
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      
    );
  }
}
