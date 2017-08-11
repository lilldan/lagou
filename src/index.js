import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router, Route, hashHistory,IndexRoute} from "react-router";
import App from './App';
import Post from './pages/Post';
import Seek from './pages/Seek';
import My from './pages/My';
import Login from './pages/Login';
import Register from './pages/Register';
import Pulldown from './pages/Pulldown';
import Details from './components/Details';
import Compile from './components/Compile';
import Pay from './components/Pay';
import Position from './components/Position';
import Scale from './components/Scale';
import Work from './components/Work';

import registerServiceWorker from './registerServiceWorker';

	ReactDOM.render((
		<Router history={hashHistory}>

		<Route path='/' component={App}>
		   <IndexRoute component={Post} />
		   <Route path='/my' component={My}/>
		   <Route path='/seek' component={Seek}/>
		   <Route path='/pulldown' component={Pulldown}/>
		</Route>
			<Route path='/login' component={Login}/>
			<Route path='/register' component={Register}/>
			<Route path='/details' component={Details}/>
			<Route path='/compile' component={Compile}/>
			<Route path='/pay' component={Pay}/>
			<Route path='/work' component={Work}/>
			<Route path='/scale' component={Scale}/>
			<Route path='/position' component={Position}/>
		</Router>
	)
	, document.getElementById('root'));
registerServiceWorker();
