import jwt from 'jsonwebtoken';
import * as authRepository from '../repository/auth.repository';
import EmptyFieldException from '../exceptions/emptyFieldException';
import UserNotFoundException from '../exceptions/userNotFoundException';
import WrongPasswordException from '../exceptions/wrongPasswordException';

export const signUpService = async (username, password, employeeId) => {
  if (username === '' || password === '') throw new EmptyFieldException('La información de registro debe estar completa');

  const employeeFound = await authRepository.getEmployeeByIdRepository(employeeId);
  if (!employeeFound) throw new UserNotFoundException('El usuario no se encuentra registrado');

  const encryptedPassword = await authRepository.encodePassword(password);

  return await authRepository.updateEmployeeRepository(employeeFound._id, {
    username,
    password: encryptedPassword,
  });
};

export const signInService = async (username, password) => {
  const employeeFound = await authRepository.getEmployeeByUsernameRepository(username);
  if (!employeeFound) throw new UserNotFoundException('El usuario no se encuentra registrado');

  const matchPassword = await authRepository.comparePassword(password, employeeFound.password);
  if (!matchPassword) throw new WrongPasswordException('Usuario o contraseña incorrecto');

  const token = jwt.sign({ id: employeeFound._id, role: employeeFound.role }, 'nursery_pet-api', {
    expiresIn: 86400,
  });

  return token;
};
