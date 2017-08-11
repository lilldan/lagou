import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./Login.css";
import {IndexLink,Link} from 'react-router';
import PropTypes from 'prop-types';
import $ from 'jquery'

class Login extends Component {
  constructor(){
      super();
      this.state={
        pas:"text",
        judge:"请输入常用账号",
        cuo1:"none",
        cuo2:"none"
        
      }
            this.handle=this.handle.bind(this);
            this.handleClick=this.handleClick.bind(this)
   }
  render(){
    var style={
      display:"none"
    }
    return (
      <div className="container">
            <div className="new_register">
                <div className="_info">
                    <input type="text" className="phone _email"  placeholder="已验证手机/邮箱" data-propertyname="username" id="un"/>
                    <p className="hint" style={{display:this.state.cuo1}}>{this.state.judge}</p>
                </div>
                <div className="pdw">
                   <input type={this.state.pas?"password":"text"} placeholder="密码" className="r_psw btm" maxlength="16" id="pw"/>
                   <p className="pass" style={{display:this.state.cuo2}}>请输入密码</p>
                   <i className="iconfont icon-biyan" onClick={this.handle}></i>
                   <b className="iconfont icon-eye" style={style}></b>
                </div>


               </div>
                <Link to="/my" id="link">     
                <a href="javascript:void(0)"><div className="btn_green" onClick={this.handleClick}>登陆</div></a>
                </Link>
                <div className="register_text">还没帐号？</div>
                 <Link to="/register" >
                <a href=""><div className="btn_reg">注册</div></a>
                </Link>
      </div>
    );
  }
  handle(){
      this.setState({
            pas:!this.state.pas
          });
     

  }
  handleClick(e){
    console.log(localStorage.getItem("commentList"))
    if(document.getElementById("un").value==""||document.getElementById("un").value!= localStorage.getItem("commentList")){
     this.setState({
      cuo1:"block"
     })
      e.preventDefault()
    }
    if(document.getElementById("pw").value==""){
      this.setState({
      cuo2:"block"
     })
      e.preventDefault()
    }
    if(document.getElementById("un").value==localStorage.getItem("commentList")){
     this.setState({
      cuo1:"none"
     })
      
    }
    if(document.getElementById("pw").value!=""){
      this.setState({
      cuo2:"none"
     })
     
    }
  
    
  }
}

export default Login;

    