import mongooose from "mongoose";

const questionSchema = mongooose.Schema({
    topic: String,
    question: String,
    difficulty: String,
    functionName: String,
    constraintName: String,
    testcases: [{ input: String, output: String}],
}, { collection: "questions" }
);

const question = mongooose.model('questions', questionSchema);

export default question;