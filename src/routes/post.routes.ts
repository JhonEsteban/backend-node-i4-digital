import { Router } from 'express';

import { getAllPosts } from '../controllers/post.controller';

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Post:
 *      type: object
 *      properties:
 *        userId:
 *          type: number
 *        id:
 *          type: number
 *        title:
 *          type: string
 *        body:
 *          type: string
 */

/**
 * @swagger
 * tags:
 *  - name: Posts
 */

/**
 * @swagger
 * /posts:
 *  get:
 *    summary: Get a post list
 *    tags: [Posts]
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Post'
 */
router.get('/', getAllPosts);

export default router;
