import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

import statusCode from '../statusCode';

const validateFields = (req: Request, res: Response, next: NextFunction) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(statusCode.badRequest).json({
        errors: errors.mapped(),
      });
    }

    next();
  } catch (error) {
    res.status(statusCode.internalServerError).json({ error });
  }
};

export default validateFields;
