const errorMessage = (res, message) => res.status(400).json({
  message,
});

const User = {
  userSignup(req, res, next) {
    req.check('name', 'name is required').notEmpty();
    req.check('email', 'email is required').notEmpty();
    req.check('email', 'input must be email').isEmail();
    req.check('password', 'password is required').notEmpty();
    req.check('phone', 'phone is required').notEmpty();

    const errors = req.validationErrors();
    console.log(errors);
    if (errors) { return errorMessage(res, errors[0].msg); }

    next();
  },
  userSignin(req, res, next) {
    req.check('email', 'email is required').notEmpty();
    req.check('email', 'input must be email').isEmail();
    req.check('password', 'password is required').notEmpty();

    const errors = req.validationErrors();
    console.log(errors);
    if (errors) { return errorMessage(res, errors[0].msg); }

    next();
  },
};

export default User;

