import Employee from '../models/Employee';

export const getEmployeeByIdRepository = async employeeId => {
  try {
    return await Employee.findById(employeeId);
  } catch (error) {
    throw new DatabaseException('Lo sentimos, ha ocurrido un problema');
  }
};

export const getEmployeeByUsernameRepository = async username => {
  try {
    return await Employee.findOne({ username });
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
    throw new DatabaseException('Lo sentimos, ha ocurrido un problema');
  }
};

export const comparePassword = async (password, encryptedPassword) => {
  try {
    return await Employee.comparePassword(password, encryptedPassword);
  } catch (error) {
    throw new Error();
  }
};

export const encodePassword = async password => {
  try {
    return await Employee.encodePassword(password);
  } catch (error) {
    throw new Error();
  }
};
