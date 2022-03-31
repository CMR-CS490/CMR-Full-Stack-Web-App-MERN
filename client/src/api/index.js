import axios from 'axios'

// Local: http://localhost:5002/
// Production: https://cmr-autograder.herokuapp.com/
// New Production URL: https://cmr-autograder-2.herokuapp.com/
// URL pointing to backend route.
export const url = 'http://localhost:5002/';

export const fetchTest = (id) => axios.get(`${url}api/tests/${id}`);
export const fetchTests = () => axios.get(`${url}api/tests`);
export const fetchStudentTests = () => axios.get(`${url}api/tests/students`);
export const createTest = (newTest) => axios.post(`${url}api/tests`, newTest);
export const updateTest = (id, updatedTest) => axios.patch(`${url}api/tests/${id}`, updatedTest);


export const getQuestion = (id) => axios.get(`${url}api/questions/${id}`);
export const getQuestions = () => axios.get(`${url}api/questions`);
export const createQuestion = (newQuestion) => axios.post(`${url}api/questions`, newQuestion);  



export const getAnswers = (id) => axios.get(`${url}api/answers/${id}`);
export const getAnswer = (id) => axios.get(`${url}api/answers/answer/${id}`);
export const createAnswer = (newAnswer) => axios.post(`${url}api/answers`, newAnswer);  
export const getAnswerStudent = (username, testID) => axios.get(`${url}api/answers/${username}/${testID}`);

export const getScores = (username, testID) => axios.get(`${url}api/score/${username}/${testID}`);
export const updateScores = (username, testID, updatedScore) => axios.get(`${url}api/score/${username}/${testID}`, updatedScore);
export const updateIndividualScores = (scoreID, questionID, updatedIndividualScore) => axios.post(`${url}api/score/${scoreID}/${questionID}`, updatedIndividualScore);

export const gradeTest = (testID) => axios.get(`${url}api/grade/${testID}`);
export const publishScores = (testID) => axios.get(`${url}api/score/publish/${testID}`);

// export const getQuestions = () => axios.get(`${url}api/questions`); // Getting question specified with specific ids. (For Creating a Test)