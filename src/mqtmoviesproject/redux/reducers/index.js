import pageNumReducer from './pageNumReducer';
import searchReducer from './searchReducer';
import showTrailerReducer from './showTrailerReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    pageNum : pageNumReducer,
    search : searchReducer,
    showtrailer : showTrailerReducer
});

export default allReducers;