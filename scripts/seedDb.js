const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/artsketcher_db"
);

const userSeed = [
    {
        user: "test",
        bio: "test bio blablablabla"
    }
];

db.Post.remove({})
.then(() => db.Post.collection.insertMany(userSeed))
.then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
