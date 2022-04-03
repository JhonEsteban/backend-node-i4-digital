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
  downloadRequestsInExcelFile,
} from '../controllers/request.controller';

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    ExcelFile:
 *      type: object
 *      properties:
 *        file:
 *          type: string
 *        format:
 *          type: string
 *    SuccessRequest:
 *      type: object
 *      properties:
 *        message:
 *          type: string
 *    RequestData:
 *      type: object
 *      properties:
 *        methodUsed:
 *          type: string
 *        dataReturned:
 *          type: array
 *          items:
 *            oneOf:
 *              - $ref: '#/components/schemas/User'
 *              - $ref: '#/components/schemas/UserPhoto'
 *              - $ref: '#/components/schemas/Post'
 *        createdAt:
 *          type: string
 *        updateddAt:
 *          type: string
 *    RequestUpdate:
 *      type: object
 *      properties:
 *        methodUsed:
 *          type: string
 *        dataReturned:
 *          type: array
 *          items:
 *            oneOf:
 *              - $ref: '#/components/schemas/User'
 *              - $ref: '#/components/schemas/UserPhoto'
 *              - $ref: '#/components/schemas/Post'
 */

/**
 * @swagger
 *  tags:
 *    - name: Requests
 */

/**
 * @swagger
 * /requests:
 *  get:
 *    summary: Get a request list
 *    tags: [Requests]
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/RequestData'
 */
router.get('/', getAllRequests);

/**
 * @swagger
 * /requests/download:
 *  get:
 *    summary: Download excel file in format base64
 *    tags: [Requests]
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/ExcelFile'
 */
router.get('/download', downloadRequestsInExcelFile);

/**
 * @swagger
 * /requests/{requestId}:
 *  put:
 *    summary: Update a request by id
 *    tags: [Requests]
 *    parameters:
 *    - in: path
 *      name: requestId
 *      type: number
 *      required: true
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/RequestUpdate'
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/SuccessRequest'
 */
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

/**
 * @swagger
 * /requests/{requestId}:
 *  delete:
 *    summary: Delete request by id
 *    tags: [Requests]
 *    parameters:
 *    - in: path
 *      name: requestId
 *      type: number
 *      required: true
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/SuccessRequest'
 */
router.delete(
  '/:id',
  [validateRequestId, checkExistsRequest],
  deleteRequestById
);

export default router;
