import mongoose from 'mongoose';
import request from 'supertest';

import statusCode from '../../config/statusCode';
import { app, apiBase, serverApp } from '../../config/testConfig';

import RequestData from '../../models/RequestData';

const api = request(app);

describe('DELETE /requests/:id', () => {
  test(`should respond with a status code 400 when there's a invalid id`, async () => {
    const invalidId = 'asd5sa8';

    const response = await api
      .delete(`${apiBase}/requests/${invalidId}`)
      .send();

    expect(response.statusCode).toBe(statusCode.badRequest);
  });

  test(`should respond with a status code 404 when there's not a register with that id`, async () => {
    const validId = '6248e6a097bb81a74dd76458';

    const response = await api.delete(`${apiBase}/requests/${validId}`).send();

    expect(response.statusCode).toBe(statusCode.resourceNotFound);
  });

  test('should delete a request', async () => {
    await api.get(`${apiBase}/users`).send();

    const requestDb = await RequestData.findOne({}, { id: true });
    const requestDbId = requestDb?.id;

    const response = await api
      .delete(`${apiBase}/requests/${requestDbId}`)
      .send();

    expect(response.statusCode).toBe(statusCode.successfulRequest);
  });

  afterAll(() => {
    serverApp.close();
    mongoose.connection.close();
  });
});
