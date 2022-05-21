import { Router } from 'express';
import { check } from 'express-validator';
// Controllers
import { 
  createHospital,
  deleteHospital,
  getHospital,
  getHospitals,
  updateHospital
} from '../controllers/hospitals';
// Helpers
// Middlewares
import { validateFields, validateJWT } from '../middlewares';

/*
  PATH: '/api/auth'
*/
const router: Router = Router();

router.post( '/', [
  validateJWT,
  validateFields
], createHospital );

router.get( '/', [
  validateJWT,
  validateFields
], getHospitals );

router.get( '/:id', [
  validateJWT,
  validateFields
], getHospital );

router.put( '/:id', [
  validateJWT,
  validateFields
], updateHospital );

router.delete( '/:id', [
  validateJWT,
  validateFields
], deleteHospital );

export default router;
