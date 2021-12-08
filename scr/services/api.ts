
import AsyncStorage from 'react-native';
import { create } from "apisauce";


const api = create({
    baseURL: 'https://619e80d71ac52a0017ba43ea.mockapi.io/api/v1/',
});

export default api;