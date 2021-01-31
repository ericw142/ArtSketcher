import axios from "axios";

const API = {
    signup: function(data) {
        return axios.post("/user/signup", data);
    },
    login: function(data) {
        return axios.post("/user/login", data);
    },
    savedPost: function(data) {
        console.log("api.js" +data);
        return axios.post("/api/posts", data);
    },
    getPosts: function() {
        return axios.get("/api/home");
    }
};

export default API;