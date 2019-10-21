var mongoose = require("mongoose");

var schema = mongoose.Schema;


var ArticleSchema = new Schema({

    title: {
        type: String,
        required: true
    },


    link:{
        
       type: String,
       required: true 

    },

    note: {
        type: Schema.Type.ObjectId,
        ref: "Note"
    }
});

var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;
