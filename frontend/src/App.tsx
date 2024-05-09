import React, { useEffect, useState } from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Input from './Components/Input/Input';
import Modal from './Components/Modal/Modal';
import Navbar from './Components/Navbar/Navbar';
import SettingsWindow from './Components/SettingsWindow/SettingsWindow';

function App() {

	const [settings, setSettings] = useState(false)
	const [modal, setModal] = useState(false)
	const [modalInput, setModalInput] = useState('')
	console.log(modalInput);



	return (
		<div className="App">
			<Header active={settings} setActive={() => setSettings(!settings)} />
			<Navbar />
			{/* <AppRouter /> */}
			<Home />
			<Footer />
			<SettingsWindow active={settings} setActive={() => setSettings(false)} setModal={() => setModal(true)} />
			<Modal modal={modal} setModal={() => setModal(false)} >
				<Input type="text" placeholder='Логин' value={modalInput} onChange={(e) => setModalInput(e.target.value)} />
			</Modal>
		</div>
	);
}

export default App;
