export default (tests = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...tests, action.payload];
        default:
            return tests;
    }
}