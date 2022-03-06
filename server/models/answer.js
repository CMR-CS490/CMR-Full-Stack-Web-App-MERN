import mongooose from "mongoose";

const testAnswerSchema = mongooose.Schema({
    username: String,
    test_id: String,
    questions: [{ question_id : String, answer: String}],
    createdAt: {
        type: Date,
        default: new Date()
    }},
    { collection: "answers" }
);

const TestAnswer = mongooose.model("TestAnswer", testAnswerSchema);

export default TestAnswer;

// Question should have a point system next to each question object ID