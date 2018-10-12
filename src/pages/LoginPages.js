import React, { Component } from 'react';
import FormInput from '../components/FormInput.js';
import Formbutton from '../components/Formbutton.js';
import '../assets/styles/loginpages.less';
// 引入图片
import Img from '../assets/images/logo.png'

export default class LoginPages extends Component {
  render() {
    return (
      <div className='login-container'>
        {/* logo图片 */}
        <img src={Img} className='login-img' alt='logo图片' />
        {/* form表单 */}
        <form className='login-form'>
       <FormInput icon='tel'/>
       <FormInput icon='suo' type='password'/>
       <Formbutton block>登&emsp;录</Formbutton>
       <Formbutton type='plain'>忘记密码？</Formbutton>
       <Formbutton>免费注册</Formbutton>&emsp;
       <Formbutton>游客登录</Formbutton>
        </form>
      </div>
    )
  }
}
