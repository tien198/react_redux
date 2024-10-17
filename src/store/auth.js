import { createSlice } from "@reduxjs/toolkit"

const initialAuthenState = {
    isAuthen: false
}
const authenSlice = createSlice({
    name: 'authen',
    initialState: initialAuthenState,
    reducers: {
        login(state) {
            state.isAuthen = true
        },
        logout(state) {
            state.isAuthen = false
        }
    }
})

export default authenSlice.reducer

export const authenAction = authenSlice.actions
