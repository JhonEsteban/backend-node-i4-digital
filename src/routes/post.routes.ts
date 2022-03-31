import { Router } from 'express';

import { getAllPosts } from '../controllers/post.controller';

const router = Router();

router.get('/', getAllPosts);

export default router;