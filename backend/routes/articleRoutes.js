const router = require("express").Router();
const Article = require("../models/articleModel");

router.post("/", async (req, res) => {
    const newArticle = new Article({ ...req.body })

    try {
        const savedArticle = await newArticle.save();
        res.json(savedArticle);
    } catch(error) {
        console.log(error);
    }
});

router.get("/", async(req, res) => {
    const artciles = await Article.find();
    res.json(artciles);
})

router.get("/:id", async (req, res) => {
    const article = await Article.findById(req.params.id);
    res.json(article);
})

module.exports  = router;