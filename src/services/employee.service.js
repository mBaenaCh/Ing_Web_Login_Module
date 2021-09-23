import axios from 'axios';
import * as employeeRepository from '../repository/employee.repository';
import EmptyFieldException from '../exceptions/emptyFieldException';
import config from '../config';

export const hireEmployeeService = async employee => {
  const { name, last_name, email, role, document } = employee;

  if (name === '' || last_name === '' || email === '' || role === '' || document === '')
    throw new EmptyFieldException('La información del empleado debe esta completa, no deje campos vacios');

  const hiredEmployee = await employeeRepository.saveEmployeeRepository(employee);
  await employeeEmailService(hiredEmployee._id, hiredEmployee.name, hiredEmployee.email);
  return hiredEmployee;
};

export const getEmployeesService = async () => {
  return await employeeRepository.getEmployeesRepositroy();
};

export const getEmployeeService = async employeeId => {
  return await employeeRepository.getEmployeeByIdRepository(employeeId);
};

export const updateEmployeeService = async (employeeId, employee) => {
  const { name, last_name, email, role, document } = employee;

  if (name === '' || last_name === '' || email === '' || role === '' || document === '')
    throw new EmptyFieldException('La información del empleado debe esta completa, no deje campos vacios');

  return employeeRepository.updateEmployeeRepository(employeeId, employee);
};

export const deleteEmployeeService = async employeeId => {
  return await employeeRepository.deleteEmployeeRepository(employeeId);
};

const employeeEmailService = async (employee_id, name, employee_email) => {
  try {
    await axios.post(`${config.EMAIL_SERVICE}/api/employee`, {
      employee_id,
      name,
      employee_email,
    });
  } catch (error) {
    throw new Error('Lo sentimos, ha ocurrido un problema');
  }
};
