import { Router } from 'express'
import { getEmployees,
         getEmployee,
         createEmployees,
         updateEmployees,
         deleteEmployees,
        } from '../controllers/employees.controller.js'

const router = Router()

// Obtenemos toda la inf. que esta guardad en la DB
router.get('/employees', getEmployees);

// Obtenemos un id con su inf. correspondiente en la DB
router.get('/employees/:id', getEmployee);

router.post('/employees', createEmployees);

router.patch('/employees/:id', updateEmployees);

router.delete('/employees/:id', deleteEmployees);

export default router