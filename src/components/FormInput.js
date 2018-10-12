import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/forminput.less';

export default class FormInput extends Component {
    static propTypes = {
        icon : PropTypes.string,
        type : PropTypes.string,        
      }
    static defaultProps={
      type:'text'
    }
  render() {    
     const iClz='from-icon iconfont icon-'+this.props.icon
    return (
      <div className='from-group'>
        <i className={iClz}></i>
        <input className='from-input' type={this.props.type} placeholder={this.props.placeholder}/>
      </div>
    )
  }
}
