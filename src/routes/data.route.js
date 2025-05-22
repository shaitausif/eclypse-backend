import {Router} from 'express';
import { getProductImages, getTextData } from '../controllers/data.controller.js';


const router = Router();

router.route('/images').get(getProductImages)
router.route('/text-data').get(getTextData)


export default router;