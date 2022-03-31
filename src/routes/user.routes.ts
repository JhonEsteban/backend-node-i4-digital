import { Router } from 'express';

import { getAllUsers, getPhotosByUserId } from '../controllers/user.controller';

const router = Router();

router.get('/', getAllUsers);

router.get('/:id/photos', getPhotosByUserId);

export default router;
