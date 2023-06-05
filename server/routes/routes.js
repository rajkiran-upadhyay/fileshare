import express from 'express';
import { uploadImage ,downloadImage} from '../controller/image-controller.js';//.js compulsory
import upload from '../utils/upload.js';

const router = express.Router();


router.post('/upload',upload.single('file'),uploadImage)//1st arg: endpoint , 2nd arg: middleware and 3rd arg : callback
//upload.single('file') now you will get file property inside request object
router.get('/file/:fileId',downloadImage)

export default router;