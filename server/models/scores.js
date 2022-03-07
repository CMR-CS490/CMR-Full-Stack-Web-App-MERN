import mongooose from "mongoose";

const scoreSchema = mongooose.Schema({
    username: String,
    answer_id: String,
    scores: [
        { 
            question_id : {
                functionName: Boolean,
                testcases: [
                    {testcase: String, pass: Boolean}
                ],
                comments: String,
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