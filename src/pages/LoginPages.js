import React, { Component } from 'react';
import FormInput from '../components/FormInput.js';
import Formbutton from '../components/Formbutton.js';
// import Mock from './mock'
import '../assets/styles/loginpages.less';
// 引入图片
import Img from '../assets/images/logo.png';
import axios from 'axios';

export default class LoginPages extends Component {
  // 定义构造器
  constructor(props){
    super(props)
    this.state={
      username:'',
      password:''
    }
    // 绑定this
    this.handleChange = this.handleChange.bind(this);
    this.doLogin = this.doLogin.bind(this);
    this.handleRegister=this.handleRegister.bind(this)
  }
  handleChange(e,value){
    // console.log(e)    
    this.setState({
      [value]:e.target.value
    })
  }
  doLogin(){
    console.log('username :',this.state.username);
    console.log('password :',this.state.password);  
    const {username, password} = this.state;
    let _this = this; 
    axios    
    .get(`/success.json`)
  
    .then((response)=>{ 
      console.log('response :', response);
      const data = response.data;
      if(data.success){
        alert(data.message);
        
        _this.props.router.push('/TabBarExample'); //完成了登录跳转
      }
    })
    .catch((error)=>{
      console.log('error :', error);
    })   
    }
    handleRegister(){
      let _this = this;      
      // console.log(_this)
      _this.props.router.push('/Register')
    }

  render() {
    return (
      <div className='login-container'>
        {/* logo图片 */}
        <img src={Img} className='login-img' alt='logo图片' />
        {/* form表单 */}
        <form className='login-form'>
       <FormInput icon='tel' val={this.state.username} onChange={(e)=>{this.handleChange(e,'username')}}/>
       <FormInput icon='suo' type='password' val={this.state.password} onChange={(e)=>{this.handleChange(e,'password')}}/>
       <Formbutton block onClick={this.doLogin}>登&emsp;录</Formbutton>
       <Formbutton type='plain'>忘记密码？</Formbutton>
       <Formbutton onClick={this.handleRegister}>免费注册</Formbutton>&emsp;
       <Formbutton>游客登录</Formbutton>
        </form>
      </div>
    )
  }
}
