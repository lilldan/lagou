import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./Scale.css";
import {IndexLink,Link} from 'react-router';
import PropTypes from 'prop-types';
import $ from 'jquery';
class ITTTLogin extends Component {
  constructor(){
      super();
    this.handleClick=this.handleClick.bind(this)
         
   }
  render(){
    var arr=["没有要求","初创型","成长型","成熟型","上市公司"]
    var _this=this
    return (
      <div className="posttop">
      <div className="compile_top"><Link to="/compile"><span>&lt;</span></Link><b4>设置定制信息</b4></div>
          <div className="posttop1">想找什么职位？</div>
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
    localStorage.setItem("Scale",(e.target.innerHTML))

  }
}

export default ITTTLogin;