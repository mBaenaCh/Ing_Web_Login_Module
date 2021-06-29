import Employee from '../models/Employee';
import jwt from 'jsonwebtoken';

export const signUp = async (req, res) => {
  try {
    const { username, password } = req.body;
    const { employeeId } = req.params;
    const employeeFound = await Employee.findOne({ _id: employeeId });
    if (!employeeFound) return res.status(400).json({ message: 'User not found' });
    const encryptedPassword = await Employee.encodePassword(password);
    const updatedObject = {
      username,
      password: encryptedPassword,
    };
    const updatedEmployee = await Employee.findByIdAndUpdate(employeeFound._id, updatedObject, {
      new: true,
    });
    return res.status(200).json(updatedEmployee);
  } catch (error) {
    return res.status(500).json({ message: 'Lo sentimos, ha ocurrido un problema' });
  }
};

export const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const employeeFound = await Employee.findOne({ username });
    if (!employeeFound) return res.status(400).json({ message: 'User not found' });

    const matchPassword = await Employee.comparePassword(password, employeeFound.password);
    if (!matchPassword) return res.status(401).json({ message: 'Password or username is invalid' });

    const token = jwt.sign({ id: employeeFound._id }, 'nursery_pet-api', {
      expiresIn: 86400,
    });

    return res.status(200).json({ token: token });
  } catch (error) {
    return res.status(500).json({ message: 'Lo sentimos, ha ocurrido un problema' });
  }
};
