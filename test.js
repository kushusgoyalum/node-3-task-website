const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema(
    {
        type: { type: String, required: true },
        collectionName: { type: String, default: "" }
    }
)

module.exports = collections = mongoose.model("collection", collectionSchema)

