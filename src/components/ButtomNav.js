import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import '../assets/styles/buttomnav.less';

export default class ButtomNav extends Component {
   static state={    
    }
   /* static propTypes = {
    // prop: PropTypes
  } */

  render() {  

    return ( 
        <div className='buttomnav-box'>           
            <div className='buttomnav-group'>        
                <i className={'iconfont icon-fangzi buttomnav-group-icon1'}></i>
                <p className='buttomnav-group-text'>首页</p>       
            </div>
            <div className='buttomnav-group'>        
                <i className={'iconfont icon-xiaoxi buttomnav-group-icon2'}></i>
                <p className='buttomnav-group-text'>微聊</p>       
            </div>
            <div className='buttomnav-group'>        
                <i className={'iconfont icon-xingxing buttomnav-group-icon3'}></i>
                <p className='buttomnav-group-text'>推荐</p>       
            </div>
            <div className='buttomnav-group'>        
                <i className={'iconfont icon-icontouxiang buttomnav-group-icon4'}></i>
                <p className='buttomnav-group-text'>我的</p>       
            </div>
           
            
      </div> 
    )
  }
}
