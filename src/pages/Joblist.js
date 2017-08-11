import React from 'react';
import ReactDOM from 'react-dom';
import './Post.css';
import $ from 'jquery';
import Jobitem from './Jobitem';

import {IndexLink,Link} from 'react-router';
   class Joblist extends React.Component{
         constructor(){
         	super();
         	this.state={
                co1:"",
                co2:"",
                co3:"",
                co4:"",
                mmd:"加载更多",
                cuo:"none",
                cuo1:"none",
                cuo2:"block",
         		joblist:[
                    {
                       
                        "positionId": 3274891,
                        "positionName": "产品运营",
                        "city": "广州",
                        "createTime": "今天 15:55",
                        "salary": "5k-8k",
                        "companyId": 147898,
                        "companyLogo": "http://www.lgstatic.com/i/image/M00/59/B8/CgqKkVfZH_uAF8znAAA0bBI3Ep8805.png",
                        "companyName": "糖谷游戏",
                        "companyFullName": "广州糖谷信息科技有限公司"
                    },
                    {
                        "positionId": 3269904,
                        "positionName": "IT Project coordinator",
                        "city": "天津",
                        "createTime": "今天 15:55",
                        "salary": "6k-8k",
                        "companyId": 92931,
                        "companyLogo": "http://www.lgstatic.com/i/image/M00/2B/83/CgpFT1kvqu2Acq8aAACPuLnbQ5M586.png",
                        "companyName": "捷普科技（上海）有限公司",
                        "companyFullName": "捷普科技（上海）有限公司"
                    },
                    {
                       
                        "positionId": 3272605,
                        "positionName": "系统工程师",
                        "city": "深圳",
                        "createTime": "今天 15:55",
                        "salary": "8k-15k",
                        "companyId": 159292,
                        "companyLogo": "http://www.lgstatic.com/i/image/M00/76/A7/Cgp3O1g2VsKAQMouAABPiGFYZvk328.png",
                        "companyName": "擎力文化",
                        "companyFullName": "深圳擎力文化有限公司"
                    },
                    {
                        
                        "positionId": 3272859,
                        "positionName": "广告投放专员",
                        "city": "广州",
                        "createTime": "今天 15:54",
                        "salary": "5k-10k",
                        "companyId": 203718,
                        "companyLogo": "http://www.lgstatic.com/i/image/M00/27/D6/CgpEMlkcEWmAT4ONAAAXRR2Ab80628.png",
                        "companyName": "青蜂信息",
                        "companyFullName": "广州青蜂信息科技有限公司"
                    },
                    {
                        "positionId": 3273265,
                        "positionName": "Web前端/HTML5开发工程师",
                        "city": "温州",
                        "createTime": "今天 15:54",
                        "salary": "5k-8k",
                        "companyId": 155441,
                        "companyLogo": "http://www.lgstatic.com/i/image/M00/38/A7/CgpEMllDbPeAJfK9AAJvdpk8FkA405.png",
                        "companyName": "温州泊啤汇网络科技有限公司",
                        "companyFullName": "温州泊啤汇网络科技有限公司"
                    },
                    {
                       
                        "positionId": 3256331,
                        "positionName": "互娱-直播产品经理-上海",
                        "city": "上海",
                        "createTime": "今天 15:52",
                        "salary": "10k-15k",
                        "companyId": 1686,
                        "companyLogo": "http://www.lgstatic.com/image1/M00/00/06/Cgo8PFTUWAaAbD7PAACAXTzCmiw113.jpg",
                        "companyName": "爱奇艺",
                        "companyFullName": "北京爱奇艺科技有限公司"
                    },
                    {
                        "positionId": 3272220,
                        "positionName": "PHP开发工程师",
                        "city": "上海",
                        "createTime": "今天 15:52",
                        "salary": "15k-30k",
                        "companyId": 197709,
                        "companyLogo": "http://www.lgstatic.com/i/image/M00/18/19/CgpFT1kAOoeAPFUCAAAnHHZSZmQ043.png",
                        "companyName": "优锐",
                        "companyFullName": "优锐医药科技（上海）有限公司"
                    },
                    {
                       
                        "positionId": 3270529,
                        "positionName": "大客户销售经理",
                        "city": "北京",
                        "createTime": "今天 15:50",
                        "salary": "10k-18k",
                        "companyId": 42369,
                        "companyLogo": "http://www.lgstatic.com/image2/M00/04/81/CgqLKVXyK3OAfaHsAAAbS4BZIUI843.png",
                        "companyName": "ETCP",
                        "companyFullName": "北京悦畅科技有限公司"
                    },
                    {
                        "positionId": 3270616,
                        "positionName": "客服专员",
                        "city": "北京",
                        "createTime": "今天 15:50",
                        "salary": "4k-6k",
                        "companyId": 42369,
                        "companyLogo": "http://www.lgstatic.com/image2/M00/04/81/CgqLKVXyK3OAfaHsAAAbS4BZIUI843.png",
                        "companyName": "ETCP",
                        "companyFullName": "北京悦畅科技有限公司"
                    },
                    {
                       
                        "positionId": 3270676,
                        "positionName": "客服",
                        "city": "北京",
                        "createTime": "今天 15:45",
                        "salary": "4k-7k",
                        "companyId": 23727,
                        "companyLogo": "http://www.lgstatic.com/i/image/M00/00/6D/CgqKkVZJj_qAIz4tAAAZsDXnarY482.jpg",
                        "companyName": "知网",
                        "companyFullName": "同方知网（北京）技术有限公司"
                    }]

         	};
            this.handleClick=this.handleClick.bind(this);
            this.windowClick=this.windowClick.bind(this)


         }
    componentDidMount (){
    
    }
         render(){
            var list = this.state.joblist.map(function(elem,index) {
                
            	return <Jobitem job={elem} key={index} />;
            })
           
         	return (
                      <div>  
                    <div id="footer">
                      <p>拉勾网</p>
                    </div>
                    <ul>
                    <div id="top">
                    <span className="top1" style={{display:this.state.cuo2}}>10秒钟定制职位</span>
                    <span className="top1" style={{display:this.state.cuo1}}>{this.state.co1}/{this.state.co2}/{this.state.co3}/{this.state.co4}</span>
                     <Link to="/login" >
                    <span className="top2">去登陆</span>
                    </Link>
                    <Link to="/compile" >
                    <span className="top2" style={{display:this.state.cuo}}>编辑</span>
                    </Link>
                        </div>
                        <ul onClick={this.windowClick}>
                        <Link to="/details">
                       {list}
                       </Link>
                       </ul>
                       <div id="foot">
                       <p className="Load" onClick={this.handleClick}>{this.state.mmd}</p>
                       <div id="copyright"><p>©2015 lagou.com, all right reserved </p><div className="copyright-item"><span className="phone">移动版&nbsp;·&nbsp;</span><span className="computer active">电脑版&nbsp;·&nbsp;</span><a href="#header">回顶部</a></div></div>
                       </div>
                    </ul>
                    </div>  
         		)
         } 
        windowClick(){
           

        }
        componentDidMount(){
            if(localStorage.getItem("commentList")!=null){
                this.setState({
                    cuo:"block",
                })
            }
            if(localStorage.getItem("Position")!=null){

                this.setState({
                co1:localStorage.getItem("Position"),
                co2:localStorage.getItem("Work"),
                co3:localStorage.getItem("Pay"),
                co4:localStorage.getItem("Scale"),
                cuo1:"block",
                cuo2:"none"
                })

            }
        } 
      handleClick(pageNum,pageSize){
        var _this =this;
        var list = this.state.joblist;
      $.get("/index",{
        pageNum:this.state.pageNum,
        pageSize:this.state.pageSize
      },function(data){
        console.log(list)
  

        list = [...list,...data.joblist];
          _this.setState({
             joblist:list
          });
         _this.setState((prevState) => ({ //更新pageNum
              pageNum: prevState.pageNum + 1
        }))
        
      
  
       })
     } 
   }


export default Joblist;