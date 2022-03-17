const mongoose = require('mongoose');

// mongoose schema
const postSchema = mongoose.Schema({
    title: String,
    category: String,
    content: String,
    image: String,
    created: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model("Post", postSchema);