import axios from 'axios'

// URL pointing to backend route.
const url = 'http://localhost:5000/tests'; // Returns all the tests in the DB.

export const fetchTests = () => axios.get(url);
export const createTest = (newTest) => axios.post(url, newTest);