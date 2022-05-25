import { Router } from 'express';
import { check } from 'express-validator';
// Controllers
import { fileUpload } from '../controllers/uploads';
// Helpers
// Middlewares
import { validateFields, validateJWT } from '../middlewares';

/*
  PATH: '/api/uploads'
*/
const router: Router = Router();

router.put( '/:collection/:id', [
  validateJWT,
  check( 'id', 'Invalid mongo id' ).not().isMongoId(),
  validateFields
], fileUpload );

export default router;
