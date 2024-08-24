import { GetCard ,AddCard } from "../Controller/CardController.js";
import  express from 'express'

const router = express.Router()

router.get('/' , GetCard)
router.post('/', AddCard)

export default router