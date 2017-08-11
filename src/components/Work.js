import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./Work.css";
import {IndexLink,Link} from 'react-router';
import PropTypes from 'prop-types';
import $ from 'jquery';
class TITTTLogin extends Component {
  constructor(){
      super();
   this.handleClick=this.handleClick.bind(this)
   }
  render(){
   var arr=["北京","上海","广州","成都","杭州","深圳","北京","上海","广州","成都","杭州","深圳","北京","上海","广州","成都","杭州","深圳","北京","上海","广州"]
    var _this=this
    return (
      <div className="posttop">
      <div className="compile_top"><Link to="/compile"><span>&lt;</span></Link><b4>设置定制信息</b4></div>
          <div className="posttop1">告诉我你期望的工作地点？</div>
          <div className="posttop2">
          <Link to="/compile">
            <ul>
              {
                arr.map(function(name,index){
                  return <li key={index} onClick={_this.handleClick}>{name}</li>
                })
              }
           </ul>
           </Link>
          </div>
      </div>
    )
  }
  handleClick(e){
    console.log(e.target.innerHTML)
    localStorage.setItem("Work",(e.target.innerHTML))

  }
}

export default TITTTLogin;