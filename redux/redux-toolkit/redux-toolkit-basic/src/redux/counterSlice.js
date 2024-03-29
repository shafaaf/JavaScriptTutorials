import { createSlice} from '@reduxjs/toolkit';

// can define actions, reducers together
export const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		count: 0
	},
	reducers: { // we can mutate state here
		increment: (state) => {
			state.count += 1
		},
		decrement: (state) => {
			state.count -= 1
		},
		incrementByAmount: (state, action) => {
			state.count += action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;

