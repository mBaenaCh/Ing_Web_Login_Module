import jwt from 'jsonwebtoken';
import * as authService from '../services/auth.service';
import BaseException from '../exceptions/baseException';
import config from '../config';

export const signUp = async (req, res) => {
  try {
    const { username, password } = req.body;
    const { employeeId } = req.params;
    const updatedEmployee = await authService.signUpService(username, password, employeeId);
    return res.status(200).json(updatedEmployee);
  } catch (error) {
    if (error instanceof BaseException) return res.status(error.getStatusCode()).json({ message: error.getErrorMessage() });
    return res.status(500).json({ message: 'Lo sentimos, ha ocurrido un problema' });
  }
};

export const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const loginInfo = await authService.signInService(username, password);
    return res.status(200).json(loginInfo);
  } catch (error) {
    if (error instanceof BaseException) return res.status(error.getStatusCode()).json({ message: error.getErrorMessage() });
    return res.status(500).json({ message: 'Lo sentimos, ha ocurrido un problema' });
  }
};

export const verifyTokenController = (req, res) => {
  try {
    const { id, role } = req.auth;
    return res.status(200).json({ id, role });
  } catch (error) {
    return res.status(500).json({ message: 'Lo sentimos, ha ocurrido un problema' });
  }
};

export const generateGuestToken = (req, res) => {
  try {
    const { guest_id } = req.body;
    const token = jwt.sign({ id: guest_id, role: 'Guest' }, config.JWT_SECRET, {
      expiresIn: 86400,
    });
    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Lo sentimos, ha ocurrido un problema' });
  }
};
