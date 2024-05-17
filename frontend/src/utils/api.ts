import axios from "axios";

export const API = {
	auth: axios.create({
		baseURL: process.env.REACT_APP_API || 'http://localhost:6000error',
		withCredentials: true
	}),
	crypto: axios.create({
		baseURL: 'https://api.coingecko.com/api/v3'
	})
}

API.auth.interceptors.request.use( (config) => {
	config.headers.Authorization = `Bearer ${localStorage.token}`
	return config
})
API.auth.interceptors.response.use( (config) => {
	// if (config.status === 401) {
		console.log('API.auth.interceptors.response',config)
	// }
	return config
})




// base url:    https://api.coingecko.com/api/v3/
// /coins/categories/list endpoint для запроса всех категорий монет
//  /simple/token_price/{id}   endpoint для запроса цены монеты
//  /coins/{id}  endpoint для запроса всех данных монеты (название, цена, рынок)
//  /coins/{id}/history  endpoint для запроса исторических данных(цена, капитализация, объём)
// /coins-id-ohlc endpoint для получения графика по монете

// По мере надобности буду дополнять апишку
