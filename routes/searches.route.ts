import { Router } from 'express';
import { check } from 'express-validator';
// Controllers
import { totalSearch } from '../controllers/searches';
// Helpers
// Middlewares
import { validateFields, validateJWT } from '../middlewares';

/*
  PATH: '/api/searches'
*/
const router: Router = Router();


router.get( '/:term', [
  validateJWT,
  validateFields
], totalSearch );


export default router;
