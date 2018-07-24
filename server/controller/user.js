import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import models from '../models/index';

const User = {
  signIn(req, res) {
    models.User.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then((user) => {
        if (!user) {
          return res.status(404).json({
            status: 'fail',
            message: 'Authentication failed',
          });
        } else {
          bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (result) {
              const token = jwt.sign(
                {
                  email: user.email,
                  id: user.id,
                },
                process.env.SECRET,
                {
                  expiresIn: '1h',
                },
              );
              return res.status(200).json({
                status: 'success',
                data: {
                  message: 'Authentication successful',
                  token,
                },
              });
            } else {
              return res.status(400).json({
                status: 'fail',
                message: 'Authentication failed',
              });
            }
          });
        }
      })
      .catch(error => res.status(404).json(error));
  },
  signUp(req, res) {
    models.User.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then((user) => {
        if (user) {
          res.status(409).json({
            status: 'fail',
            message: 'User already exist',
          });
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
                    status: 'success',
                    data: {
                      message: 'Account created successfully',
                      user: newuser,
                    },
                  });
                })
                .catch(error => res.status(400).json({
                  status: 'error',
                  message: 'Unable to communicate with database',
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
        include: [{
          model: models.Review,
          as: 'BusinessReviews',
        }],
      },
    })
      .then(user => res.status(200).json(user))
      .catch(error => res.status(404).json(error));
  },
};

export default User;
