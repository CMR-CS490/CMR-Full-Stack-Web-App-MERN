import * as api from "../api";

// Action Creators (Funcitons that return an actions. (An action returns a type and a payload.))

export const getScores = (username, testID) => async (dispatch) => {
   try {
      const { data } = await api.getScores(username, testID);

      dispatch({ type: "FETCH_SCORE", payload: data }); // payload is all our tests
   } catch (error) {
      console.log(error.message);
   }
};


export const updateScore = (username, testID, newScore) => async (dispatch) => {
   try {
      const { data } = await api.updateScores(username, testID, newScore);

      dispatch({ type: 'UPDATE_SCORE', payload: data});
   } catch (error) {
      console.log(error);
   }
}

export const updateIndividualScores = (scoreID, questionID, updatedIndividualScore) => async (dispatch) => {
   try {
      const { data } = await api.updateIndividualScores(scoreID, questionID, updatedIndividualScore);

      dispatch({ type: 'UPDATE_SCORE', payload: data});
   } catch (error) {
      console.log(error);
   }
}


export const gradeTest = (testID) => async (dispatch) => {
   try {
      
      const { data } = await api.gradeTest(testID);

      dispatch({ type: 'FETCH_SCORE', payload: data});
   } catch (error) {
      console.log(error);
   }
}

export const publishScores = (testID) => async (dispatch) => {
   try {
      
      const { data } = await api.publishScores(testID);

      dispatch({ type: 'FETCH_SCORE', payload: data});
   } catch (error) {
      console.log(error);
   }
}

