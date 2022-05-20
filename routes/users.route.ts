import { Router } from 'express';
// Controllers
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser
} from '../controllers/users';
import {validateFields, validateJWT} from '../middlewares';

/*
  PATH: '/api/users'
*/
const router: Router = Router();

router.get( '/', [
  validateJWT,
  validateFields
], getUsers );

router.get( '/:id', getUser );

router.put( '/:id', updateUser );

router.delete( '/:id', deleteUser );

export default router;
