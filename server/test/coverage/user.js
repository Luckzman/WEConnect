import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../index';

chai.use(chaiHttp);
const should = chai.should();
const user = {
  id: 1,
  name: 'Tobi',
  password: 'tobi',
  email: 'tobi@gmail.com',
  phone: '09022211122',
};

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
  it('it should signin users', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send({
        name: 'Tobi',
        password: 'tobi',
      })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
