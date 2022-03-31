import { Request, Response } from 'express';

import { JsonPlaceholderService } from '../services';

import statusCode from '../statusCode';

const getAllUsers = async (req: Request, res: Response) => {
  const jsonPlaceholderService = new JsonPlaceholderService();

  try {
    const response = await jsonPlaceholderService.getAllUsers();

    if (response.status !== statusCode.successfulRequest) {
      return res.status(response.status).json({
        message: response.statusText,
      });
    }

    res.json({ users: response.data });
  } catch (error) {
    res.status(statusCode.resourceNotFound).json({ error });
  }
};

const getPhotosByUserId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const jsonPlaceholderService = new JsonPlaceholderService();

  try {
    const response = await jsonPlaceholderService.getPhotosByUserId(id);

    if (response.status !== statusCode.successfulRequest) {
      return res.status(response.status).json({
        message: response.statusText,
      });
    }

    res.json({ photos: response.data });
  } catch (error) {
    res.status(statusCode.resourceNotFound).json({ error });
  }
};

export { getAllUsers, getPhotosByUserId };
