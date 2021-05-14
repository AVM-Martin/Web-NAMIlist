import axios from "axios";


const songFetcher = axios.create({
  baseURL: "https://raw.githubusercontent.com/AVM-Martin/Web-NAMIlist/data/namirin.json",
});


export default songFetcher;
