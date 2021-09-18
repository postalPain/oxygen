import axios from 'axios';
import { getHeaderLanguage } from 'i18n/utils';
import apiUrls from 'config/apiUrls';

const BASE_URL = '';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept-Language': getHeaderLanguage(),
  },
});

const api = {
  userInfo: () => axiosInstance.get(apiUrls.userInfo),
};

export default api;