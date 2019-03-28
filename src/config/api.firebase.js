import * as axios from 'axios';

const apiFirebase = axios.create({
  baseURL: 'https://objets-test.firebaseio.com/'
});

export default apiFirebase;