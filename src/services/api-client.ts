import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '42764f81261d4e75b666f4b6053c0f71',
  },
});
