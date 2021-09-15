import * as axios from 'axios';
import CONFIG from '../config';

/**
 * Set axios configuration.
 * @param {Boolean} useStringify
 * @returns void
 */
export const createAxiosInstance = useStringify => {
    axios.defaults.baseURL = CONFIG.apiPath;

    if (useStringify) {
        // Transform data payload with stringify.
        axios.defaults.transformRequest = obj => JSON.stringify(obj);
    }

    return axios.create();
};

/**
 * Returns a new axios instance to call endpoints
 *
 * @param {Boolean} useStringify
 * @returns {Instance} axios instance
 */
export const getApi = useStringify => {
    const axiosInstance = createAxiosInstance(useStringify);

    return axiosInstance;
};
