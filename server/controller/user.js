import users from '../model/user';

const user = {
  signIn(req, res) {
    const newUser = {
      name: req.body.name,
      password: req.body.password,
    };
    for (let i = 0; i < users.length; i += 1) {
      if (newUser.name === users[i].name && newUser.password === users[i].password) {
        return res.status(200).json(`${newUser.name} successfully signin`);
      }
    }
    return res.status(400).json('Signin not successful');
  },
  signUp(req, res) {
    const newUser = {
      id: req.body.id,
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      phone: req.body.phone,
    };
    users.push(newUser);
    res.status(201).json({
      user: newUser,
      message: `${newUser.name} successfully signup`,
    });
  },
  listUser(req, res) {
    res.status(200).json(users);
  },
};

export default user;
