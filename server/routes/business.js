import express from 'express';
import businessController from '../controller/business';
import businessValidator from '../middlewares/business-validator';
// import upload from '../middlewares/imageUpload';
import AuthCheck from '../middlewares/Auth-Check';

const business = express.Router();
business.get('/', businessController.listAll);
business.post('/', AuthCheck, businessValidator.Business, businessController.create);
business.get('/:id', AuthCheck, businessController.listSingle);
business.put('/:id', AuthCheck, businessController.update);
business.delete('/:id', AuthCheck, businessController.delete);
business.post('/:id/reviews', businessController.createReviews);
business.get('/:id/reviews', businessController.listReviews);

export default business;
