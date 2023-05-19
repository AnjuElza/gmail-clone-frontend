import React from "react";
import axios from "axios";
import {toast} from 'react-hot-toast';
import { useState } from "react";
import {useNavigate, Link} from "react-router-dom";
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/api.urls';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { routes } from "../routes/routes";
export default function Register(){
    const[data,setData]=useState({
        name:"",
        email:"",
        password:"",
    })
    const navigate = useNavigate();
    const register = useApi(API_URLS.register);
    const registerUser= async(e)=>{
        e.preventDefault();
        let {name, email, password}= data;
        email=(`${email}`+"@fastmail.com");
        try{
             const {data}= await axios.post('http://localhost:8000/register',{
               // const {data}= register(
                name, email, password
             })
             console.log(name,email,password);
             if(data.error){
                toast.error(data.error);
             }else{
                setData({})
                toast.success(`Registration successful.Please login to continue.Your email is ${data.email}`);
                navigate('/');
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
        <form onSubmit={registerUser}>
        <div>
            
            {/* <input type="text" placeholder="Enter name"
                    value={data.name}
                    onChange={(e)=>setData({...data,name: e.target.value})}
                    
            /> */}
            <TextField
          required
          id="outlined-required margin-normal"
          margin="normal"
          label="Enter name"
          type="text" 
          
          value={data.name}
          onChange={(e)=>setData({...data,name: e.target.value})}
        />
        </div>
        <div>
            <TextField
          required
          id="outlined-required margin-normal"
          label="Email"
          margin="normal"
          placeholder="username"
          value={data.email}
          onChange={(e)=>setData({...data,email: e.target.value})}
        />
            <TextField sx={{ml:2}}
                id="outlined-read-only-input margin-normal"
               
                margin="normal"
                defaultValue="@fastmail.com"
                placeholder="@fastmail.com"
                InputProps={{
                    readOnly: true,
                }}
            />
            </div>
            <div>
            
             <TextField
          required
          id="outlined-password-input margin-normal"
          label="Password"
          margin="normal"
          type="password"
          placeholder="Atleast 6 characters"
          helperText="Password should be of atleast 6 characters "
          value={data.password}
          onChange={(e)=>setData({...data,password: e.target.value})}
        />
        </div>
        <div>
            <Button variant="contained" type="submit" 
            sx={{ml: '190px', mt:'20px', mb:'20px', bgcolor: 'cornflowerblue', }}>
                Sign Up
            </Button>
            </div>
        </form>
        <Typography sx={{display:'flex'}}>
        <h3>Existing Users:</h3>
            
        <Link to={'/'}>
        <Button role="link" size="large" 
            sx={{ml: '20px', mt:'14px', }}>
            Login
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