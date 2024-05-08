import React, {useState} from 'react';
import s from './ProxyTest.module.scss'
import {API} from "../../utils/api";

type Props = {

};
export const ProxyTest = (props: Props) => {

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