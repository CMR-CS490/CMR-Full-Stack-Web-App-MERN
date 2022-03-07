import mongooose from "mongoose";

const scoreSchema = mongooose.Schema({
    username: String,
    answer_id: String,
    scores: [
        { 
            question_id : {
                functionNameScore : String,
                testcases: [
                    {testcase: String, score: String}
                ],
                comments: String,
            }
        }
    ],
    totalScore: String, 
    createdAt: {
        type: Date,
        default: new Date()
    },
    isPublished: Boolean,

},
    
    { collection: "scores" }
);

const Score = mongooose.model("Scores", scoreSchema);

export default Score;