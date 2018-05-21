import express from 'express';
import businessController from '../controller/business';
import businessValidator from '../middlewares/business-validator';
// import upload from '../middlewares/imageUpload';
import AuthCheck from '../middlewares/Auth-Check';

const business = express.Router();
business.get('/', businessController.listAll);
business.post('/', AuthCheck, businessValidator.Business, businessController.create);
business.get('/:id', AuthCheck, businessValidator.paramsChecker, businessController.listSingle);
business.put('/:id', AuthCheck, businessValidator.paramsChecker, businessController.update);
business.delete('/:id', AuthCheck, businessValidator.paramsChecker, businessController.delete);
business.post('/:id/reviews', businessValidator.paramsChecker, businessController.createReviews);
business.get('/:id/reviews', businessValidator.paramsChecker, businessController.listReviews);

export default business;
