import mongooose from "mongoose";

const testSchema = mongooose.Schema({
    title: String,
    description: String,
    creator: String,
    selectedFile: String,
    visible: Boolean,
    questions: [{ question_id : String, question_score: String}],
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const Test = mongooose.model('Test', testSchema);

export default Test

// Question should have a point system next to each question object ID