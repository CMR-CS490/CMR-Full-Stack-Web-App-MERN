export default (questions = [], action) => {
    switch (action.type) {
        case 'UPDATE':
            return questions.map((question) => question._id === action.payload ? action.payload : question) // action.payload is the updated test.
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...questions, action.payload];
        default:
            return questions;
    }
}