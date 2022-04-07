import mongooose from "mongoose";

const scoreSchema = mongooose.Schema({
    username: String,
    test_id: String,
    answer_id: String,
    scores: [
        { 
            
            question_id: String,
            functionNameScore : String,
            updatedFunctionNameScore: String,
            constraintScore: String,
            updatedConstraintScore: String,
            testcases: [
                {testcase: String, score: String, teacherScore: String, expectedAnswer: String, actualAnswer: String}
            ],
            comments: String,
            
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