import { Request, Response } from 'express';

import RequestDataService from '../services/RequestData.service';

import statusCode from '../statusCode';

const requestDataService = new RequestDataService();

const getAllRequests = async (req: Request, res: Response) => {
  try {
    const requests = await requestDataService.getAllRequests();

    res.json({ requests });
  } catch (error) {
    res.status(statusCode.internalServerError).json({ error });
  }
};

const updateRequestById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await requestDataService.updateRequestById(id, req.body);

    res.json({
      message: 'Request updated',
    });
  } catch (error) {
    res.status(statusCode.internalServerError).json({ error });
  }
};

const deleteRequestById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await requestDataService.deleteRequestById(id);

    res.json({
      message: 'Request deleted',
    });
  } catch (error) {
    res.status(statusCode.internalServerError).json({ error });
  }
};

export { getAllRequests, updateRequestById, deleteRequestById };
