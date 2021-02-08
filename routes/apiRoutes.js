const router = require("express").Router();
const Profile = require("../models/profile");
const Post = require("../models/posts");
const User = require("../models/user");

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
    let postData = {text: req.body.text, image:req.body.image, user: req.body.user, likes: 0}
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

// Post display on homepage
router.get("/home", (req, res) => {
Post.find({}).sort({date: -1})
      .then(dbPost => {
        res.json(dbPost);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });
// Post display on profile page
  router.get("/userPost/:username", (req, res) => {
    let searchUsername = req.params.username;
    Post.find({"user": searchUsername}).sort({date: -1})
          .then(dbPost => {
            res.json(dbPost);
          })
          .catch(err => {
            res.status(404).json(err);
          });
      });
    
  router.delete("/deletePost/:id", (req, res) => {
    let searchid = req.params.id;
    Post.deleteOne({_id: searchid})
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.status(404).json(err);
    })
  })

  // Users
  router.get("/findAllUsers", (req, res) => {
    User.find({})
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.status(404).json(err);
    })
  })

  router.get("/userDataSearch/:searchName", (req, res) => {
    let search = req.params.searchName
    Post.find({user: search})
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.status(404).json(err);
    })
  })

  module.exports = router;