import express from 'express'
import cors from 'cors'
import router from './routes/router'
import { connect } from './controller/dbConnect/db'

connect()
const app = express()

app.use(express.json())
app.use(cors())
app.use(router)
const PORT = 9000

app.listen(PORT, ()=>{
    console.log('server running on port '+PORT)
})