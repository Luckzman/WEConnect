const user = {
  signIn(req, res) {
    res.json({
      message: 'user signin successfully',
    });
  },
  signUp(req, res) {
    res.json({
      message: 'user signup successfully',
    });
  },
};

export default user;
