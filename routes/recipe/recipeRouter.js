var express = require('express');
var router = express.Router();
var recipeController = require("./controller/recipeController")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/get-all-recipes',function(req, res, next) {
    recipeController.getAllRecipe(function(err,payload){
    if (err){
      res.status(500).json({message:"error",error:err})
    }
    else{
      res.json({message : "success", data : payload})
    }
  })  
});

router.post("/create-recipe", function (req, res) {
    recipeController.createRecipe(req.body, function (err, payload) {
      if (err) {
        res.status(500).json({ message: "Error", error: err });
      } else {
        res.json({ message: "success", data: payload });
      }
    });
  });

router.put('/update-recipe-by-id/:id', function(req, res) {
    recipeController.updateRecipeByID(req.body, function (err, payload) {
        if (err) {
          res.status(500).json({ message: "Error", error: err });
        } else {
          res.json({ message: "success", data: payload });
        }
      });

});

router.delete("/delete-recipe-by-id/:id", function (req, res) {
    userController.deleteRecipeByID(req.params.id, function (err, deletedPayload) {
      if (err) {
        res.status(500).json({ message: "Error", error: err });
      } else {
        res.json({ message: "success", data: deletedPayload });
      }
    });
  });
module.exports = router;
