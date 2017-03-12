import { combineReducers } from 'redux';
import skills from '../skills/SkillsReducer.js';
import about from '../about/AboutReducer.js';

export default combineReducers({
	about,
	skills
})