import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '4e4d947288e94789927f7837235aeadc',
  },
});
