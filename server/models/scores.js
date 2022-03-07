import mongooose from "mongoose";

const scoreSchema = mongooose.Schema({
    username: String,
    answer_id: String,
    scores: [
        { 
            question_id : {
                functionName: Boolean,
                testcases: [
                    { testCaseNumber: String, testcase: String, pass: Boolean}
                ]
            }
        }
    ],
    createdAt: {
        type: Date,
        default: new Date()
    }},
    { collection: "scores" }
);

const Score = mongooose.model("Scores", scoreSchema);

export default Score;