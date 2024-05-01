import axios from "axios";

export const API = {
	v1: axios.create({
		baseURL: process.env.REACT_APP_API || 'http://localhost:6000error'
	})
}




// base url:    https://api.coingecko.com/api/v3/
// /coins/categories/list endpoint для запроса всех категорий монет
//  /simple/token_price/{id}   endpoint для запроса цены монеты
//  /coins/{id}  endpoint для запроса всех данных монеты (название, цена, рынок)
//  /coins/{id}/history  endpoint для запроса исторических данных(цена, капитализация, объём)
// /coins-id-ohlc endpoint для получения графика по монете

// По мере надобности буду дополнять апишку
