import { Request, Response, NextFunction } from 'express';

import mongoose from 'mongoose';

import statusCode from '../config/statusCode';

const validateRequestId = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(statusCode.badRequest).json({
        ok: false,
        message: 'Identifier not valid',
      });
    }

    next();
  } catch (error) {
    res.status(statusCode.internalServerError).json({ error });
  }
};

export default validateRequestId;
