const Post = require('../models/Posts')

module.exports = {
    async index(req, res) {
        const posts = await Post.find().sort('-createdAt')
        return res.json(posts)
    },
    async store(req, res) {
        //console.log(req.file)
        //res.json({ok: true })
        const { author, place, description, hashtags } = req.body;
        const { filename: image } = req.file;

        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image
        })
        return res.json(post)
    }
}