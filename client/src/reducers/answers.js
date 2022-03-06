export default (answers = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_ANSWERS':
            return action.payload;
        case 'CREATE_ANSWER':
            return [...answers, action.payload];
        default:
            return answers;
    }
}