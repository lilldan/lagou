import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./Register.css";
import {IndexLink,Link} from 'react-router';



class Registerin extends Component {
   constructor(){
      super();
      this.state={
        cuo1:"none"
      }
    this.handleClick=this.handleClick.bind(this)
   }
  render(){
    var style={
      display:"none"
    }
    return (
      <div id="regis">
      <div className="input1"><input type="text" placeholder="手机号" className="user_phone"/><p style={{display:this.state.cuo1}}>请输入正确的手机号码</p></div>
          
      <div className="input2"><input type="text" placeholder="请证明你不是机器人" /><p>请输入验证码</p></div>
          <div className="code">
          <img className="yzm" src="https://passport.lagou.com/vcode/create?from=register&amp;refresh=1500346279815"/>
                  <a className="huan">看不清楚，<em>换一张</em></a>
          </div>
      <div className="input3"><input type="text" placeholder="短信验证码" /><p>请输入短信验证码</p></div>
       <div className="input4"><input type="password" placeholder="设置6-16位验证码" /><p>请输入正确的验证码</p></div>
          <Link to="/login">
          <div className="register" onClick={this.handleClick}>注册</div>
          </Link>
          <span className="username">已有账号？</span>
          <Link to="/login" >
          <div className="login">登录</div>
          </Link>
          <div className="register_text">点击注册，即代表您同意<a href="http://www.lagou.com/privacy.html" target="_blank">《拉勾用户协议》</a></div>
      </div>
    );
  }

  handleClick(e){
    var erg=/^1[3|4|5|8][0-9]\d{8}$/;
    if(!erg.test(document.querySelector(".user_phone").value)){
      e.preventDefault()
      this.setState({
        cuo1:"block"
      })
    }
    if(erg.test(document.querySelector(".user_phone").value)){
      localStorage.setItem("commentList",(document.querySelector(".user_phone").value))
      this.setState({
        cuo1:"none"
      })
    }
   
  }
}

export default Registerin;

    