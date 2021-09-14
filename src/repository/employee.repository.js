import Employee from '../models/Employee';
import DatabaseException from '../exceptions/databaseException';

export const saveEmployeeRepository = async employee => {
  try {
    const newEmployee = new Employee(employee);
    return await newEmployee.save();
  } catch (error) {
    console.log(error);
    throw new DatabaseException('Lo sentimos, ha ocurrido un problema');
  }
};

export const getEmployeesRepositroy = async () => {
  try {
    return await Employee.find();
  } catch (error) {
    throw new DatabaseException('Lo sentimos, ha ocurrido un problema');
  }
};

export const getEmployeeByIdRepository = async employeeId => {
  try {
    return await Employee.findById(employeeId);
  } catch (error) {
    throw new DatabaseException('Lo sentimos, ha ocurrido un problema');
  }
};

export const updateEmployeeRepository = async (employeeId, employee) => {
  try {
    return await Employee.findByIdAndUpdate(employeeId, employee, {
      new: true,
    });
  } catch (error) {
    console.log(error);
    throw new DatabaseException('Lo sentimos, ha ocurrido un problema');
  }
};

export const deleteEmployeeRepository = async employeeId => {
  try {
    return await Employee.findByIdAndDelete(employeeId);
  } catch (error) {
    throw new DatabaseException('Lo sentimos, ha ocurrido un problema');
  }
};
