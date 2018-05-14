import express from 'express';
import userController from '../controller/user';

const user = express.Router();
user.post('/signin', userController.signIn);
user.post('/signup', userController.signUp);
user.get('/', userController.listUser);

export default user;
