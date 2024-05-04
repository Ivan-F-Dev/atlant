import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface StateCountTypes {
	count: number;
}

const StateCount: StateCountTypes = {
	count: 0
}

const countSlice = createSlice({
	name: "countReducer",
	initialState: StateCount,
	reducers: {
		addCount(state, action: PayloadAction<number>) {
			state.count = state.count + action.payload
		},
		removeCount(state, action: PayloadAction<number>) {
			state.count = state.count - action.payload
		}
	}
})

export default countSlice.reducer
export const { addCount, removeCount } = countSlice.actions