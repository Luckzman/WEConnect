import bcrypt from 'bcrypt';
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
    models.User.find({
      where: {
        email: req.body.email,
      },
    })
      .then((user) => {
        if (user) {
          res.status(409).json('mail exist');
        } else {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              return res.status(500).json(err);
            } else {
              const newUser = {
                id: req.body.id,
                name: req.body.name,
                password: hash,
                email: req.body.email,
                phone: req.body.phone,
              };
              models.User.create(newUser)
                .then((newuser) => {
                  res.status(201).json({
                    newuser,
                    message: `${newUser.name} signup`,
                  });
                })
                .catch(error => res.status(400).json({
                  error,
                }));
            }
          });
        }
      });
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
