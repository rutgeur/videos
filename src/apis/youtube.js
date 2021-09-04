import axios from "axios";

const KEY = "AIzaSyAuTlSb7C_Q8vUBgslh0YC5Y_9XJJHEXos";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
