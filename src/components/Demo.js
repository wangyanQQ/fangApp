

// 引入主模块
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../assets/styles/datalist.less'
import listimg3 from '../assets/images/listimg3.jpg';
import { ListView } from 'antd-mobile';


// 模拟数据
const data = [
  {
    img: listimg3,
    title: '融创天府逸家商铺',
    textA:'龙泉驿-龙泉',
    textB:'1室2厅 98平',
    spanA:'商场',
    spanAb:'绕城外',
    spanc:'公园',
    spand:'单价低',
    spane:'大型超市',
    textC:'售价待定'
  },
  {
    img: listimg3,
    title: '融创天府逸家商铺',
    textA:'龙泉驿-龙泉',
    textB:'1室2厅 98平',
    spanA:'商场',
    spanAb:'绕城外',
    spanc:'公园',
    spand:'单价低',
    spane:'大型超市',
    textC:'售价待定'
  },
  {
    img: listimg3,
    title: '融创天府逸家商铺',
    textA:'龙泉驿-龙泉',
    textB:'1室2厅 98平',
    spanA:'商场',
    spanAb:'绕城外',
    spanc:'公园',
    spand:'单价低',
    spane:'大型超市',
    textC:'售价待定'
  },
  {
    img: listimg3,
    title: '融创天府逸家商铺',
    textA:'龙泉驿-龙泉',
    textB:'1室2厅 98平',
    spanA:'商场',
    spanAb:'绕城外',
    spanc:'公园',
    spand:'单价低',
    spane:'大型超市',
    textC:'售价待定'
  },
  {
    img: listimg3,
    title: '融创天府逸家商铺',
    textA:'龙泉驿-龙泉',
    textB:'1室2厅 98平',
    spanA:'商场',
    spanAb:'绕城外',
    spanc:'公园',
    spand:'单价低',
    spane:'大型超市',
    textC:'售价待定'
  },
  {
    img: listimg3,
    title: '融创天府逸家商铺',
    textA:'龙泉驿-龙泉',
    textB:'1室2厅 98平',
    spanA:'商场',
    spanAb:'绕城外',
    spanc:'公园',
    spand:'单价低',
    spane:'大型超市',
    textC:'售价待定'
  },
  
  {
    img: listimg3,
    title: '融创天府逸家商铺',
    textA:'龙泉驿-龙泉',
    textB:'1室2厅 98平',
    spanA:'商场',
    spanAb:'绕城外',
    spanc:'公园',
    spand:'单价低',
    spane:'大型超市',
    textC:'售价待定'
  },
  
  {
    img: listimg3,
    title: '融创天府逸家商铺',
    textA:'龙泉驿-龙泉',
    textB:'1室2厅 98平',
    spanA:'商场',
    spanAb:'绕城外',
    spanc:'公园',
    spand:'单价低',
    spane:'大型超市',
    textC:'售价待定'
  },
  
  
];


// 创建类
class Demo extends React.Component {

  // 构造器
  constructor(props) {
    super(props);    
    // 创建实例
    const dataSource = new ListView.DataSource({      
      rowHasChanged: (row1, row2) => row1 !== row2,      
    });
    // 静态属性
    this.state = {
      dataSource,
      isLoading: true,
    };
  }
  // 发送ajax请求
  componentDidMount() {
    // 超时调用    
    setTimeout(() => {
      // genData();
      this.setState({

        dataSource: this.state.dataSource.cloneWithRows(data),

        // isLoading: false,
      });
    }, 600);
  }
  
  render() {
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 1,         
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    const row = (rowData, sectionID, rowID) => {    
      return (
        <div className='datalist-group'>
            <img className='datalist-group-img' src={rowData.img}/>
            <div className='datalist-group-text'>
                <h5>{rowData.title}</h5>
                <p>{rowData.textA}</p>           
                <p>{rowData.textB}</p>
                <p><span style={{color:'#A4E382'}}>{rowData.spanA}</span>&nbsp;<span style={{color:'#FF9800'}}>{rowData.spanAb}</span>&nbsp;<span style={{color:'#3AD4EE'}}>{rowData.spanc}</span>&nbsp;<span style={{color:'#798274'}}>{rowData.spand}</span>&nbsp;<span style={{color:'#798274'}}>{rowData.spane}</span></p>
                
            </div>
            <p className='price-text'>{rowData.textC}</p>
      </div>
      );
    };

    return (
      <ListView
      useBodyScroll
        ref={el => this.lv = el}
        // 数据
        dataSource={this.state.dataSource}
       
        renderHeader={() => <span>猜你喜欢</span>}

       /*  */ renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        // 行渲染
        renderRow={row}
        // 渲染下面的样式
        renderSeparator={separator}        
      />
    );
  }
}
// ReactDOM.render(<Demo />, document.getElementById('root'));
export default Demo;
