import Employee from '../models/Employee';
import { newEmployeeService } from '../services/employee.service';

export const createEmployee = async (req, res) => {
  try {
    const { name, last_name, email, username } = req.body;
    const newEmployee = new Employee({ name, last_name, email, username });
    const savedEmployee = await newEmployee.save();
    await newEmployeeService(email, savedEmployee._id, name);
    return res.status(201).json(savedEmployee);
  } catch (error) {
    return res.status(500).json({ message: 'Lo sentimos, ha ocurrido un problema' });
  }
};

export const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    return res.status(200).json(employees);
  } catch (error) {
    return res.status(500).json({ message: 'Lo sentimos, ha ocurrido un problema' });
  }
};

export const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.employeeId);
    return res.status(200).json(employee);
  } catch (error) {
    return res.status(500).json({ message: 'Lo sentimos, ha ocurrido un problema' });
  }
};

export const updateEmployeeById = async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(req.params.employeeId, req.body, {
      new: true,
    });
    return res.status(200).json(updatedEmployee);
  } catch (error) {
    return res.status(500).json({ message: 'Lo sentimos, ha ocurrido un problema' });
  }
};

export const deleteEmployeeById = async (req, res) => {
  try {
    const { employeeId } = req.params;
    await Employee.findByIdAndDelete(employeeId);
    return res.status(204).json({ message: 'Employee deleted' });
  } catch (error) {
    return res.status(500).json({ message: 'Lo sentimos, ha ocurrido un problema' });
  }
};
