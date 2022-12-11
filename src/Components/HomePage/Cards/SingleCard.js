import React from 'react'
import {Card, CardActionArea,Box,Stack ,CardMedia, CardContent, Typography} from '@mui/material'
import './SingleCard.css'
const SingleCard = ({data}) => {


  const { name,  region , flag} = data;

  return (
    <Card sx={{ maxWidth: '528px', maxHeight : '130px', margin : '3px 2px' }} className="card">
      <CardActionArea sx={{ border: '1px solid black' }}>
        <Stack direction="row">

          <Box sx={{ margin : '3px 5px'}}>

            <CardMedia
              component="img"
            
              image={flag}
              alt={name}
              
            />
            
            
          </Box> 

         

          <CardContent>
            <Stack direction="column" 
             justifyContent="flex-start" 
             alignItems="flex-start">
              <Typography gutterBottom variant="h6" component="div">
                {name}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {region}
              </Typography>
              
              
            </Stack>
            
            
         </CardContent>

        </Stack>

       
       
        
      </CardActionArea>
    </Card>
  )
}

export default SingleCard