import * as api from "../api";

// Action Creators (Funcitons that return an actions. (An action returns a type and a payload.))

export const getTests = () => async (dispatch) => {
   try {
      const { data } = await api.fetchTests();

      dispatch({ type: "FETCH_ALL", payload: data }); // payload is all our tests
   } catch (error) {
      console.log(error.message);
   }
};

export const createTest = (test) => async (dispatch) => {
   try {
      const { data } = await api.createTest(test);

      dispatch({ type: "CREATE", payload: data });
   } catch (error) {
       console.log(error.message);
   }
};
