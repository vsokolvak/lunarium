import { createSlice } from '@reduxjs/toolkit'

const basketSlice = createSlice({
	name: 'basket',
	initialState: JSON.parse(localStorage.getItem("lunariumBasketSave"))||{},
	// { 
 	// ['thankYouMe']: {
			// 	name: 'thankYouMe',
			// 	img: thankYouMe,
			// 	description: 'Чашка хамелеон синя "Дякую, що у мене є ти" для коханої людини',
			// 	price: 325,
			// 	count: 1,
			// }
	// },
	
	reducers: {

		goodsGetFromLocalstorage(state, action) {
			state = JSON.parse(localStorage.getItem("lunariumBasketSave"))
		},

		addGoods(state, action) {
			if (state[action.payload.name]) {
				state[action.payload.name].count++
			} else {
				state[action.payload.name] = action.payload
			}
			localStorage.setItem("lunariumBasketSave", JSON.stringify(state));
		},

		goodsChangeCount(state, action) {
			if (state[action.payload.name]) {
				state[action.payload.name].count += action.payload.count
				if (state[action.payload.name].count < 1) state[action.payload.name].count = 1
			} 
			localStorage.setItem("lunariumBasketSave", JSON.stringify(state));
		},

		goodsDelete(state, action) {
			if (state[action.payload.name]) {
				delete state[action.payload.name]
			}
			localStorage.setItem("lunariumBasketSave", JSON.stringify(state));
		},
	},
})

export const { addGoods, goodsChangeCount, goodsDelete, goodsGetFromLocalstorage } = basketSlice.actions
export default basketSlice.reducer