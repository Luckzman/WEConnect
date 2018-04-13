import express from 'express';
import businessController from '../controller/business';

const business = express.Router();
business.get('/', businessController.listAll);
business.post('/', businessController.create);
business.get('/:id', businessController.listSingle);
business.put('/:id', businessController.update);
business.delete('/:id', businessController.delete);

export default business;
