const mongoose = require('mongoose')
const {DB_USER, DB_PASSWORD, DB_HOST, API_VERSION, IP_SERVER } = require("./constanst") 
const app = require("./app")

const PORT = process.env.PORT || 3000

mongoose.set('strictQuery',false)

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/`,
    (error) => {
        if (error) throw error
        app.listen(PORT, () => {

            console.log("################")
            console.log("################")
            console.log("## PRINCESS ##")
            console.log("################")
            console.log("################")
            console.log(`http://${IP_SERVER}:${PORT}/api/${API_VERSION}`)
        })
       
        
    }
)