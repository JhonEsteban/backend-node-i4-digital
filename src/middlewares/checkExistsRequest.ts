import { Request, Response, NextFunction } from 'express';

import RequestData from '../models/RequestData';
import statusCode from '../statusCode';

const checkExistsRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const requestDb = await RequestData.findById(id);

    if (!requestDb) {
      return res.status(statusCode.resourceNotFound).json({
        ok: false,
        message: `Doesn't exist a user with that identifier`,
      });
    }

    next();
  } catch (error) {
    res.status(statusCode.internalServerError).json({ error });
  }
};

export default checkExistsRequest;
