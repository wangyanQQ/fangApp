import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../assets/styles/formbutton.less';

export default class Formbutton extends Component {
  static propTypes = {
    type:PropTypes.oneOf(['plain'])
  }
  render() {
      let btnClz='from-btn'
    //   判断
    if(this.props.block){
        btnClz+= ' block';
    }
    if(!this.props.block&&this.props.type){
        btnClz+=' plain';
    }
    return (
     <button className={btnClz}>{this.props.children}</button>
    )
  }
}
