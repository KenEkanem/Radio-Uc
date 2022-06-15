import express from 'express'
import api from '../controller/apis/api'

const router = express.Router()
router.use(api)

export default router