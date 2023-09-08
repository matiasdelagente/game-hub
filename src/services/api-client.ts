import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'd403135bdaef4bf39158a4e428c572c4',
  },
});

export default client;
