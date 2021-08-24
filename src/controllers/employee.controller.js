import * as employeeService from '../services/employee.service';
import BaseException from '../exceptions/baseException';

export const createEmployee = async (req, res) => {
  try {
    const employee = req.body;
    const hiredEmployee = await employeeService.hireEmployeeService(employee);
    return res.status(201).json(hiredEmployee);
  } catch (error) {
    if (error instanceof BaseException) return res.status(error.getStatusCode()).json({ message: error.getErrorMessage() });
    return res.status(500).json({ message: 'Lo sentimos, ha ocurrido un problema' });
  }
};

export const getEmployees = async (_, res) => {
  try {
    const employees = await employeeService.getEmployeesService();
    return res.status(200).json(employees);
  } catch (error) {
    if (error instanceof BaseException) return res.status(error.getStatusCode()).json({ message: error.getErrorMessage() });
    return res.status(500).json({ message: 'Lo sentimos, ha ocurrido un problema' });
  }
};

export const getEmployeeById = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const employee = await employeeService.getEmployeeService(employeeId);
    return res.status(200).json(employee);
  } catch (error) {
    if (error instanceof BaseException) return res.status(error.getStatusCode()).json({ message: error.getErrorMessage() });
    return res.status(500).json({ message: 'Lo sentimos, ha ocurrido un problema' });
  }
};

export const updateEmployeeById = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const employee = req.body;
    const updatedEmployee = await employeeService.updateEmployeeService(employeeId, employee);
    return res.status(200).json(updatedEmployee);
  } catch (error) {
    if (error instanceof BaseException) return res.status(error.getStatusCode()).json({ message: error.getErrorMessage() });
    return res.status(500).json({ message: 'Lo sentimos, ha ocurrido un problema' });
  }
};

export const deleteEmployeeById = async (req, res) => {
  try {
    const { employeeId } = req.params;
    await employeeService.deleteEmployeeService(employeeId);
    return res.status(200).json({ message: 'El empleado ha sido eleminado' });
  } catch (error) {
    if (error instanceof BaseException) return res.status(error.getStatusCode()).json({ message: error.getErrorMessage() });
    return res.status(500).json({ message: 'Lo sentimos, ha ocurrido un problema' });
  }
};
