import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { DarkMode, LightMode } from '@mui/icons-material';
import { LinearProgress, List, ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { useAppDispatch, useAppSelector } from '../store/store';
import { setDarkMode } from './uiSlice';

const middleLinks = [
    {title: "catalog", path: "/catalog"},
    {title: "about", path: "/about"},
    {title: "contact", path: "/contact"},
]

const rightLinks = [
    {title: "login", path: "/login"},
    {title: "register", path: "/register"},
]

const navStyles = {
  color: "inherit",
  typography: 'h6',
  textDecoration:'none',
  '&:hover': {
    color: 'grey.500'
  },
  '&.active': {
    color: "#baecf9",
  }
}

export default function Navbar() {
  const {isLoading, darkMode} = useAppSelector(state => state.ui)
  const dispatch = useAppDispatch()

  return (
    <AppBar position="fixed" sx={{mb: 8}}>
      <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}> 
        <Box>
          <Typography variant="h6" component={NavLink} to="/" sx={navStyles}>
            Re-Store
          </Typography>
          <IconButton onClick={() => dispatch(setDarkMode())}>
            { darkMode ? <LightMode /> : <DarkMode sx={{color: 'yellow'}}/> }
          </IconButton>
        </Box>
        <List sx={{display: 'flex'}}>
          {middleLinks.map((link, index) => (
            <ListItem
              component={NavLink}
              to={link.path}
              key={index}
              sx={navStyles}
            >
              {link.title.toUpperCase()}
            </ListItem>
          ))}
        </List>
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
          </Badge>

          <List sx={{display: 'flex'}}>
            {rightLinks.map((link, index) => (
              <ListItem
                  component={NavLink}
                  to={link.path}
                  key={index}
                  sx={navStyles}
              >
                  {link.title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box> 
      </Toolbar>
      {isLoading &&
        <Box sx={{width: '100%'}}>
          <LinearProgress color="secondary" />
        </Box>
      }
    </AppBar>
  );
}
