import { createSlice } from '@reduxjs/toolkit'

const basketSlice = createSlice({
	name: 'basket',
	initialState: [],

	reducers: {

		addGoods(state, action) {
			state.push(action.payload)
		},
	},
})

export const { addGoods } = basketSlice.actions
export default basketSlice.reducer