import mongoose from 'mongoose';
import request from 'supertest';

import statusCode from '../../config/statusCode';
import { app, apiBase, serverApp } from '../../config/testConfig';

import RequestData from '../../models/RequestData';

const api = request(app);

describe('UPDATE /requests/:id', () => {
  test(`should respond with a status code 400 when there's a invalid id`, async () => {
    const invalidId = 'sdas665';
    const response = await api.put(`${apiBase}/requests/${invalidId}`).send();

    expect(response.statusCode).toBe(statusCode.badRequest);
  });

  test(`should respond with a status code 404 when there's not a register with that id`, async () => {
    const validId = '62470cb1c33616144f20efe0';
    const response = await api.put(`${apiBase}/requests/${validId}`).send();

    expect(response.statusCode).toBe(statusCode.resourceNotFound);
  });

  test('should respond with a status code 400 when the first required field is not passed', async () => {
    await api.get(`${apiBase}/users`).send();

    const requestDb = await RequestData.findOne({}, { id: true });
    const requestDbId = requestDb?.id;

    const response = await api.put(`${apiBase}/requests/${requestDbId}`).send({
      methodUsed: 'method updated',
    });

    expect(response.statusCode).toBe(statusCode.badRequest);
  });

  test('should respond with a status code 400 when the second required field is not passed', async () => {
    await api.get(`${apiBase}/users`).send();

    const requestDb = await RequestData.findOne({}, { id: true });
    const requestDbId = requestDb?.id;

    const response = await api.put(`${apiBase}/requests/${requestDbId}`).send({
      dataReturned: [{}],
    });

    expect(response.statusCode).toBe(statusCode.badRequest);
  });

  test('should update a request', async () => {
    await api.get(`${apiBase}/users`).send();

    const requestDb = await RequestData.findOne({}, { id: true });
    const requestId = requestDb?.id;

    const response = await api.put(`${apiBase}/requests/${requestId}`).send({
      methodUsed: 'method updated',
      dataReturned: [{}],
    });

    expect(response.statusCode).toBe(statusCode.successfulRequest);
  });

  afterAll(() => {
    serverApp.close();
    mongoose.connection.close();
  });
});
