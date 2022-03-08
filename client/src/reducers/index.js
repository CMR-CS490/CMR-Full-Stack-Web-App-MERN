import { combineReducers } from "redux";

import tests from "./tests";
import questions from "./questions";
import answers from "./answers";
import scores from "./scores";

export default combineReducers({
   tests, questions, answers, scores
});
