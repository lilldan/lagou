import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./Details.css";
import {IndexLink,Link} from 'react-router';
import PropTypes from 'prop-types';
import $ from 'jquery';
import Jobitem from '../pages/Jobitem';


class Details extends Component {
  constructor(){
      super();
    this.state={
      co:"",
      co1:"white",
      co2:"",
      co3:"",
      co4:"",
      co5:""
    }
     this.handleClick=this.handleClick.bind(this)    
   }
   componentDidMount(pageNum,pageSize){
     var _this =this;
        var list = this.state.co2;
      $.get("/api/pp/index",{
        pageNum:this.state.pageNum,
        pageSize:this.state.pageSize
      },function(data){
        console.log(list)
  

       console.log(data.joblist[0])
          _this.setState({
            co2:data.joblist[0].city,
            co3:data.joblist[0].salary,
            co4:data.joblist[0].companyLogo,
            co5:data.joblist[0].companyName
          });
    
      
  
       })
   }
  render(){
    let {job}=this.props;

    return (
    	<div className="zwxq">

    	<div className="Job_Details">
      <Link to="/">
      <span style={{color:this.state.co1}}>&lt;</span>
      </Link>
      <b4>职位详情</b4><p className="iconfont icon-home"></p></div>
    	<div className="jj">
        <div className="jjtop"><b3>网页开发工程师</b3><p className="iconfont icon-xing" style={{color:this.state.co?"red":"black"}} onClick={this.handleClick}></p></div>
        <div className="jjsup">
          <ul>
          <li><i>￥</i>{this.state.co2}</li>
          <li><i  className="iconfont icon-dingwei"></i>{this.state.co3}</li>
          <li><i  className="iconfont icon-shizhong"></i>全职</li>
          <li><i  className="iconfont icon-gongling-"></i>1-3年</li>
          <li><i  className="iconfont icon-xuewei"></i>本科及以上</li>
          </ul>
          <span>职位诱惑:高薪加升级</span>
        </div>
        <div className="jjad">
          <div className="jjad1"><img src={this.state.co4}/></div>
          <div className="jjad2">
              <span>{this.state.co5}</span>
              <p>金融/上市公司/2000人以上</p>
          </div>
          <i className="iconfont icon-jiangzhangxunzhang"></i>
        </div>
        <div className="describe">职位描述</div>
        <div>
          按时打算打算所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所
          所所所所所所所所所所所所所所所所所所所所所所
           按时打算打算所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所
          所所所所所所所所所所所所所所所所所所所所所所
           按时打算打算所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所
          所所所所所所所所所所所所所所所所所所所所所所
           按时打算打算所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所
          所所所所所所所所所所所所所所所所所所所所所所
           按时打算打算所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所
          所所所所所所所所所所所所所所所所所所所所所所
           按时打算打算所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所
          所所所所所所所所所所所所所所所所所所所所所所
           按时打算打算所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所
          所所所所所所所所所所所所所所所所所所所所所所
           按时打算打算所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所
          所所所所所所所所所所所所所所所所所所所所所所

           按时打算打算所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所
          所所所所所所所所所所所所所所所所所所所所所所
        </div>
      </div>
      <Link to="/"><div className="resume">投个简历</div></Link>
    	</div>
    );
  }
  handleClick(){
    this.setState({
      co:!this.state.co
    })
  }
}

export default Details;

