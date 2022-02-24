import mongooose from "mongoose";

const questionSchema = mongooose.Schema({
    topic: String,
    question: String,
    difficulty: String,
    testcase: [{ input: String, output: String}],
});

const question = mongooose.model('questions', questionSchema);

export default question;