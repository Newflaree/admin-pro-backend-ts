import { Router } from 'express';
import { check } from 'express-validator';
// Controllers
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser
} from '../controllers/users';
// Helpers
import { idValidation } from '../helpers/db/users.helper';
// Middlewares
import { validateFields, validateJWT } from '../middlewares';

/*
  PATH: '/api/users'
*/
const router: Router = Router();

router.get( '/', [
  validateJWT,
  validateFields
], getUsers );

router.get( '/:id', [
  validateJWT,
  check( 'id', 'Invalid id' ).isMongoId(),
  check( 'id' ).custom( idValidation ),
  validateFields
], getUser );

router.put( '/:id', [
  validateJWT,
  check( 'id', 'Invalid id' ).isMongoId(),
  check( 'id' ).custom( idValidation ),
  validateFields
], updateUser );

router.delete( '/:id', [
  validateJWT,
  check( 'id', 'Invalid id' ).isMongoId(),
  check( 'id' ).custom( idValidation ),
  validateFields
], deleteUser );

export default router;
