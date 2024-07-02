import mongoose from "mongoose";
         
const topicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }
});


const TopicSchema = mongoose.models.TopicSchema || mongoose.model('TopicSchema', topicSchema);
export default TopicSchema;