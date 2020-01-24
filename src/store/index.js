import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import gameReducer from './reducers/gameReducer'
import personReducer from './reducers/personReducer'
import userReducer from './reducers/userReducer'
import thunk from 'redux-thunk'

const AllReducers = combineReducers({ game: gameReducer, person: personReducer, users: userReducer })

const InitialState = {
    game: { name: 'Football' },
    person: { name: 'Haresh',email: 'haresh@gmail.com' },
    users: []
}

const middleware = [thunk]

const store = createStore(AllReducers, InitialState, compose(applyMiddleware(...middleware),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ))

export default store;

