import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface StateHomeCardType {
	id: string
	name: string
}

interface StateHomeType {
	// start: boolean
	cards: StateHomeCardType[] | null
}

const StateCount: StateHomeType = {
	// start: false,
	cards: null
}

const homeSlice = createSlice({
	name: "homeReducer",
	initialState: StateCount,
	reducers: {
		homeStart() {// state, action: PayloadAction<boolean>
			// state.start = action.payload
		},
		setCards(state, action: PayloadAction<StateHomeCardType[]>) {
			state.cards = action.payload
		},
	}
})

export default homeSlice.reducer
export const { setCards,homeStart } = homeSlice.actions