import React, { useEffect, useState } from 'react';
import AppRouter from './Components/AppRouter/AppRouter';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { API } from "./utils/api";

function App() {
	//тестчу регистрацию
	const [email,setEmail] = useState('')
	const [password,setPassword] = useState('')
	const testReg = () => {
		API.auth.post('/registration',{email,password})
	}
	//тестчу регистрацию

	const [data, setData] = useState<any>(null)

	useEffect(() => {
		API.auth.get('/todo').then(res => {
			setData(res)
		})
	}, [email])
	
	return (
		<div className="App">
			<Header />
			{/* <AppRouter /> */}
			<div> {data
				? <div style={{cursor:'pointer'}}>{data.data.text}</div>
				: <div>null</div>
			}</div>
			<div style={{padding: '10px',border: '1px solid black', borderRadius: '5px'}}>
				<input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
				<input type="text" placeholder="password"  value={password} onChange={e => setPassword(e.target.value)}/>
				<button onClick={testReg}>Отправить</button>
			</div>
			<Footer />
		</div>
	);
}

export default App;
