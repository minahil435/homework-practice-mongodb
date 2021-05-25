
const Recipe = require("../model/Recipe")

module.exports = {
    getAllRecipe : function(callback){
        Recipe.find({}, function (err, payload) {
            if(err){callback(err,nul)}
            else{callback(null,payload)}
        })
    },

    createRecipe: function (body, callback) {
        let createdRecipe = new Recipe({
              Name: body.Name,
        //   lastName: body.lastName,
        //   password: body.password,
        //   email: body.email,
        //   username: body.username,
        });
        createdRecipe.save(function (err, payload) {
          if (err) {
            callback(err, null);
          } else {
            callback(null, payload);
          }
        });
      },

      updateRecipeByID: function (id, body, callback) {

        Recipe.findByIdAndUpdate(
            { _id: id },
            body,
            { new: true },
            function (err, updatedPayload) {
              if (err) {
                callback(err, null);
              } else {
                callback(null, updatedPayload);
              }
            }
          );
      },


    deleteRecipeByID:function(id,callback){
        Recipe.findByIdAndRemove({ _id: id },function(err,payload){
         
            if (err) {
                callback(err, null);
              } else {
                callback(null, updatedPayload);
              }
        })
    }
} 
