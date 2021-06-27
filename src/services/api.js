import axios from "axios";

const api = axios.create({
  baseURL: "https://tecnotcc.herokuapp.com/",
});


export { api };
