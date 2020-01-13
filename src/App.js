import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Register from './components/Auth/RegisterComponent/Register'
import Login from './components/Auth/LoginComponent/Login'
import Navigation from './components/Navigation/Navigation'
import './App.css';

function App() {
  return (
		<Router>
			<div className="App">
				<Navigation/>
				<Switch>
					<Route exact path='/' component={Register}/>
					<Route exact path='/login' component={Login}/>
					<Route exact path='/register' component={Register}/>
				</Switch>
    	</div>
		</Router>
  );
}

export default App;
