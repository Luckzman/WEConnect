process.env.NODE_ENV = 'test';

import chai from 'chai';
import chaiHttp from 'chai-http';
import fs from 'fs';
import app from '../../../index';

chai.should();
chai.use(chaiHttp);

const businessTest = {
  name: 'abc, Nig.Ltd',
  product: 'interstate transport',
  address: '5 abc street, Lagos',
  phone: '0802233445566',
  category: 'transport',
  location: 'Lagos',
  image: 'image',
};

const loginDetails = {
  email: 'tobi@gmail.com',
  password: 'tobi',
};

const user = {
  name: 'Tobi',
  password: 'tobi',
  email: 'tobi@gmail.com',
  phone: '09022211122',
};

const reviews = {
  name: 'alex',
  review: 'nice company',
  email: 'alex@gmail.com',
  country: 'nigeria',
};
const filename = 'x.png';
const boundary = Math.random();
/*
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

describe('/SignUp User', () => {
  it('it should signup users', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(user)
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });
});

describe('/SignIn User', () => {
  it('it should signin and check token', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(loginDetails)
      .end((err, res) => {
        res.should.have.status(200);
        // res.body.should.have.property('token');
        done();
      });
  });
});

describe('/Create Business', () => {
  it('login user should be able to create business', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(loginDetails)
      .end((err, res) => {
        console.log('this was run the login part');
        res.should.have.status(200);
        const { token } = res.body.data;
        chai.request(app)
          .post('/api/v1/business')
          .set('Authorization', `Bearer ${token}`)
          // .set('Content-Type', `multipart/form-data; boundary=${boundary}`)
          // .write(`--${boundary}\r\n`)
          // .write(`Content-Disposition: form-data; name="image"; filename="${filename}"\r\n`)
          // .write('Content-Type: image/png\r\n')
          // .write('\r\n')
          // .write(fs.readFileSync(`server/test/coverage/${filename}`))
          // .write(`\r\n--${boundary}--`)
          .send(businessTest)
          .end((err, res) => {
            res.should.have.status(201);
            done(); // Don't forget the done callback to indicate we're done!
          });
      });
  });
});

describe('/GET:id Business', () => {
  it('it should get a single business detail', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(loginDetails)
      .end((err, res) => {
        res.should.have.status(200);
        const { token } = res.body.data;
        chai.request(app)
          .get('/api/v1/business/1')
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
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

describe('/POST Review', () => {
  it('It should be able to post reviews', (done) => {
    const id = 1;
    chai.request(app)
      .post(`/api/v1/business/${id}/reviews`)
      .send(reviews)
      .end((err, res) => {
        res.should.have.status(201);
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

describe('/Update Business', () => {
  it('login user should be able to create business', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(loginDetails)
      .end((err, res) => {
        res.should.have.status(200);
        const { token } = res.body.data;
        chai.request(app)
          .put('/api/v1/business/1')
          .set('Authorization', `Bearer ${token}`)
          // .set('Content-Type', `multipart/form-data; boundary=${boundary}`)
          // .write(`--${boundary}\r\n`)
          // .write(`Content-Disposition: form-data; name="image"; filename="${filename}"\r\n`)
          // .write('Content-Type: image/png\r\n')
          // .write('\r\n')
          // .write(fs.readFileSync(`server/test/coverage/${filename}`))
          // .write(`\r\n--${boundary}--`)
          .send(businessTest)
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
  });
});

describe('/Delete Business', () => {
  it('login user should be able to delete business', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(loginDetails)
      .end((err, res) => {
        res.should.have.status(200);
        const { token } = res.body.data;
        chai.request(app)
          .delete('/api/v1/business/1')
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
  });
});

describe('/Index Route', () => {
  it('it should get a response from index route', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

