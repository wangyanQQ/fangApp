import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../assets/styles/lableinput.less';

export default class LableInput extends Component {  
  constructor(props){
    super(props)
    this.state={      
      text:props.text,
      type:props.type,
      placeholder:props.placeholder,
      id:props.id
    }
  }
  static propTypes = {
    text:PropTypes.string,
    type:PropTypes.string,
    placeholder:PropTypes.string,
    id:PropTypes.string,
  }
  static defaultProps={
    type:'text'
  }

  render() {
 
    return (   
        <div className='from-input'>
           <label htmlFor={this.state.id} style={{fontSize:14}}>{this.state.text}: </label><input className='from-input-type' type={this.state.type} id={this.state.id} placeholder={this.state.placeholder} />
        </div>
     
    )
  }
}
