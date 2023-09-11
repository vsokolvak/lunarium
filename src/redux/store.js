import { configureStore } from '@reduxjs/toolkit'
import { reducer as formReducer } from 'redux-form'
import basketReducer from './reducers/basket'

export default configureStore({
	reducer: {
		form: formReducer,
		basket: basketReducer,
	}
})