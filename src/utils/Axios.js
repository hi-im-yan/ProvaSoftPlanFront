import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.42.157:8080/api';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
