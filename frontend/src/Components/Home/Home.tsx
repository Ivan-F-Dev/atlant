import { FC } from 'react'
import {ProxyTest} from "../ProxyTest/ProxyTest";
import {Route, Routes} from "react-router-dom";
import {ROUTES} from "../../utils/routes";

const Home: FC = () => {

	return <Routes>
		<Route path={ROUTES.TEST} element={<ProxyTest />} />
	</Routes>
}

export default Home