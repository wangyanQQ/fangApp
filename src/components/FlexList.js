import React, { Component } from 'react';
import { Flex, WhiteSpace } from 'antd-mobile';
import '../assets/styles/flexlist.less';
import logo1 from '../assets/images/logo_1.jpg';
import logo2 from '../assets/images/logo_2.jpg';
import logo3 from '../assets/images/logo_3.jpg';
import logo4 from '../assets/images/logo_4.jpg';



const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>Block</div>
);
let data = [
    { src: logo1, text: '独家优惠',color:'#E51C23' },
    { src: logo2, text: '免费看房',color:'#D8DCDD' },
    { src: logo3, text: '信用贷',color:'#F4E05A' },
    { src: logo4, text: '房市资讯',color:'#4AC1B9' },
]

const FlexExample = () => (
    <div className="flex-container">        
        <Flex wrap="wrap">
            {data.map((val, i) => (
                <Flex.Item className='flextlist inline' key={i}>
                    <img className='flexlist-img' src={val.src} />
                    <p className='flexlist-text' style={{color:val.color}}>{val.text}</p>
                </Flex.Item>

            ))}
        </Flex>
        </div>
);

export default FlexExample;
