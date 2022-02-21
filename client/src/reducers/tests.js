export default (tests = [], action) => {
    switch (action.type) {
        case 'UPDATE':
            return tests.map((test) => test._id === action.payload ? action.payload : test) // action.payload is the updated test.
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...tests, action.payload];
        default:
            return tests;
    }
}