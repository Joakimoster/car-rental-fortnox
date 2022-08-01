import './App.css';
import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate
} from 'react-router-dom'
import FormView from './views/FormView'
import TableView from './views/TableView';

function App() {
		return (
			<BrowserRouter>
				<Routes>
					<Route path="/addcar" element = { <FormView/> }></Route>
					<Route path="/cars" element = { <TableView/> }></Route>
				</Routes>
			</BrowserRouter>
		);
	
}

export default App;