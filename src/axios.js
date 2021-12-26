import axios from 'axios';
import {baseUrl} from './constants/constants.js'

const instance = axios.create({
  baseUrl: baseUrl
});

export default instance