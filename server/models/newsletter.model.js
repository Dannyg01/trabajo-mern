const mongoose = require("mongoose")

const NewsletterSchema = mongoose.Schema({
    email: { 
        type: String,
        unique: true,
    }
})
NewsletterSchema.plugin(mongoosePaginate)


module.exports = mongoose.model("Newsletter", NewsletterSchema)