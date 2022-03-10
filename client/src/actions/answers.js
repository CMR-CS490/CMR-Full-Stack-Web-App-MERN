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

 export const getAnswer = (answerID) => async (dispatch) => {
	try {
		const { data } = await api.getAnswer(answerID);
		console.log("Sending one answer from the DB from actions: ", data)
 
		dispatch({ type: "FETCH_ALL_ANSWERS", payload: data });
	} catch (error) {
		console.log(error.message);
	}
 };


 export const getAnswerStudent = (username, testID) => async (dispatch) => {
	try {
		const { data } = await api.getAnswerStudent(username, testID);
		console.log("Sending one answer from the DB from actions: ", data)
 
		dispatch({ type: "FETCH_ALL_ANSWERS", payload: data });
	} catch (error) {
		console.log(error.message);
	}
 };