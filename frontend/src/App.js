import './App.css';
import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate
} from 'react-router-dom'
import FormView from './views/FormView'

function App() {
		return (
			<BrowserRouter>
				<Routes>
					<Route path="/addcar" element = { <FormView/> }></Route>
				</Routes>
			</BrowserRouter>
		);
	
}

export default App;