import axios from 'axios';

class JsonPlaceholderService {
  private apiBase = 'https://jsonplaceholder.typicode.com';

  async getAllUsers() {
    return await axios(`${this.apiBase}/users`);
  }

  async getAllPosts() {
    return await axios(`${this.apiBase}/posts`);
  }

  async getPhotosByUserId(userId: string) {
    return await axios(`${this.apiBase}/photos?albumId=${userId}`);
  }
}

export default JsonPlaceholderService;
