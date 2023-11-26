import axios from "axios";

const burgerbuilder = axios.create({
    baseURL: "https://burgerbuilder-413b0.firebaseio.com",
});

export default burgerbuilder;
