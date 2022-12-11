import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Header from './Header/Header'
import { Box} from '@mui/material'
import CardGrid from './Cards/CardGrid';

const API_URL = `https://restcountries.com/v2/all?fields=name,region,flag`

const HomePage = () => {
    const [apiData, setApiData] = useState([])


    useEffect( () => {

        const getApiData = async () =>{
        
            const res = await axios.get(`${API_URL}`);
    
            // console.log(getApiData);
    
            const countriesArrayData = res.data;
            setApiData(countriesArrayData);
    
        };
        getApiData();


    }, []

    
    )

  return (
    <Box>
      <Box>
        <Header />
      </Box>
      

      <Box sx={{ mx : '3px'}}>

        <CardGrid data={apiData} />

      </Box>

     
     
     
    </Box>
    
  )
}

export default HomePage