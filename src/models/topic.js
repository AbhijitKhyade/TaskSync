import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    }
}, { timestamps: true });

export const Topic = mongoose.models.Topic || mongoose.model('Topic', topicSchema);