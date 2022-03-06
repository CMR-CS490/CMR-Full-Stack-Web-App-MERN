import { combineReducers } from "redux";

import tests from "./tests";
import questions from "./questions";
import answers from "./answers";

export default combineReducers({
   tests, questions, answers
});
