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
            return res.status(404).json({
              status: 'fail',
              message: 'Business location not found',
            });
          }
          return res.status(200).json({
            status: 'success',
            data: {
              business,
            },
          });
        })
        .catch(error => res.status(404).json({
          status: 'error',
          message: 'Unable to connect with database',
          data: {
            error,
          },
        }));
    } else if (category) {
      models.Business.findAll({
        where: {
          category: req.query.category.toLowerCase(),
        },
      })
        .then((business) => {
          if (!business) {
            return res.status(404).json({
              status: 'fail',
              message: 'Business category not found',
            });
          }
          return res.status(200).json({
            status: 'success',
            data: {
              business,
            },
          });
        })
        .catch(error => res.status(404).json({
          status: 'error',
          message: 'Unable to connect with database',
          data: {
            error,
          },
        }));
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
            return res.status(404).json({
              status: 'fail',
              message: 'No Business Available',
            });
          }
          return res.status(200).json({
            status: 'success',
            data: {
              business,
            },
          });
        })
        .catch(error => res.status(404).json({
          status: 'error',
          message: 'unable to connect to database',
          data: {
            error,
          },
        }));
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
      image: req.body.image,
      userId: req.userData.id,
    };
    models.Business.create(newBusiness)
      .then(businesses => res.status(201).json({
        status: 'success',
        data: {
          message: 'business successfully created',
          business: businesses,
        },
      }))
      .catch(error => res.status(400).json({
        status: 'error',
        message: 'Unable to connect to database',
        data: {
          error,
        },
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
          return res.status(404).json({
            status: 'fail',
            message: 'business not found',
          });
        }
        return res.status(200).json({
          status: 'success',
          data: {
            business,
          },
        });
      })
      .catch(error => res.status(400).json({
        status: 'error',
        message: 'Unable to connect to database',
        data: {
          error,
        },
      }));
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
          return res.status(404).json({
            status: 'fail',
            message: 'Business not found',
          });
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
        return res.status(200).json({
          status: 'success',
          data: {
            message: 'Business successfully updated',
            business,
          },
        });
      })
      .catch(error => res.status(400).json({
        status: 'error',
        message: 'Unable to connect to database',
        data: {
          error,
        },
      }));
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
          .then(() => res.status(200).json({
            status: 'success',
            message: 'Business deleted successfully.',
          }));
      })
      .catch(error => res.status(400).json({
        status: 'error',
        message: 'Unable to connect to database',
        data: {
          error,
        },
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
        status: 'success',
        data: {
          message: 'review created',
          review: reviews,
        },
      }))
      .catch(error => res.status(400).json({
        status: 'error',
        message: 'Unable to connect to database',
        data: {
          error,
        },
      }));
  },
  listReviews(req, res) {
    models.Review.findAll({
      where: {
        businessId: req.params.id,
      },
    })
      .then(review => res.status(200).json({
        status: 'success',
        data: {
          review,
        },
      }))
      .catch(error => res.status(404).json({
        status: 'error',
        message: 'Unable to connect to database',
        data: {
          error,
        },
      }));
  },
};

export default Business;
