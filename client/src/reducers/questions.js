export default (questions = [], action) => {
    switch (action.type) {
        case 'UPDATE_QUESTION':
            return questions.map((question) => question._id === action.payload ? action.payload : question) // action.payload is the updated test.
        case 'FETCH_ALL_QUESTION':
            return action.payload;
        case 'FETCH_QUESTION':
            return (questions.filter((question) => question._id == action.payload._id).length > 0? questions: [...questions, action.payload]);
        case 'CREATE_QUESTION':
            return [...questions, action.payload];
        default:
            return questions;
    }
}