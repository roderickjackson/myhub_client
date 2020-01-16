import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Register from '../Auth/RegisterComponent/Register'
import Login from '../Auth/LoginComponent/Login'
import Navigation from '../Navigation/Navigation'
import Container from '@material-ui/core/Container'
// import AppBar from '@material-ui/core/AppBar'
import Landing from '../Layout/Landing';

function App() {
  return (
		<Router>
					<Navigation/>
				<Container maxWidth="lg">
					<Switch>
						<Route exact path='/' component={Register}/>
						<Route exact path='/login' component={Login}/>
						<Route exact path='/register' component={Register}/>
						<Route exact path='/landing' component={Landing}/>
					</Switch>
				</Container>
		</Router>
  );
}

export default App;
