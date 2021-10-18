const cors = require('cors')
const express = require('express')
const axios = require('axios')
const app = express()
app.use(cors())
const dotenv = require('dotenv')
dotenv.config({path: '../.env'})
const key = process.env.KEY

app.get('/', async (req,res) => {

const {data} = 
await axios(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=${key}`)
return res.json(data)
})

app.listen(process.env.PORT ||3000)
