import mongoose from 'mongoose';
import request from 'supertest';

import statusCode from '../../config/statusCode';
import { app, apiBase, serverApp } from '../../config/testConfig';

const api = request(app);

describe('GET /posts', () => {
  test('should respond with a status code 200', async () => {
    const response = await api.get(`${apiBase}/posts`).send();

    expect(response.statusCode).toBe(statusCode.successfulRequest);
  });

  test('should have a content-type: application/json', async () => {
    const response = await api.get(`${apiBase}/posts`).send();

    expect(response.headers['content-type']).toEqual(
      expect.stringContaining('json')
    );
  });

  afterAll(() => {
    serverApp.close();
    mongoose.connection.close();
  });
});
