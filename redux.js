const redux = require('redux')
const { createStore } = redux

/*
	---------------------------------------------
	ACTIONS
	- Action objects
	Action to increment count
	{
		type: 'INCREMENT_COUNT'
	}

	Action to decrement count
	{
		type: 'DECREMENT_COUNT'
	}
*/

// - Action type constants
const INCREMENT_COUNT = 'INCREMENT_COUNT'
const DECREMENT_COUNT = 'DECREMENT_COUNT'

// - Action Creators - Functions which return an action object
const incrementCount = () => ({
	type: INCREMENT_COUNT
})

const decrementCount = () => ({
	type: DECREMENT_COUNT
})

/* ----------------------------------------------*/

// REDUCER FUNCTION
/*
	REDUCER
	- Create an initial state
	- It has two parameters - prevState, action
	- Contains logic to return updated state on basis of prevState and action
*/

const initialState = {
	count: 0
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case INCREMENT_COUNT:
			return {
				...state,
				count: state.count + 1
			}
		case DECREMENT_COUNT: 
			return {
				...state,
				count: state.count - 1
			}
		default:
			return state
	}
}

/* ----------------------------------------------*/
// Redux Store
const store = createStore(reducer)
// .subscribe -> Subscribing to the redux store, returns a reference to unsubscribe method
const unsubscribe = store.subscribe(() => {})

// .getState -> Get the current state of the redux store
// .dispatch -> Dispatch actions to cause state updates

console.log(store.getState())

store.dispatch(incrementCount())
store.dispatch(incrementCount())
store.dispatch(incrementCount())
store.dispatch(incrementCount())
store.dispatch(incrementCount())
store.dispatch(incrementCount())
store.dispatch(incrementCount())

console.log(store.getState())

unsubscribe()
/* ----------------------------------------------*/