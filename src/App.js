import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import MainRouter from '../src/components/Router/MainRouter'
import Landing from './components/Layout/Landing';

function App() {
  return (
		<React.Fragment>
			<CssBaseline/>
				<MainRouter/>
		</React.Fragment>
  );
}

export default App;
