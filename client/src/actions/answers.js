import * as api from "../api";

export const getAnswers = (testID) => async (dispatch) => {
	try {
	   const { data } = await api.getAnswers(testID);
 
	   dispatch({ type: "FETCH_ALL_ANSWERS", payload: data });
	} catch (error) {
	   console.log(error.message);
	}
 };
 
 
 export const createAnswer= (answer) => async (dispatch) => {
	try {
	   
	   console.log(answer);
	   const { data } = await api.createAnswer(answer);
 
	   dispatch({ type: "CREATE_ANSWER", payload: data });
	} catch (error) {
		console.log(error.message);
	}
 };