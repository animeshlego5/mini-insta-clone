const express = require('express');
const multer = require('multer'); //multer is middleware to parse form-data and makes them avail on req.file
const uploadFile = require('./services/storage.service'); //online cloud storage service
const postModel = require('./models/post.model');
const cors = require('cors');

const app = express();
app.use(cors()); //middleware to allow cross-origin requests for api calls
app.use(express.json()); //we use app.use for global middlewares

const upload = multer({
    storage: multer.memoryStorage()
});

app.post('/create-post', upload.single("image"), async (req, res) => { //we inserted upload.single in b/w so its only a route-middleware, not globally applied
    console.log(req.body);
    console.log(req.file);
    const result = await uploadFile(req.file.buffer);

    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })
    return res.status(201).json({
        message: "Post created successfully",
        post
    })
})

app.get('/posts', async (req, res) => {
    const posts = await postModel.find();

    return res.status(200).json({
        message: "Posts fetched successfully",
        posts
    })
})

module.exports = app;