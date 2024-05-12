import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface StateAuthTypes {
    user: number;
}

const StateCount: StateAuthTypes = {
    user: 0
}

const authSlice = createSlice({
    name: "authReducer",
    initialState: StateCount,
    reducers: {
        auth(state, action: PayloadAction<number>) {
            state.user = action.payload
        },
    }
})

export default authSlice.reducer
export const { auth } = authSlice.actions