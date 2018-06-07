import models from '../models/index';

const Business = {
  listAll(req, res) {
    const { location, category } = req.query;
    if (location) {
      models.Business.findAll({
        where: {
          location: req.query.location.toLowerCase(),
        },
      })
        .then((business) => {
          if (!business) {
            return res.status(404).json('Business not found based on location');
          }
          return res.status(200).json(business);
        })
        .catch(error => res.status(404).json(error));
    } else if (category) {
      models.Business.findAll({
        where: {
          category: req.query.category.toLowerCase(),
        },
      })
        .then((business) => {
          if (!business) {
            return res.status(404).json('Business not found');
          }
          return res.status(200).json(business);
        })
        .catch(error => res.status(404).json(error));
    } else {
      models.Business.findAll({
        include: [
          {
            model: models.Review,
            as: 'BusinessReviews',
          },
        ],
      })
        .then((business) => {
          if (!business) {
            return res.status(404).send('No Business Available');
          }
          return res.status(200).json(business);
        })
        .catch(error => res.status(404).json(error));
    }
  },
  create(req, res) {
    const newBusiness = {
      name: req.body.name,
      product: req.body.product,
      address: req.body.address,
      phone: req.body.phone,
      category: req.body.category.toLowerCase(),
      location: req.body.location.toLowerCase(),
      image: req.body.filename,
      userId: req.userData.id,
    };
    models.Business.create(newBusiness)
      .then(businesses => res.status(201).json({
        message: 'business successfully created',
        business: businesses,
      }))
      .catch(error => res.status(400).json({
        message: 'Bad Request',
        error,
      }));
  },
  listSingle(req, res) {
    models.Business.find({
      where: {
        id: req.params.id,
        userId: req.userData.id,
      },
      include: {
        model: models.Review,
        as: 'BusinessReviews',
      },
    })
      .then((business) => {
        if (!business) {
          return res.status(404).json('Not found');
        }
        return res.status(200).json(business);
      })
      .catch(error => res.status(400).json(error));
  },
  update(req, res) {
    models.Business.find({
      where: {
        id: req.params.id,
        userId: req.userData.id,
      },
    })
      .then((business) => {
        if (!business) {
          return res.status(404).json('Business not found');
        }
        business.update({
          name: req.body.name,
          product: req.body.product,
          address: req.body.address,
          phone: req.body.phone,
          location: req.body.location,
          category: req.body.category,
          image: req.body.image,
        });
        return res.status(200).send(business);
      })
      .catch(error => res.status(400).json(error));
  },
  delete(req, res) {
    models.Business.find({
      where: {
        id: req.params.id,
        userId: req.userData.id,
      },
    })
      .then((business) => {
        if (!business) {
          return res.status(404).json('business not found');
        }
        business.destroy()
          .then(() => res.status(200).send({ message: 'Todo deleted successfully.' }));
      })
      .catch(error => res.status(400).json({
        message: 'delete request not successful',
        error,
      }));
  },
  createReviews(req, res) {
    const review = {
      name: req.body.name,
      review: req.body.review,
      email: req.body.email,
      country: req.body.country,
      businessId: req.params.id,
    };
    models.Review.create(review)
      .then(reviews => res.status(201).json({
        message: 'review created',
        review: reviews,
      }))
      .catch(error => res.status(400).json(error));
  },
  listReviews(req, res) {
    models.Review.findAll({
      where: {
        businessId: req.params.id,
      },
    })
      .then(review => res.status(200).json(review))
      .catch(error => res.status(404).json(error));
  },
};

export default Business;
