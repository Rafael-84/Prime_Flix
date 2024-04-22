import axios from 'axios';

//BASE DA URL: https://api.themoviedb.org/3/
//URL API: movie/now_playing?api_key=5e16d340c819ca5881e67343c297adc6&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;