var express = require('express');
var router = express.Router();
const UserModel= require('./users')
const postModel = require('./posts')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get("/user", async function(req, res){
   try {
      let existingUser = await UserModel.findOne({ username: 'iqra' });

      if (existingUser) {
         return res.status(400).send("Username already exists");
      }

      let newUser = await UserModel.create({
         username: "iqra",
         password: "Zohfdfaibkhan",
         posts: [],
         email: "Zohaffdibalid@gmail.com",
         fullName: "Zohfddfdaib ali dayo"
      });

      res.send(newUser);
   } catch (error) {
      res.status(500).send(error.message);
   }
});


router.get("/post", async function(req, res){
   try {
     let newPost = await PostModel.create({
      postText: "Assalam o Alaikum",
      user: "65dec337227882d2b8e6b4b3"
     });

     let user = await UserModel.findOne({_id:"65dec337227882d2b8e6b4b3"});
     user.posts.push(post._id);
     await user.save();
     res.send("Done")
     res.send(newPost);
   } catch (error) {
     res.status(500).send(error.message);
   }
});




module.exports = router;
