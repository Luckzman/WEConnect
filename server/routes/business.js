import express from 'express';
import businessController from '../controller/business';
import upload from '../middlewares/imageUpload';

const business = express.Router();
business.get('/', businessController.listAll);
business.post('/', upload.single('image'), businessController.create);
business.get('/:id', businessController.listSingle);
business.put('/:id', upload.single('image'), businessController.update);
business.delete('/:id', businessController.delete);
business.post('/:id/reviews', businessController.createReviews);
business.get('/:id/reviews', businessController.listReviews);

export default business;
