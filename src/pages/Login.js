import React from "react";
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import { routes } from "../routes/routes";
import Register from './Register';
import {toast} from 'react-hot-toast';
import axios from "axios";
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/api.urls';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

export default function Login(){
    const navigate= useNavigate();
    const[data,setData]=useState({
        email:"",
        password:"",
    })
    const loginUser= async (e)=>{
        e.preventDefault();
        const {email, password} = data;
        try{
            const {data}= await axios.post('https://gmailclone-backend-ay9j.onrender.com/login',{
                email,
                password
            });
            if(data.error){
                toast.error(data.error)
            }else{
                setData({});
                console.log("data token",data.token)
                localStorage.setItem("token", data.token);
                localStorage.setItem("email",email)
                // navigate('/emails/inbox');
                navigate(`${routes.emails.path}/inbox`);
            }
        }catch(error){
            console.log(error);
        }
    }
    return(
        <div>  

        <div>
            <Container maxWidth="sm" > 
           <Box sx={{ flexGrow: 1 , mt:"40px"}}>
                 <AppBar position="static"
                    sx={{height:"100px", 
                    bgcolor: 'cornflowerblue',
                    width: '660px',
                    borderRadius: '16px'
                    }}>
                 <Typography variant="h6" component="div" 
                 sx={{ flexGrow: 1,
                 fontWeight: 'bold', 
                 fontSize: 'h2.fontSize',
                 fontStyle: 'oblique',
    
                 }}>
                Fast Mail
                
              </Typography>
              
                 </AppBar>
                 </Box>
            <Box sx={{ borderRadius: '16px' , 
                    mt: 1, boxShadow: 3, 
                    bgcolor: 'whitesmoke',  
                    height: '400px', 
                    mx: 'auto', 
                    width: 600, 
                    display: 'flex',
                    justifyContent: 'center',
                    p:'30px'
                    }}
     
            >
                <div>
        <form onSubmit={loginUser}>
            <div >
            
             <TextField
          required
          id="outlined-required margin-normal"
          label="Enter Email"
          margin="normal"
          placeholder="Enter email"
          helperText="Please enter your Email"
          value={data.email}
          onChange={(e)=>setData({...data,email: e.target.value})}
        />
        </div>
        <div>
           
            <TextField
          required
          id="outlined-password-input margin-normal"
          label="Enter Password"
          margin="normal"
          type="password"
          placeholder="Atleast 6 characters"
          helperText="Please enter your Password"
          value={data.password}
          onChange={(e)=>setData({...data,password: e.target.value})}
        />
        </div>
        <Button variant="contained" type="submit" size="large"
            sx={{ml: '190px', mt:'20px', mb:'20px', bgcolor: 'cornflowerblue', }}>
                Login
        </Button>
            
        </form>
        <Typography sx={{display:'flex', mt:'15px'}}>
        <h3>New Users:</h3>
            
        <Link to={'/register'}>
        <Button role="link" size="large" variant="contained"
            sx={{ml: '20px', mt:'14px', bgcolor: 'cornflowerblue',}}>
                Sign up
        </Button>
        </Link>
        </Typography>
        </div>
        </Box>
        </Container>
    </div>
    </div>  
    )
}