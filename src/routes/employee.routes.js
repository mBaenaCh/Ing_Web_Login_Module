import { Router } from 'express';
import * as employeeController from '../controllers/employee.controller';
import { decryptToken } from '../middlewares/token.middleware';
import { verifyAdmin } from '../middlewares/admin.middleware';

const router = Router();

router.post('/', decryptToken, verifyAdmin, employeeController.createEmployee);
router.get('/', employeeController.getEmployees);
router.get('/:employeeId', employeeController.getEmployeeById);
router.put('/:employeeId', decryptToken, employeeController.updateEmployeeById);
router.delete('/:employeeId', decryptToken, verifyAdmin, employeeController.deleteEmployeeById);

export default router;
