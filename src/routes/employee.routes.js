import { Router } from 'express';
import * as employeeController from '../controllers/employee.controller';

const router = Router();

router.post('/', employeeController.createEmployee);
router.get('/', employeeController.getEmployees);
router.get('/:employeeId', employeeController.getEmployeeById);
router.put('/:employeeId', employeeController.updateEmployeeById);
router.delete('/:employeeId', employeeController.deleteEmployeeById);

export default router;
