import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-react--clone-8f180.cloudfunctions.net/api",
  // "http://localhost:5001/react--clone-8f180/us-central1/api",
});

export default instance;
