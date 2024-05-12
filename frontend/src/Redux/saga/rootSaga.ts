import {all} from "redux-saga/effects"
import {HomeWatcher} from "./homeSaga";
import {AuthWatcher} from "./authSaga";

export function* rootWatcher() {
    console.log('run rootWatcher')
    yield all ([HomeWatcher(),AuthWatcher()])
}