import { Router } from 'express';
import { check } from 'express-validator';

import {
  checkExistsRequest,
  validateRequestId,
  validateFields,
} from '../middlewares';

import {
  getAllRequests,
  updateRequestById,
  deleteRequestById,
} from '../controllers/request.controller';

const router = Router();

router.get('/', getAllRequests);

router.put(
  '/:id',
  [
    validateRequestId,
    checkExistsRequest,
    check('methodUsed', 'The method used is required').not().isEmpty(),
    check('dataReturned', 'The data returned is required').isArray(),
    validateFields,
  ],
  updateRequestById
);

router.delete(
  '/:id',
  [validateRequestId, checkExistsRequest],
  deleteRequestById
);

export default router;
