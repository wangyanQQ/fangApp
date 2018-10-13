
import React, { Component } from 'react'
import LableInput from '../components/LableInput.js';
import Formbutton from '../components/Formbutton.js';
import TopNavBar from '../components/TopNavBar'
import '../assets/styles/register.less';

export default class Register extends Component {  

  render() {
    return (
      <div className='Register'>
        {/* 顶部导航 */}      
        <TopNavBar/>
        
        {/* 注册页面 */}   
        <div className='Register-from'>    
            <LableInput text='手机号' placeholder='请输入手机号' id='username'/>
            <LableInput text='验证码'placeholder='请输入验证码' id='VerificationCode' block/>
            {/* 获取验证码 */}
            <buttom className='yanzheng'>获取验证码</buttom>
            <p className='User-knowledge'>
            <input name="Fruit" type="checkbox" value="" />&nbsp;
            <span style={{color:'#D8DCDD'}}>我已同意</span>&emsp;<a style={{color:'#A5DCE6'}}>《用户服务协议》及《隐私权政策》</a>
            </p>
            {/* 登录按钮 */}
           <buttom className='login'>登&emsp;录</buttom>
          </div>
          <p><a style={{color:'#A5DCE6',margin:20}}>已有账号</a></p>
      </div>
    )
  }
}
