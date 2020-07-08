
import express, { response, request } from 'express';
import PoinstController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';
import multer from 'multer';
import multerConfig from './config/multer';
import {celebrate, Joi} from 'celebrate';

const routes = express.Router();
const upload = multer(multerConfig);
const poinstController = new PoinstController();
const itemsController = new ItemsController();


routes.use(express.json());
routes.get('/items', itemsController.index);
routes.get('/points/:id', poinstController.show);
routes.get('/points', poinstController.index);

routes.post(
    '/points', 
    upload.single('image'),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.string().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required(),
        })
    },{
        abortEarly: false,
    }),
    poinstController.create);


export default routes 