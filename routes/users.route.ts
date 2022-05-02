import { Router } from 'express';
// Controllers
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser
} from '../controllers/users';

/*
  PATH: '/api/users'
*/
const router: Router = Router();

router.get( '/', getUsers );
router.get( '/:id', getUser );
router.put( '/:id', updateUser );
router.delete( '/:id', deleteUser );

export default router;
