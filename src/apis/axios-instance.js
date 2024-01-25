import axios from "axios";

const instance = axios.create({
  baseURL: 'https://academics.newtonschool.co/api/v1/bookingportals',
  headers: { projectID: "qw7c96xhq4ll" },
});

export default instance;