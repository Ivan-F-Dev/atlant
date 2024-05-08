import { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks'
import { addCount, removeCount } from '../../Redux/CountReducer'
import { API } from '../../utils/api'
import {ProxyTest} from "../ProxyTest/ProxyTest";

const Home: FC = () => {
	const { count } = useAppSelector(state => state.count)
	const dispatch = useAppDispatch()


	//тестчу регистрацию
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const testReg = () => {
		API.auth.post('/registration', { email, password })
	}
	const testLog = () => {
		try {
			API.auth.post('/login', { email, password }).then(res => {
				localStorage.token = res.data.access
			})
		} catch (e) {
			alert('Запрос на логин сломался')
		}
	}
	const testLogout = () => {
		API.auth.get('/logout')
	}
	const testCheck = () => {
		API.auth.get('/check')
	}
	const testRefresh = () => {
		try {
			API.auth.get('/refresh').then(res => {
				localStorage.token = res.data.access
			})
		} catch (e) {
			alert('Запрос на рефреш сломался')
		}

	}
	//тестчу регистрацию

	const [data, setData] = useState<any>(null)

	// useEffect(() => {
	// 	API.auth.get('/todo').then(res => {
	// 		setData(res)
	// 	})
	// }, [])

	return (
		<>
			<div>
				{data ? <div style={{ cursor: 'pointer' }}>{data.data.text}</div> : <div>null</div>}
			</div>
			<div style={{ padding: '10px', border: '1px solid black', borderRadius: '5px' }}>
				<input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
				<input type="text" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
				<button onClick={testReg}>Регистрация</button>
				<button onClick={testLog}>Вход</button>
				<button onClick={testLogout}>Выход</button>
				<button onClick={testCheck}>check</button>
				<button onClick={testRefresh}>refresh</button>
			</div>
			<div style={{ marginTop: "15px" }}>
				<div style={{ fontSize: "24px", color: "red" }}>{count}</div>
				<div style={{ display: "flex", columnGap: "20px" }}>
					<button style={{ width: "80px", height: "20px", }} onClick={() => dispatch(addCount(1))}>Прибавить</button>
					<button style={{ width: "80px", height: "20px" }} onClick={() => dispatch(removeCount(1))}>Убавить</button>
				</div>
			</div>
			<ProxyTest/>
		</>
	)
}

export default Home