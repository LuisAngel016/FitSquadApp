import axios from 'axios';
import { getEnvVariables } from '../fitSquad/helpers';

const { VITE_API_URL } = getEnvVariables(); 



export const fitSquadApi = axios.create({
  baseURL: VITE_API_URL
});

// Todo: Configurar interceptores

export default fitSquadApi;
