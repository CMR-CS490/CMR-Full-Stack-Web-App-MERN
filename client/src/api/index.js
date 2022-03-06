import axios from 'axios'

// Local: http://localhost:5002/
// Production: https://cmr-autograder.herokuapp.com/
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



export const getAnswers = () => axios.get(`${url}api/answers`);
export const createAnswer = (newAnswer) => axios.post(`${url}api/answers`, newAnswer);  


// export const getQuestions = () => axios.get(`${url}api/questions`); // Getting question specified with specific ids. (For Creating a Test)