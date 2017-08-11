import React, { Component } from 'react';
import {IndexLink,Link} from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <div className="App">
          {this.props.children}
           <ul className="footer">
           <li><IndexLink to="/" activeClassName="active"><i className="iconfont icon-home">职位</i></IndexLink></li>
            <li><Link to="/seek" activeClassName="active"><i className="iconfont icon-search">搜索</i></Link></li>
            <li><Link to="/my" activeClassName="active"><i className="iconfont icon-wode">我的</i></Link></li>
          </ul>
          
      </div>
    
    </div> 
    );
  }
}

export default App;
