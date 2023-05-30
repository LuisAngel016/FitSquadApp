import axios from 'axios';
import { getEnvVariables } from '../fitSquad/helpers';

const { VITE_API_URL } = getEnvVariables(); 



export const fitSquadApi = axios.create({
  baseURL: VITE_API_URL
});

// Todo: Configurar interceptores
fitSquadApi.interceptors.request.use( config => {

  config.headers = {
      ...config.headers,
      'x-token': localStorage.getItem('token')
  }


  return config;
})

export default fitSquadApi;
