import { Request, Response } from 'express';

import { JsonPlaceholderService } from '../services';

import statusCode from '../config/statusCode';

const getAllPosts = async (req: Request, res: Response) => {
  const jsonPlaceholderService = new JsonPlaceholderService();

  try {
    const response = await jsonPlaceholderService.getAllPosts();

    if (response.status !== statusCode.successfulRequest) {
      return res.status(response.status).json({
        message: response.statusText,
      });
    }

    res.json({ posts: response.data });
  } catch (error) {
    res.status(statusCode.resourceNotFound).json({ error });
  }
};

export { getAllPosts };
