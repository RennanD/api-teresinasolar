require('dotenv').config()
const database = require('mongoose')

database.connect(process.env.DB_NAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})



module.exports = database