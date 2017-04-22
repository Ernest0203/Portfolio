import { combineReducers, createStore } from 'redux';
//import rootReducer from '../app/rootReducer.js';
import skills from '../skills/SkillsReducer.js';
import about from '../about/AboutReducer.js';
import portfolio from '../portfolio/PortfolioReducer.js';

const rootReducer = combineReducers({
	about,
	skills,
	portfolio
})

export default function configureStore(initialState) {
	const store = createStore(rootReducer, initialState);
	window.dispatch = store.dispatch
	return store
}
