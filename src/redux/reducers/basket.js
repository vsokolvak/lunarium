import { createSlice } from '@reduxjs/toolkit'

const basketSlice = createSlice({
	name: 'basket',
	initialState: {
		// ['thankYouMe']: {
		// 	name: 'thankYouMe',
		// 	img: thankYouMe,
		// 	description: 'Чашка хамелеон синя "Дякую, що у мене є ти" для коханої людини',
		// 	price: 325,
		// 	count: 1,
		// }
		
	},
	
	reducers: {

		addGoods(state, action) {
			if (state[action.payload.name]) {
				state[action.payload.name].count++
			} else {
				state[action.payload.name] = action.payload
			}
		},

		goodsChangeCount(state, action) {
			if (state[action.payload.name]) {
				state[action.payload.name].count += action.payload.count
				if (state[action.payload.name].count < 1) state[action.payload.name].count = 1
			} 
		},
	},
})

export const { addGoods, goodsChangeCount } = basketSlice.actions
export default basketSlice.reducer