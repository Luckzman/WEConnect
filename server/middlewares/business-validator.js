const errorMessage = (res, message) => res.status(400).json({
  message,
});

const Business = {
  Business(req, res, next) {
    req.check('name', 'name is required').notEmpty();
    req.check('product', 'email is required').notEmpty();
    req.check('phone', 'phone is required').notEmpty();
    req.check('category', 'category is required').notEmpty();
    req.check('address', 'address is required').notEmpty();
    req.check('location', 'location is required').notEmpty();

    const errors = req.validationErrors();
    console.log(errors);
    if (errors) { return errorMessage(res, errors[0].msg); }

    next();
  },
  paramsChecker(req, res, next) {
    req.check('id', 'params id must be id').isInt();

    const errors = req.validationErrors();
    console.log(errors);
    if (errors) { return errorMessage(res, errors[0].msg); }

    next();
  },
};

export default Business;
