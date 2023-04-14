import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Conversor from './pages/Conversor';
import Euro from './pages/Euro';
import './css/style.css';
import OpenedMenu from './components/OpenedMenu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
		<OpenedMenu />
		<Routes>
			<Route path='/' element={<App />} />
			<Route path='/conversor' element={<Conversor />} />
			<Route path='/euro' element={<Euro />} />
		</Routes>
	</BrowserRouter>
);
