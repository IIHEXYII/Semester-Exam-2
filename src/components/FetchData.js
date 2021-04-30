import {useEffect} from 'react'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'

export default function FetchData() {
    useEffect(() => {
        const fetchData = async() => {
          try {
            const response = await axios.get(`${BASE_URL}/products`);
            if (response.status === 200) {
              return response.data;
            }
          } catch (error) {
            console.error(error.toString());
          }
        }
      }, []);
}
