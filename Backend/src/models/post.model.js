const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    image: String,
    caption: String
})

const postModel = mongoose.model("post", postSchema); //post here is the modelName/Collection Name
//models attatch methods to schema like find() create() updateOne()
module.exports = postModel;

/*
    Cluster (yt-backend)
   └── Database (instagram-clone)
         └── Collection (post)
               └── Document (Each Object)
*/