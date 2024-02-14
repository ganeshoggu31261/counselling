import React, { useState } from 'react'
import{AppBar, Toolbar, Tabs,Tab,Typography} from '@mui/material'
import SchoolIcon from '@mui/icons-material/School';
import {NavLink} from 'react-router-dom';

const Header = () => {
  const[value ,setValue]=useState()
  return (
    <div>
      <AppBar sx={{backgroundColor:"purple"}} position='sticky'>
        <Toolbar>
        <SchoolIcon></SchoolIcon>
        
        <Typography component="marquee" behavior="scroll" direction="left">
            WELCOME TO COUNSELLING AND VISITOR MANAGEMENT SYSTEM
          </Typography>
        <Tabs textColor='inherit' indicatorColor='primary' 
        sx={{ml:'auto'}}value={value}
        onChange={(e,val)=>setValue(val)}>
          <Tab LinkComponent={NavLink} to='/Signup' label='signup'/>
          <Tab LinkComponent={NavLink} to='/Signin' label='signin'/>
          <Tab LinkComponent={NavLink} to='/Councellor' label='Add Councellor'/>
          <Tab LinkComponent={NavLink} to='/fetch' label='Registartions'/>
          <Tab LinkComponent={NavLink} to='/Visitor' label='Add Visitor'/>
          <Tab LinkComponent={NavLink} to='/Appointment' label='Appointment'/>
         
        </Tabs>
        </Toolbar>
          </AppBar>

    
    
    </div>

  )
}

export default Header