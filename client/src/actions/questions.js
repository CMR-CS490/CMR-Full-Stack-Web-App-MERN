import * as api from "../api";

// Action Creators (Funcitons that return an actions. (An action returns a type and a payload.))

export const getQuestions = () => async (dispatch) => {
   try {
      const { data } = await api.getQuestions();

      dispatch({ type: "FETCH_ALL", payload: data }); // payload is all our tests
   } catch (error) {
      console.log(error.message);
   }
};
export const createQuestion = (question) => async (dispatch) => {
   try {
      const { data } = await api.createQuestion(question);

      //dispatch({ type: "CREATE", payload: data });
   } catch (error) {
       console.log(error.message);
   }
};
