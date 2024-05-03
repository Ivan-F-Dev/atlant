import React, { useEffect, useState } from 'react';
import AppRouter from './Components/AppRouter/AppRouter';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { API } from "./utils/api";

function App() {

	const [data, setData] = useState<any>(null)

	useEffect(() => {
		API.auth.get('/todo').then(res => {
			setData(res)
		})
	}, [])

	return (
		<div className="App">
			<Header />
			{/* <AppRouter /> */}
			<div> {data
				? <div>{data.data.text}</div>
				: <div>null</div>
			}</div>
			<Footer />
		</div>
	);
}

export default App;
