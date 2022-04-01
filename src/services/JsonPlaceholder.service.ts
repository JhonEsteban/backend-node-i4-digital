import axios from 'axios';

import RequestDataservice from './RequestData.service';

class JsonPlaceholderService {
  private apiBase = 'https://jsonplaceholder.typicode.com';

  private requestDataService: RequestDataservice;

  private methods = {
    getAllUsers: 'getAllUsers',
    getAllPosts: 'getAllPosts',
    getPhotosByUserId: 'getPhotosByUserId',
  };

  constructor() {
    this.requestDataService = new RequestDataservice();
  }

  public async getAllUsers() {
    const response = await axios(`${this.apiBase}/users`);

    await this.requestDataService.saveRequest(
      this.methods.getAllUsers,
      response.data
    );

    return response;
  }

  public async getAllPosts() {
    const response = await axios(`${this.apiBase}/posts`);

    await this.requestDataService.saveRequest(
      this.methods.getAllPosts,
      response.data
    );

    return response;
  }

  public async getPhotosByUserId(userId: string) {
    const response = await axios(`${this.apiBase}/photos?albumId=${userId}`);

    await this.requestDataService.saveRequest(
      this.methods.getPhotosByUserId,
      response.data
    );

    return response;
  }
}

export default JsonPlaceholderService;
