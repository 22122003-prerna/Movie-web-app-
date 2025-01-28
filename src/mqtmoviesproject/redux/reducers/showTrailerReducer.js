const showTrailerReducer = (state = false, action) => {
    switch(action.type){
        case 'SHOW_TRAILER':
            return state = action.payload;
        default: 
            return state;
    }
}

export default showTrailerReducer;