import axios from 'axios'

// URL pointing to backend route.
const url = 'http://localhost:5002/'; // Returns all the tests in the DB.

export const fetchTests = () => axios.get(`${url}tests`);
export const createTest = (newTest) => axios.post(`${url}tests`, newTest);
export const updateTest = (id, updatedTest) => axios.patch(`${url}/tests/${id}`, updatedTest);
export const getQuestions = () => axios.get(`${url}api/questions`); 

// export const getQuestions = () => axios.get(`${url}api/questions`); // Getting question specified with specific ids. (For Creating a Test)