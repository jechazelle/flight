import axios from 'axios';

export default {
    searchTraffics(config) {
        return axios.post(`http://localhost:8000/api/traffics`, config, {})
                    .then((response) => {
                        return response.data;
                    })
                    .catch((error) => {
                        console.log(error);
                    })
    },

    getTraffics() {
        return axios.get(`http://localhost:8000/api/traffics`, {})
                    .then((response) => {
                        return response.data.data;
                    })
                    .catch((error) => {
                        console.log(error);
                    })
    }
}
