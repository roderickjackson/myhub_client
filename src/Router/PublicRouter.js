import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Register from '../Auth/Components/Register'
import Login from '../Auth/Components/Login'
import Navigation from '../components/Navigation/Navigation'
import Container from '@material-ui/core/Container'
// import AppBar from '@material-ui/core/AppBar'
import Landing from '../components/Layout/Landing'
import PrivateRoute from './PrivateRouter'

function App() {
  return (
		<Router>
			<Navigation/>
			<Container maxWidth="lg">
				<Switch>
					<Route exact path='/' component={Landing}/>
					<Route exact path='/login' component={Login}/>
					<Route exact path='/register' component={Register}/>
					<PrivateRoute exact path='/landing' component={Landing}/>
				</Switch>
			</Container>
		</Router>
  );
}

export default App;
