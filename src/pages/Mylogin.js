import React from 'react';
import ReactDOM from 'react-dom';
import {IndexLink,Link} from 'react-router';
import './My.css';
import $ from 'jquery';

class Mylog extends React.Component{
	constructor(){
		super();
		this.state={
			stor:localStorage.getItem("commentList"),
			cou1:"block",
			cou2:"none"
		}
		
		this.hanleClick=this.hanleClick.bind(this);
		
	}
	componentWillMount(){
		if(localStorage.getItem("commentList")!=null){
			this.setState({
		 	cou2:"block",
		 	cou1:"none"
		 })
		}
	}
	render(){
		return(
			<div>
			<div id="Poison" style={{display:this.state.cou1}}>
				<div id="footer">
		      	<p>拉勾网</p>
		    	</div>
		         <Link to="/login" >   
		      	<div id="sup">
		        <div id="jug">
		            <a>登录/注册</a>
		        </div>
		         <div id="ad">
		          <div><a>投递</a></div>
		          <div><a>面试</a></div>
		          <div><a>邀约</a></div>
		          <div><a>收藏</a></div>
		         </div>
		        </div>
		          </Link>
		      </div>
		      <div id="Poison1" style={{display:this.state.cou2}}>
				<div id="footer">
		      	<p>拉勾网</p>
		    	</div>
		            
		      	<div id="sup">
		      	<div id="head_portrait">
		      	<span></span>

		      	</div>
		      	<div id="stor" >{this.state.stor}</div>
		         <div id="ad">
		          <div><a>投递</a></div>
		          <div><a>面试</a></div>
		          <div><a>邀约</a></div>
		          <div><a>收藏</a></div>
		         </div>
		         <div id="Logout" onClick={this.hanleClick}>退出登录</div>
		        </div>
		          
		      </div>
 	</div>
			)
	}

	hanleClick(){
		
		
		 this.setState({
		 	cou2:"none",
		 	cou1:"block"
		 })
		 
	}
	

}

export default Mylog;