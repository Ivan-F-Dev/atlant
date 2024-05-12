import {put, takeEvery, call} from 'redux-saga/effects'
import {homeStart, setCards} from "../HomeReducer";
import {API} from "../../utils/api";


function* fetchAuthWorker() {

}

export function* AuthWatcher() {
    console.log('run AuthWatcher')
    // yield takeEvery(, fetchAuthWorker)
}