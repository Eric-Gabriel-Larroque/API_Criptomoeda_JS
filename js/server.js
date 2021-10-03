const {key} = require('./key')
const axios = require('axios')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

app.get('/', async (req,res) => {
    
    const {data} = 
    await axios(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=${key}`)
    return res.json(data)
})

app.listen(18300)