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
import NoPage from "./components/exception/NoPage"
import Navbar from './components/navbar/Navbar';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element = {<Navigate to ="/addcar"/>}></Route>
				<Route path="/addcar" element={<FormView />}></Route>
				<Route path="/cars" element={<TableView />}></Route>
				<Route path="*" element = { <NoPage/> } ></Route>
			</Routes>
		</BrowserRouter>
	);

}

export default App;