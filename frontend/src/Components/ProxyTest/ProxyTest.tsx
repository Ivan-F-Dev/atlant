import React, {useState} from 'react';
import s from './ProxyTest.module.scss'
import {API} from "../../utils/api";
import {addCount, removeCount} from "../../Redux/CountReducer";
import {useAppDispatch, useAppSelector} from "../../Hooks/hooks";

type Props = {

};
export const ProxyTest = (props: Props) => {

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

    const [data1, setData1] = useState<any>(null)

    //

    const [data, setData] = useState<object[]>([])

    const request = (index: number) => {
        const urls = [
            '/coins/categories/list',
            '/simple/token_price/bitcoin',
            '/coins/bitcoin',
            '/coins/bitcoin/history',
            '/coins-id-ohlc',
            '/coins/list'
        ]
        API.crypto.get(urls[index]).then(res => {
            setData(prev => {
                prev[index] = res.data
                return prev
            })
        })
    }

    const requestProxy = (index: number) => {
        const urls = [
            '/coins/categories/list',
            '/simple/token_price/bitcoin',
            '/coins/bitcoin',
            '/coins/bitcoin/history',
            '/coins-id-ohlc',
            '/coins/list'
        ]
        const url = 'https://api.coingecko.com/api/v3' + urls[index]
        API.auth.post('/get-proxy' + '?' + url,{url: url}  ).then(res => {//'/post-proxy для имитации пост запросов'
            setData(prev => {
                prev[index] = res.data
                return prev
            })
        })
    }

    return (
        <div className={s.ProxyTest}>
            <div>
                {data1 ? <div style={{ cursor: 'pointer' }}>{data1.data.text}</div> : <div>null</div>}
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
            {/*Запросы на coingekko*/}
            <button title={JSON.stringify(data[0])} onClick={() => request(0)}>
                /coins/categories/list endpoint для запроса всех категорий монет
            </button>
            <button title={JSON.stringify(data[1])} onClick={() => request(1)}>
                /simple/token_price/id endpoint для запроса цены монеты
            </button>
            <button title={JSON.stringify(data[2])} onClick={() => request(2)}>
                /coins/id endpoint для запроса всех данных монеты (название, цена, рынок)
            </button>
            <button title={JSON.stringify(data[3])} onClick={() => request(3)}>
                /coins/id/history endpoint для запроса исторических данных(цена, капитализация, объём)
            </button>
            <button title={JSON.stringify(data[4])} onClick={() => request(4)}>
                /coins-id-ohlc endpoint для получения графика по монете
            </button>
            <button title={JSON.stringify(data[5])} onClick={() => request(5)}>
                /coins/list endpoint
            </button>
            <br/>
            {/*Запросы через наше прокси*/}
            <button title={JSON.stringify(data[0])} onClick={() => requestProxy(0)}>
                PROXY/coins/categories/list endpoint для запроса всех категорий монет
            </button>
            <button title={JSON.stringify(data[1])} onClick={() => requestProxy(1)}>
                PROXY/simple/token_price/id endpoint для запроса цены монеты
            </button>
            <button title={JSON.stringify(data[2])} onClick={() => requestProxy(2)}>
                PROXY/coins/id endpoint для запроса всех данных монеты (название, цена, рынок)
            </button>
            <button title={JSON.stringify(data[3])} onClick={() => requestProxy(3)}>
                PROXY/coins/id/history endpoint для запроса исторических данных(цена, капитализация, объём)
            </button>
            <button title={JSON.stringify(data[4])} onClick={() => requestProxy(4)}>
                PROXY/coins-id-ohlc endpoint для получения графика по монете
            </button>
            <button title={JSON.stringify(data[5])} onClick={() => requestProxy(5)}>
                PROXY/coins/list endpoint
            </button>
        </div>

    );
};
// base url:    https://api.coingecko.com/api/v3/
// /coins/categories/list endpoint для запроса всех категорий монет
//  /simple/token_price/{id}   endpoint для запроса цены монеты
//  /coins/{id}  endpoint для запроса всех данных монеты (название, цена, рынок)
//  /coins/{id}/history  endpoint для запроса исторических данных(цена, капитализация, объём)
// /coins-id-ohlc endpoint для получения графика по монете