import axios from 'axios';

export async function asyncGetProducts(){
  try {
    const response = await axios.get('http://localhost:3001/');
    return response;
  }catch (e) {
    console.log(e);
    return [];
  }
}
