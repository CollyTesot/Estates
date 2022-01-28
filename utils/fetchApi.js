import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '501e8c8b11mshd4bf08781e5d5dap12113cjsn6b1f35e3b9d3'
    }
  });
    
  return data;
}