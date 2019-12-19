import axios from '@nuxtjs/axios';

export async function asyncGetProducts(){
  try {
    const response = axios.get('http://localhost:3001/');
    return response;
  }catch (e) {
    console.log(e);
    return [];
  }
}
