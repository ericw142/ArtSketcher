import axios from "axios";

const API = {
    signup: function(data) {
        return axios.post("/user/signup", data);
    },
    login: function(data) {
        return axios.post("/user/login", data);
    }
};

export default API;