const pageIncrementByNumAction = (num) => {
    return{
        type: 'PAGE_INCREMENT_BY_NUM',
        payload: num
    }
}

export default pageIncrementByNumAction;