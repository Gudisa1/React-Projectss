import axios from "axios";

const BASE_URL = "https://mineable-coins.p.rapidapi.com/coins";

const config = {
  headers: {
    "X-RapidAPI-Key": "0445f9098fmsh38e72c2b3eecb21p15d2bajsn3038a72bcf27",
    "X-RapidAPI-Host": "mineable-coins.p.rapidapi.com",
  },
};

export const fetchDataAPI = async () => {
  const response = await axios.get(BASE_URL, config);
  const data = await response.data; // Use response.data to access the response data
  return data;
};
