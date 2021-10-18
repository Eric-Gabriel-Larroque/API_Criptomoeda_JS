const {key} = require('./key')
const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())

app.get('/', async (req,res) => {

const {data} = 
await axios(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=${key}`)
return res.json(data)
})

app.listen(PORT,() => console.log(`Listen at PORT ${PORT}`))
