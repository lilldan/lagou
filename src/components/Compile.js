import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./Compile.css";
import {IndexLink,Link} from 'react-router';
import PropTypes from 'prop-types';
import $ from 'jquery';


class ILogin extends Component {
  constructor(){
      super();
    this.state={
      co1:"想找什么职位？",
      co2:"告诉我你期望的工作地点",
      co3:"你期望的薪水",
      co4:"对公司的规模有何要求"

    }
         
   }
  render(){
    
    return (
    	<div className="compile">

    	<div className="compile_top"><Link to="/"><span>&lt;</span></Link><b4>设置定制信息</b4></div>
      <div className="compile_jug">

          <div>
          <p>职位类型</p>
          <Link to="/position">
          <div className="lc">{this.state.co1}</div>
          </Link>
          </div>

          <div>
          <p>工作地点</p>
          <Link to="/work">
          <div className="lc">{this.state.co2}</div>
          </Link>
          </div>

          <div>
          <p>期望薪水</p>
          <Link to="/pay">
          <div className="lc">{this.state.co3}</div>
          </Link>
          </div>

          <div>
          <p>公司规模</p>
          <Link to="/scale">
          <div className="lc">{this.state.co4}</div>
          </Link>
          </div>

      </div>
    	<Link to="/"><div className="resume">开始搜索</div></Link>
    	</div>
    );
  }
  componentWillMount(){
    this.setState({
      co1:localStorage.getItem("Position"),
      co2:localStorage.getItem("Work"),
      co3:localStorage.getItem("Pay"),
      co4:localStorage.getItem("Scale")
    })
  }
}

export default ILogin;
