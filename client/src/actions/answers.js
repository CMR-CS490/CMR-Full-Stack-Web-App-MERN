import * as api from "../api";

export const getAnswers = () => async (dispatch) => {
	try {
	   const { data } = await api.getAnswers();
 
	   dispatch({ type: "FETCH_QUESTION", payload: data });
	} catch (error) {
	   console.log(error.message);
	}
 };
 
 
 export const createAnswer= (answer) => async (dispatch) => {
	try {
	   
	   console.log(answer);
	   const { data } = await api.createAnswer(answer);
 
	   dispatch({ type: "CREATE_QUESTION", payload: data });
	} catch (error) {
		console.log(error.message);
	}
 };