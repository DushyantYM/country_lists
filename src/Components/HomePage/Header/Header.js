import React, { useState } from 'react'
import {Box, AppBar, Toolbar, IconButton,
     List,ListItem,ListItemButton,ListItemText,Drawer,
     Typography, Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css'

const drawerWidth = 200;

const navItems = ['All','Asia','Europe']
const Header = () => {

    // const [style, setStyle] = useState()

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        // console.log("clicked")
      setMobileOpen(!mobileOpen);
    };
  
    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );

    const container = window !== undefined ? () => window.document.body : undefined;
  


  return (
    <Box sx={{ display : 'flex', flexGrow: 1}}>

      <AppBar position="relative" color="transparent" className="app-bar">

      
        <Toolbar>
          

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Countries
          </Typography>

         


          {/* navItems for desktop */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }} className="nav-items">
            {navItems.map((item) => (
              <Button className="nav-btn" key={item} sx={{ color: 'Black' }}>
                {item}
              </Button>
            ))}
          </Box>

          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
        </Toolbar>
      </AppBar>



          <Box component="nav">
            <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            >
             {drawer}
           </Drawer>
         </Box>


       
    </Box>
  )
}

export default Header