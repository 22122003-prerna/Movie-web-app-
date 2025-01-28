const initialState = "";

const searchReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SEARCH':
            return state = action.payload;
        default:
            return state;
    }
}

export default searchReducer;