import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga"
import countSlice from "./CountReducer"
import homeSlice from "./HomeReducer"
import {HomeWatcher} from "./saga/homeSaga";

const sagaMiddleware = createSagaMiddleware()
// const middleware = [sagaMiddleware]

const rootReducer = combineReducers({
	count: countSlice,
	home: homeSlice
})

export const setupStore = () => {
	const store = configureStore({
		reducer: rootReducer,
		middleware(getDefaultMiddleware) {
			return getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
		}
	})
	sagaMiddleware.run(HomeWatcher)
	return store
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]