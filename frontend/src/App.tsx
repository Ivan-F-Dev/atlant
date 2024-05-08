import React, { useEffect, useState } from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {

	return (
		<div className="App">
			<Header />
			<Navbar />
			{/* <AppRouter /> */}
			<Home />
			<Footer />
		</div>
	);
}

export default App;
