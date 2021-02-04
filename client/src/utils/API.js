import axios from "axios";

const API = {
    signup: function(data) {
        return axios.post("/user/signup", data);
    },
    login: function(data) {
        return axios.post("/user/login", data);
    },
    savedPost: function(data) {
        return axios.post("/api/posts", data);
    },
    getPosts: function() {
        return axios.get("/api/home");
    },
    getUserPost: function() {
       return axios.get("/api/userPost/:username");
    }
};  

export default API;