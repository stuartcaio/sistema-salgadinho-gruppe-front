import axios,{AxiosHeaders, AxiosRequestConfig} from "axios";

const api = axios.create({
    baseURL: `http://localhost:8080/`
});

api.interceptors.request.use((request: AxiosRequestConfig) => {
    const token = sessionStorage.getItem('token') || sessionStorage.getItem('tokenXandão');

    if (token !== undefined && token !== '' ) {
        (request.headers as AxiosHeaders).set("Authorization", 'Bearer ' + token);
    }

    return request;
});

api.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response.config.url !== 'logar') {
        if (error.response.status === 401) {
            console.log(error)
        }
    }
    return Promise.reject(error);
});

export default api;