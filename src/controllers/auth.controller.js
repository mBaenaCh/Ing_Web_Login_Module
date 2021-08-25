import * as authService from '../services/auth.service';
import BaseException from '../exceptions/baseException';

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
    const token = await authService.signInService(username, password);
    return res.status(200).json({ token: token });
  } catch (error) {
    if (error instanceof BaseException) return res.status(error.getStatusCode()).json({ message: error.getErrorMessage() });
    return res.status(500).json({ message: 'Lo sentimos, ha ocurrido un problema' });
  }
};
