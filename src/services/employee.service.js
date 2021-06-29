import axios from 'axios';

export const newEmployeeService = async (email, employeeId, name) => {
  try {
    await axios.post('http://localhost:4200/api/employee', {
      employee_id: employeeId,
      name,
      employee_email: email,
    });
  } catch (error) {
    throw new Error();
  }
};
