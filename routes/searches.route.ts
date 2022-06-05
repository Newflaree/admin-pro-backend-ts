import { Router } from 'express';
// Controllers
import { collectionSearch, searchInactives } from '../controllers/searches';
// Middlewares
import { validateFields, validateJWT } from '../middlewares';

/*
  PATH: '/api/searches'
*/
const router: Router = Router();

router.get( '/:collection', [
  validateJWT,
  validateFields
], searchInactives );

router.get( '/:collection/:term', [
  validateJWT,
  validateFields
], collectionSearch );

export default router;
