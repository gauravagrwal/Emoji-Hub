import axios from 'axios';
import { useEffect, useState } from 'react';

export default function App() {
  const [data, setData] = useState([]);
  async function getData() {
    try {
      const response = await axios.get('https://emojihub.yurace.pro/api/all');
      console.info(response);
      setData(response.data);
    }
    catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    </>
  );
}
