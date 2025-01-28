const searchAction = (value) => {
    return{
        type: 'SEARCH',
        payload: value
    }
}

export default searchAction;