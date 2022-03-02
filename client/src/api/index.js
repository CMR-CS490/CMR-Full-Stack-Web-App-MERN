import axios from 'axios'

// Local: http://localhost:5002/
// Production: https://cmr-autograder.herokuapp.com/
// URL pointing to backend route.
export const url = 'http://localhost:5002/';

export const fetchTests = () => axios.get(`${url}tests`);
export const createTest = (newTest) => axios.post(`${url}tests`, newTest);
export const updateTest = (id, updatedTest) => axios.patch(`${url}/tests/${id}`, updatedTest);
export const getQuestions = () => axios.get(`${url}api/questions`);
export const createQuestion = (newQuestion) => axios.post(`${url}api/questions`, newQuestion);  

// export const getQuestions = () => axios.get(`${url}api/questions`); // Getting question specified with specific ids. (For Creating a Test)