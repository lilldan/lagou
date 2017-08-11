import React from 'react';
import ReactDOM from 'react-dom';
import './Seek.css';
import $ from 'jquery';
import {IndexLink,Link} from 'react-router';
import Jobitem from './Jobitem';

class Top extends React.Component{
	  constructor(){
	  	super();
	  	this.state={
	  		job:[],
	  		seek:"",
	  		cuo1:"block",
	  		cuo2:"none",
	  		quanguo:"全国",
	  		cuo4:"none",
	  		cuo5:"none",
	  		cuo9:"block",
	  		cc:"none",
	  		cc1:"",
	  		cc2:"block"
	  	}
	  	this.handleClick=this.handleClick.bind(this);
	  	this.handle=this.handle.bind(this);
	  	this.han=this.han.bind(this);
	  	this.ggClick=this.ggClick.bind(this);
	  	this.ll=this.ll.bind(this);
	  	this.handleChange=this.handleChange.bind(this);
	  	this.jobClick=this.jobClick.bind(this)
	  	var _this=this;
	  	
}

	render(){
			 var list = this.state.job.map(function(elem,index) {
                
            	return <Jobitem job={elem} key={index} />;
            })
		var _this=this
		 var arr=["北京","上海","广州","成都","杭州","深圳","北京","上海","广州","成都","杭州","深圳","北京","上海","广州","成都","杭州","深圳","北京","上海","广州","成都","杭州","深圳","北京","上海","广州","成都","杭州","深圳","北京","上海","广州","成都","杭州","深圳","北京","上海","广州","成都","杭州","深圳","北京","上海","广州","成都","杭州","深圳","北京","上海","广州","成都","杭州","深圳","北京","上海","广州","成都","杭州","深圳","北京","上海","广州","成都","杭州","深圳","北京","上海","广州","成都","杭州","深圳","北京","上海","广州","成都","杭州","深圳","北京","上海","广州","成都","杭州","深圳","北京","上海","广州","成都","杭州","深圳"]
		 var arrAy=["web","java","c++"]
		return(
			<div>
			<div id="up_from" >
			<div id="footer" className="footer1">
			
			<p><b onClick={this.handle} className="Less" style={{display:this.state.cuo4}}>&lt;</b>拉勾网</p>
		    </div>
			<div id="top5">

			<span onClick={this.handleClick} className="nationwide">{this.state.quanguo}<i className="iconfont icon-xiajiaobiao"></i></span>

			<input type="text" placeholder="搜索职位或公司" className="Impor"
			 value={this.state.seek} onChange={this.handleChange}/>

			<i className="iconfont icon-search"  onClick={this.ggClick}></i>

			</div>
			<div className="car" style={{display:this.state.cuo9}}>
			<p className="local" style={{display:this.state.cc2}} onClick={this.jobClick}>历史记录：{this.state.cc1}</p>
			<ul className="cra" style={{display:this.state.cc}} id="cra1">
				{
					arrAy.map(function(name,index){
						return <li key={index} onClick={_this.han}>{name}</li>
					})
				}
			</ul>
			<ul className="car2">{list}</ul>
			</div>

			<span className="car12" onClick={this.han} style={{display:this.state.cuo5}}>点击加载数据</span>
			</div>
			<div id="down_from" style={{display:this.state.cuo2}}>
				<div className="cities-header">
				热门城市
				</div>
				<ul className="from_border" >
					{
						arr.map(function(name,index){
							return <li key={index} onClick={_this.ll}>{name}</li>
						})
					}
				</ul>
			</div>
			</div>

			)
	}
	componentDidMount(){
		this.setState({
			cc1:localStorage.getItem("Impor_Input")
		})
	}
	jobClick(pageNum,pageSize){
		this.setState({
			cc2:"none"
		})

		document.querySelector(".car2").innerHTML="";
		
     	setTimeout(function(){document.querySelector(".car12").style.display="block"},500)
     		var _this =this;
        var list = this.state.job;
      $.get("/index",{
        pageNum:this.state.pageNum,
        pageSize:this.state.pageSize
      },function(data){
   		console.log(data)
        list = [...list,...data.joblist];
          _this.setState({
             job:list
          });
       })

	}
	ll(e){
		console.log(e.target.innerHTML);
		this.setState({
			cuo2:"none",
			quanguo:e.target.innerHTML,
			cuo4:"none",
			cuo9:"block",
			cc:"block"
		})
		

	}

	ggClick(pageNum,pageSize){
		document.querySelector(".car2").innerHTML=""
		localStorage.setItem("Impor_Input",(this.state.seek))
		console.log(this)
		var _this =this;
        var list = this.state.job;
      $.get("/api/index",{
        pageNum:this.state.pageNum,
        pageSize:this.state.pageSize
      },function(data){
   		console.log(data)
        list = [...list,...data.joblist];
          _this.setState({
             job:list
          });
       })
		console.log(11)
		setTimeout(function(){document.querySelector(".car12").style.display="block"},1000)
		this.setState({
			cc2:"none",
			cc:"none"
		})

		
	}


	handleClick(){
		document.querySelector(".car2").innerHTML=""
		this.setState({
			cuo2:"block",
			cuo4:"block",
			cuo9:"none",
			cc2:"none"
		})
		
		
	}


	handle(){
	
		
	this.setState({
			cuo2:"none",
			cuo4:"none",
			cuo9:"block"
		})
		
	}
	
	handleChange(e){
		this.setState({
			seek:e.target.value
		})
	}

	 han(pageNum,pageSize){
		setTimeout(function(){document.querySelector(".car12").style.display="block"},500)
	 	this.setState({
	 		cuo9:"block",
	 		cc:"none"
	 	})
	 	console.log(pageNum)
        var _this =this;
        var list = this.state.job;
      $.get("/index",{
        pageNum:this.state.pageNum,
        pageSize:this.state.pageSize
      },function(data){
   		console.log(data)
        list = [...list,...data.joblist];
          _this.setState({
             job:list
          });
       })
     }
	
}


export default Top