import * as api from "../api";

// Action Creators (Funcitons that return an actions. (An action returns a type and a payload.))

export const getQuestions = () => async (dispatch) => {
   try {
      const { data } = await api.getQuestions();

      dispatch({ type: "FETCH_ALL_QUESTION", payload: data }); // payload is all our tests
   } catch (error) {
      console.log(error.message);
   }
};

export const getQuestion = (questionID) => async (dispatch) => {
   try {
      const { data } = await api.getQuestion(questionID);

      dispatch({ type: "FETCH_QUESTION", payload: data[0] });
   } catch (error) {
      console.log(error.message);
   }
};


export const createQuestion = (question, testcases) => async (dispatch) => {
   try {
      question.testcases = testcases;
      console.log(question);
      const { data } = await api.createQuestion(question);

      dispatch({ type: "CREATE_QUESTION", payload: data });
   } catch (error) {
       console.log(error.message);
   }
};


