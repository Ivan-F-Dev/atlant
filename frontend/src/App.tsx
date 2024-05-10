import React, { useEffect, useState } from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Input from './Components/UI/Input/Input';
import Modal from './Components/Modal/Modal';
import SettingsWindow from './Components/SettingsWindow/SettingsWindow';
import {Route, Routes} from "react-router-dom";
import {ROUTES} from "./utils/routes";
import {ProxyTest} from "./Components/ProxyTest/ProxyTest";

function App() {

	const [settings, setSettings] = useState(false)
	const [modal, setModal] = useState(false)
	const [modalInput, setModalInput] = useState('')

	return (
		<div className="App">
			<Header active={settings} setActive={() => setSettings(!settings)} />
			<Routes>
				<Route path={ROUTES.HOME} element={<Home />} />
				<Route path={ROUTES.TEST} element={<ProxyTest />} />
			</Routes>
			<Footer />
			{/*Modals*/}
			<SettingsWindow active={settings} setActive={() => setSettings(false)} setModal={() => setModal(true)} />
			<Modal modal={modal} setModal={() => setModal(false)} >
				<Input type="text" placeholder='Логин' value={modalInput} onChange={(e) => setModalInput(e.target.value)} />
			</Modal>
		</div>
	);
}

export default App;
