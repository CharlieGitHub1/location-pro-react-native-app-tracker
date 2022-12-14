import axios from "axios";

export default axios.create({
  baseURL: "http://d07b-2600-1700-b0a1-ae0-51df-5cbe-f29-5161.ngrok.io", // ngrok address here (without the http://)
});
