import axios from 'axios';

export async function asyncGetProducts(){
  try {
    const storedProducts = localStorage.getItem('storedProducts');
    if(storedProducts){
      return JSON.parse(storedProducts);
    }
    const response = await axios.get('http://localhost:3001/');
    const { data } = response;
    localStorage.setItem('storedProducts', JSON.stringify(data));
    return response;
  }catch (e) {
    console.log(e);
    return [];
  }
}
