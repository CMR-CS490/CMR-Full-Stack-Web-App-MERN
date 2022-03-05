export default (tests = [], action) => {
    switch (action.type) {
        case 'UPDATE_TEST':
            return tests.map((test) => test._id === action.payload ? action.payload : test) // action.payload is the updated test.
        case 'FETCH_ALL_TEST':
            return action.payload;
        case 'CREATE_TEST':
            return [...tests, action.payload];
        default:
            return tests;
    }
}