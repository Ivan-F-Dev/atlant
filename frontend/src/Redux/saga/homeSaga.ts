import {put, takeEvery, call} from 'redux-saga/effects'
import {homeStart, setCards} from "../HomeReducer";
import {API} from "../../utils/api";

const fetchHomeCards = () => API.auth.post('/get-proxy', {url: 'https://api.coingecko.com/api/v3'+'/coins/list'})

function* fetchHomeCardsWorker() {
    console.log('fetchHomeCardsWorker')
    // @ts-ignore
    const res = yield call(fetchHomeCards)
    console.log('fetchHomeCardsWorker',res)
    if (res.status === 200) {
        yield put(setCards(res.data.proxyData))
    } else if (res.status === 401) {
        alert('fetchHomeCardsWorker пришел 401 статус')
    }

}

export function* HomeWatcher() {
    console.log('run HomeWatcher')
    yield takeEvery(homeStart, fetchHomeCardsWorker)
}