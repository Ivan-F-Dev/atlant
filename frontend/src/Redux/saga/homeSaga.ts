import {put, takeEvery, call} from 'redux-saga/effects'
import {homeStart, setCards} from "../HomeReducer";
import {API} from "../../utils/api";

const fetchHomeCards = () => API.auth.post('/get-proxy', {url: 'https://api.coingecko.com/api/v3'+'/coins/list'})

export function* fetchHomeCardsWorker() {
    // @ts-ignore
    const res = yield call(fetchHomeCards)
    console.log('fetchHomeCardsWorker')
    yield put(setCards(res.data.proxyData))
}

export function* HomeWatcher() {
    console.log('HomeWatcher')
    yield takeEvery(homeStart.type, fetchHomeCardsWorker)
}