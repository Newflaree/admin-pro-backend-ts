import { Router } from 'express';
// Controllers
import { collectionSearch, totalSearch } from '../controllers/searches';
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

router.get( '/:collection/:term', [
  validateJWT,
  validateFields
], collectionSearch );

export default router;
