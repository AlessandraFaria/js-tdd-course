import { API_URL } from './config';
import album from './album';

export default class SpotifyWrapper {
  constructor(options = {}) {
    const { apiUrl = API_URL, token = null } = options;
    this.apiUrl = apiUrl;
    this.token = token;

    this.album = album.bind(this)();
  }

  request(url) {
    const headers = {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    };
    return fetch(url, headers);
  }
}
