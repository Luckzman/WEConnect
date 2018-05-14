import superagent from 'superagent';
import models from '../models/index';

const User = {
  signIn(req, res) {
    models.User.findOne({
      where: {
        name: req.body.name,
      },
    })
      .then(user => res.status(200).json('successful signin'))
      .catch(error => res.status(404).json(error));
  },
  signUp(req, res) {
    const newUser = {
      id: req.body.id,
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      phone: req.body.phone,
    };
    models.User.create(newUser)
      .then(user => res.status(201).json({
        user,
        message: `${newUser.name} signup`,
      }))
      .catch(error => res.status(400).json({
        error,
      }));
  },
  listUser(req, res) {
    models.User.findAll({
      include: {
        model: models.Business,
        as: 'userBusiness',
      },
    })
      .then(user => res.status(200).json(user))
      .catch(error => res.status(404).json(error));
  },
};

export default User;
