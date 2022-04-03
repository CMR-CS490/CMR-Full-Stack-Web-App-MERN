import * as api from "../api";

// Action Creators (Funcitons that return an actions. (An action returns a type and a payload.))

export const getTests = () => async (dispatch) => {
   try {
      const { data } = await api.fetchTests();

      dispatch({ type: "FETCH_ALL_TEST", payload: data }); // payload is all our tests
   } catch (error) {
      console.log(error.message);
   }
};

export const getTest = (testID) => async (dispatch) => {
   try {
      const { data } = await api.fetchTest(testID);

      // console.log("/actions/test.js | getTest data:", data);

      dispatch({ type: "FETCH_ALL_TEST", payload: data }); // payload is all our tests
   } catch (error) {
      console.log(error.message);
   }
};

export const getStudentTests = () => async (dispatch) => {
   try {
      const { data } = await api.fetchStudentTests();

      dispatch({ type: "FETCH_ALL_TEST", payload: data }); // payload is all our tests
   } catch (error) {
      console.log(error.message);
   }
};

export const createTest = (test, questionsData) => async (dispatch) => {
   try {
      test.questions = questionsData;
      const { data } = await api.createTest(test);

      dispatch({ type: "CREATE_TEST", payload: data });
   } catch (error) {
       console.log(error.message);
   }
};

export const updateTest = (id, test) => async (dispatch) => {
   try {
      const { data } = await api.updateTest(id, test);

      dispatch({ type: 'UPDATE_TEST', payload: data});
   } catch (error) {
      console.log(error);
   }
}