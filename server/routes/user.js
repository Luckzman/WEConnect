import express from 'express';
import userController from '../controller/user';
import userValidator from '../middlewares/user-validator';

const user = express.Router();
user.post('/signin', userValidator.userSignin, userController.signIn);
user.post('/signup', userValidator.userSignup, userController.signUp);
user.get('/', userController.listUser);

export default user;
