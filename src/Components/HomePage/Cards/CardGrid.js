import React from 'react'
import SingleCard from './SingleCard'
import { Grid } from '@mui/material'

const CardGrid = ({data}) => {

  const cards = data && data.map( (ele, index) => (

        <Grid item xs={12} sm={6} key={index}>
           <SingleCard  data={ele} />
        </Grid>

  ))
//   const cards =   
  return (
    
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 3}}>
      {
        cards
      }
        
    </Grid>
  )
}

export default CardGrid