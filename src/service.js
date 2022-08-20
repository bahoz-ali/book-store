class API {
  name = 'books';

  appKey = 'nCVkDCY6YM5lFaFUvV0U';

  baseUrl =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

  booksEndPoint = `${this.baseUrl}/apps/${this.appKey}/books`;
}

const api = new API();
export default api;
