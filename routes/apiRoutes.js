const router = require("express").Router();
const Profile = require("../models/profile");
const Post = require("../models/posts");
const { json } = require("express");

//profile 
router.post("/profile", ({body}, res) => {
    Profile.create(body)
      .then(dbProfile => {
        res.json(dbProfile);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });

  router.post("/profile/bulk", ({body}, res) => {
    Profile.insertMany(body)
      .then(dbProfile => {
        res.json(dbProfile);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });


router.get("/profile", (req, res) => {
Profile.find({}).sort({date: -1})
      .then(dbProfile => {
        res.json(dbProfile);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });

  //posts
  router.post("/posts", (req, res) => {
    let postData = {text: req.body.text, image:req.body.image, user: req.body.user}
    Post.insertMany(postData)
      .then(dbPost => {
        res.json(dbPost);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });

  router.post("/posts/bulk", ({body}, res) => {
    Post.insertMany(body)
      .then(dbPost => {
        res.json(dbPost);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });


router.get("/home", (req, res) => {
Post.find({}).sort({date: -1})
      .then(dbPost => {
        res.json(dbPost);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });

  router.get("/userPost/:username", (req, res) => {
    console.log(req.params.username)
    // Post.find({"user":req.data.username}).sort({date: -1})
    //       .then(dbPost => {
    //         res.json(dbPost);
    //       })
    //       .catch(err => {
    //         res.status(404).json(err);
    //       });
      });

  module.exports = router;