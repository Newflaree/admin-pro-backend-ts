import { Router } from 'express';
import { check } from 'express-validator';
// Controllers
import {
  createDoctor,
  deleteDoctor,
  getDoctor,
  getDoctors,
  updateDoctor
} from '../controllers/doctors';
// Helpers
// Middlewares
import { validateFields, validateJWT } from '../middlewares';

/*
  PATH: '/api/doctors'
*/
const router: Router = Router();

router.post( '/', [
  validateJWT,
  validateFields
], createDoctor );

router.get( '/', [
  validateJWT,
  validateFields
], getDoctors );

router.get( '/:id', [
  validateJWT,
  validateFields
], getDoctor );

router.put( '/:id', [
  validateJWT,
  validateFields
], updateDoctor );

router.delete( '/:id', [
  validateJWT,
  validateFields
], deleteDoctor );

export default router;
