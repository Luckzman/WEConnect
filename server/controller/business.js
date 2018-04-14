//  import business from '../model/business';

const Business = {
  listAll(req, res) {
    res.json({
      message: 'get request successful',
    });
  },
  create(req, res) {
    res.json({
      message: 'post request successful',
    });
  },
  listSingle(req, res) {
    res.json({
      message: 'get single business request successful',
    });
  },
  update(req, res) {
    res.json({
      message: 'update request successful',
    });
  },
  delete(req, res) {
    res.json({
      message: 'delete request successful',
    });
  },
};

export default Business;
