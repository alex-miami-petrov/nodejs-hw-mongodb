import { registerUser, loginUser } from '../services/auth.js';

export const registerUserCtrl = async (req, res) => {
  const user = await registerUser(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully registered user!',
    data: user,
  });
};

export const loginUserCtrl = async (req, res) => {
  const { email, password } = req.body;

  const user = await loginUser(email, password);

  res.status(200).json({
    status: 200,
    message: 'Login successfully!',
  });
};
