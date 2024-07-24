import axios from 'axios'
import React, { useEffect, useState } from 'react'

const HomePage = () => {
  // www.themealdb.com/api/json/v1/1/categories.php
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      setData(response.data);
    } catch (err) {
      console.log(err);
    }

  }

  useEffect(() => {
    console.log('hello jee');
    getData();
  }, []);

  console.log(data)

  return (
    <div>

      {data?.categories.map((cata, i) => {

      })}



    </div>
  )
}

export default HomePage