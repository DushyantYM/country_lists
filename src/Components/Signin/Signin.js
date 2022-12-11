import React, {useState} from 'react'
import {Stack, Box, Button,TextField, Checkbox}from '@mui/material';
import {Link} from 'react-router-dom'
import "./Signin.style.css"
import SignInLogo from "./Assets/Illustration-mdpi (1).png"
import {Icons} from './Assets/Icons';



const Signin = () => {
  const [userData, setUserData] = useState({})
  const [checked, setChecked] = useState(true);

  const handleChange = (e) => {
    
    setUserData({
      ...userData,
      [e.target.name] : e.target.value

    })


  }


  return (

    <Box className='main' >

      <Stack spacing={2} className="form">
       
          
          <span className='signin-text'>Sign In</span>
          

          <p className='newuser-text'>
            <span >New user?</span>
            <Link to="/" className="link">Create an account</Link>
          </p>


          <TextField id="outlined-basic" variant="outlined" className='input-box' 
          placeholder='Username or email'
          name="username"
          value={userData.name}
          onChange={handleChange}/>

          <TextField id="outlined-basic" variant="outlined" className='input-box'
          placeholder='Password'
          name="email"
          value={userData.email}
          onChange={handleChange}
          />


          <p className='checkbox'>
            <Checkbox
            
              style={{
                transform: "scale(1.3)",
                padding : "0px",
                color : "grey",
                border : '20 solid black'
               
              }}
              checked={checked}
              onChange={() => setChecked(!checked)}
              // inputProps={{ 'aria-label': 'controlled' }}
            />

            <span className='checkbox-text'>Keep me signed in</span>

          </p>

          <Link to='/home'>
             <Button className="signin-btn" variant="contained">Sign In</Button>
          </Link>     
          
          <Box>
           <h6><span>Or Sign in with</span></h6>
          </Box>
          {/* <Box> */}
            <Stack direction="row" spacing={2} className = "icons">

              {
                Icons.map( (icon,index) => (

                 <Button className="icon-btn" key={icon}>
                   <img src={icon} alt="icons" />
                 </Button>


                ))

              }
            </Stack>
          {/* </Box>   */}
        
      </Stack>
      
      <Stack>
        <Box className="big-img" sx={{ md : {display : 'none'}}}>
           <img src={SignInLogo} alt="pic"/>
        </Box>
        
      </Stack>
      
     
      
      
  </Box>
  )
}

export default Signin