import { Router } from 'express';

import { getAllUsers, getPhotosByUserId } from '../controllers/user.controller';

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *        name:
 *          type: string
 *        username:
 *          type: string
 *        email:
 *          type: string
 *        address:
 *          type: object
 *          properties:
 *            street:
 *              type: string
 *            suite:
 *              type: string
 *            city:
 *              type: string
 *            zipcode:
 *              type: string
 *            geo:
 *              type: object
 *              properties:
 *                lat:
 *                  type: string
 *                lng:
 *                  type: string
 *        phone:
 *          type: string
 *        website:
 *          type: string
 *        company:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *            catchPhrase:
 *              type: string
 *            bs:
 *              type: string
 *    UserPhoto:
 *      type: object
 *      properties:
 *        albumId:
 *          type: number
 *        id:
 *          type: number
 *        title:
 *          type: string
 *        url:
 *          type: string
 *        thumbnailUrl:
 *          type: string
 */

/**
 *  @swagger
 *  tags:
 *    - name: Users
 *    - name: Posts
 *    - name: Requests
 */

/**
 * @swagger
 * /users:
 *  get:
 *    summary: Get a user list
 *    tags: [Users]
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 */
router.get('/', getAllUsers);

/**
 * @swagger
 * /users/{userId}/photos:
 *  get:
 *    summary: Get a user photo list by user id
 *    tags: [Users]
 *    parameters:
 *    - in: path
 *      name: userId
 *      type: number
 *      required: true
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/UserPhoto'
 */
router.get('/:id/photos', getPhotosByUserId);

export default router;
