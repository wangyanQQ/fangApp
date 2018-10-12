import React, { Component } from 'react'
import { ListView } from 'antd-mobile';
import img1 from '../assets/images/listimg3.jpg';
// 数据源
const data = [
    {
        img:img1 ,
        title: '融创天府逸家商铺1',
        address: '龙泉驿-龙泉驿',
        areasize: '1室2厅 110平米',
        tags: ['商场']
    },
    {
        img: 'https://pic1.ajkimg.com/display/xinfang/9c2330e60b2d7a4bb06758e4641f000d/80x80x50n@2x.jpg?t=1',
        title: '融创天府逸家商铺2',
        address: '龙泉驿-龙泉驿',
        areasize: '1室2厅 98平米',
        tags: ['商场','绕城外','公园']
    },
    {
        img: 'https://pic1.ajkimg.com/display/xinfang/9c2330e60b2d7a4bb06758e4641f000d/80x80x50n@2x.jpg?t=1',
        title: '融创天府逸家商铺3',
        address: '龙泉驿-龙泉驿',
        areasize: '1室2厅 98平米',
        tags: ['商场','单价低']
    },
];

export default class Text extends Component {
    constructor(props){
        super(props)
        // 创建一个实例
        const dataSource = new ListView.DataSource({  
        // 判断行数据是否更新   
            rowHasChanged: (row1, row2) => row1 !== row2,
            
          });
        //   静态属性
        this.state={
            dataSource
        }

    }
    // 行渲染
    renderRow(rowData, sectionID, rowID){

        return (
        <div><div key={rowID}>{rowData.title}</div>
        <img src={rowData.src}/>
        </div>
        )
    }
    // 一个可渲染的组件会被渲染在每一行下面，除了小节标题的前面的最后一行
    renderSeparator(sectionID, rowID){
        return(
            <div
            key={`${sectionID}-${rowID}`}
            style={{
              backgroundColor: '#F5F5F9',
              height: 2,             
              borderBottom: '1px solid #ECECED',
            }}
          />
        )
    }
  render() {
    return (
      <ListView 
    //   数据
        dataSource={this.state.dataSource}
        // 行渲染规则
        renderRow={this.renderRow}
        // 渲染在行下面
        renderSeparator={this.renderSeparator}
        style={{height:200}}      
      />
    )
  }
  componentDidMount=()=>{
      setTimeout(()=>{
          this.setState({
            //   clone方法会自动提取新数据并进行逐行对比
            dataSource:this.state.dataSource.cloneWithRows(data)
          })
      },600)
  }
}
