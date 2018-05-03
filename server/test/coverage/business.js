process.env.NODE_ENV = 'test';

import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../index';
import models from '../../models/index';

// const app = api(models);
const should = chai.should();
chai.use(chaiHttp);
const businessTest = {
  name: 'abc, Nig.Ltd',
  product: 'interstate transport',
  address: '5 abc street, Lagos',
  phone: '0802233445566',
  category: 'transport',
  location: 'Lagos',
  image: 'url',
};

const reviews = {
  name: 'alex',
  review: 'nice company',
  email: 'alex@gmail.com',
  country: 'nigeria',
};

describe('/POST Business', () => {
  it('It should be able to post business', (done) => {
    chai.request(app)
      .post('/api/v1/business')
      .send(businessTest)
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });
});

describe('/GET Business', () => {
  it('It should be able to get business', (done) => {
    chai.request(app)
      .get('/api/v1/business')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

describe('/GET:id Business', () => {
  it('it should get a single business detail', (done) => {
    chai.request(app)
      .get('/api/v1/business/1')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

describe('UPDATE /business:id', () => {
  it('it should update a business', (done) => {
    chai.request(app)
      .put('/api/v1/business/1')
      .send(businessTest)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

// describe('GET /business/1/reviews', () => {
//   it('it should get reviews of a business', (done) => {
//     chai.request(app)
//       .get('/api/v1/business/1/reviews')
//       .end((err, res) => {
//         res.should.have.status(200);
//         done();
//       });
//   });
// });

// describe('/POST Business', () => {
//   it('It should be able to post reviews', (done) => {
//     const id = 1; // have issues when i change the id to another figure other than 2,
//     // yet to find out why
//     chai.request(app)
//       .post(`/api/v1/business/${id}/reviews`)
//       .send(reviews)
//       .end((err, res) => {
//         res.should.have.status(201);
//         done();
//       });
//   });
// });

describe('/GET Business params', () => {
  it('it should get business location', (done) => {
    // const location = 'lagos';
    chai.request(app)
      .get(`/api/v1/business?location=${businessTest.location}`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

describe('/GET Business params', () => {
  it('it should get business location', (done) => {
    // const location = 'lagos';
    chai.request(app)
      .get(`/api/v1/business?location=${businessTest.location}`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

describe('/GET Business params', () => {
  it('it should get business category', (done) => {
    chai.request(app)
      .get(`/api/v1/business?category=${businessTest.category}`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

describe('DELETE /business:id', () => {
  it('it should delete a business', (done) => {
    chai.request(app)
      .delete('/api/v1/business/1')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

