const pageNumReducer = (state = 1, action) => {
    switch(action.type){
        case 'PAGE_INCREMENT':
            return state = state + 1;
        case 'PAGE_DECREMENT':
            return state = state - 1;
        case 'PAGE_INCREMENT_BY_NUM':
            return state = action.payload;
        default:
            return state;
    }
}

export default pageNumReducer;