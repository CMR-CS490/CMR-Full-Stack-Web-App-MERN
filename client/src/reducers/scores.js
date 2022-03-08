export default (scores = [], action) => {
    switch (action.type) {
        case 'UPDATE_SCORE':
            return scores.map((score) => score._id === action.payload ? action.payload : score) 
        case 'FETCH_SCORE':
            return action.payload;
        default:
            return scores;
    }
}