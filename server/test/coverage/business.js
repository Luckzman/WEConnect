process.env.NODE_ENV = 'test';

import chai from 'chai';
import chaiHttp from 'chai-http';
import fs from 'fs';
import app from '../../../index';
import models from '../../models/index';

const should = chai.should();
chai.use(chaiHttp);
const businessTest = {
  name: 'abc, Nig.Ltd',
  product: 'interstate transport',
  address: '5 abc street, Lagos',
  phone: '0802233445566',
  category: 'transport',
  location: 'Lagos',
  image: 'uploads\\12_bg.jpg',
};

const reviews = {
  name: 'alex',
  review: 'nice company',
  email: 'alex@gmail.com',
  country: 'nigeria',
};
/* var filename = 'x.png'
  , boundary = Math.random()

request(app)
  .post('/g/' + myDraftGallery._id)
  .set('Content-Type', 'multipart/form-data; boundary=' + boundary)
  .write('--' + boundary + '\r\n')
  .write('Content-Disposition: form-data; name="image"; filename="'+filename+'"\r\n')
  .write('Content-Type: image/png\r\n')
  .write('\r\n')
  .write(fs.readFileSync('test/'+filename))
  .write('\r\n--' + boundary + '--')
  .end(function(res){
    res.should.have.status(200)
    done()
  }) */

describe('/POST Business', () => {
  it('It should be able to post business', (done) => {
    chai.request(app)
      .post('/api/v1/business')
      // .type('form')
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
      // .type('form')
      // .attach('image', fs.readFileSync('./template/img/12_bg.jpg'), '12_bg.jpg')
      .send(businessTest)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

describe('GET /business/1/reviews', () => {
  it('it should get reviews of a business', (done) => {
    chai.request(app)
      .get('/api/v1/business/1/reviews')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

describe('/POST Review', () => {
  it('It should be able to post reviews', (done) => {
    const id = 1;
    chai.request(app)
      .post(`/api/v1/business/${id}/reviews`)
      // .type('form')
      .send(reviews)
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });
});

describe('/GET Business params', () => {
  it('it should get business location', (done) => {
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

describe(' /', () => {
  it('it should get a response from index route', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

