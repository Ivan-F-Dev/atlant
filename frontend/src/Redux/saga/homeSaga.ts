import {put, takeEvery, call} from 'redux-saga/effects'
import {homeStart, setCards} from "../HomeReducer";
import {API} from "../../utils/api";
import {AxiosError} from "axios";
import {handleUnauthorizedError} from "../../utils/apiErrorHandler";

const fetchHomeCards = () => API.auth.post('/get-proxy', {url: 'https://api.coingecko.com/api/v3'+'/coins/list'})

function* fetchHomeCardsWorker() {
    console.log('fetchHomeCardsWorker')
    try {

        // @ts-ignore
        const res = yield call(fetchHomeCards)
        console.log('fetchHomeCardsWorker',res)
        yield put(setCards(res.data.proxyData))
    } catch (e: unknown) {
        handleUnauthorizedError(e)
    }


}

export function* HomeWatcher() {
    console.log('run HomeWatcher')
    yield takeEvery(homeStart, fetchHomeCardsWorker)
}