import './styles/Navbar.css';
import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate
} from 'react-router-dom'
import FormView from './views/FormView'
import TableView from './views/TableView';
import Navbar from './components/navbar/Navbar';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/addcar" element={<FormView />}></Route>
				<Route path="/cars" element={<TableView />}></Route>
			</Routes>
		</BrowserRouter>
	);

}

export default App;