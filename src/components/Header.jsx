

import { AppBar, Toolbar, Box, InputBase, styled, Button } from '@mui/material';
import { Menu as MenuIcon, Tune, HelpOutlineOutlined, SettingsOutlined, 
    AppsOutlined, AccountCircleOutlined, Search } from '@mui/icons-material'

import { gmailLogo } from '../constants/constant';
import {useNavigate} from 'react-router-dom';
import { routes } from "../routes/routes";

const StyledAppBar = styled(AppBar)`
    background: #f5F5F5;
    box-shadow: none;
`;

const SearchWrapper = styled(Box)`
    background: #EAF1FB;
    margin-left: 80px;
    border-radius: 8px;
    min-width: 690px;
    max-width: 720px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    & > div {
        width: 100%
    }
`

const OptionsWrapper = styled(Box)`
    width: 100%;
    display: flex;
    justify-content: end;
    & > svg {
        margin-left: 20px;
    }
`

const Header = ({ toggleDrawer }) => {
   
    const navigate= useNavigate();
    const logoutUser= async (e)=>{
        e.preventDefault();
            localStorage.removeItem("token")
            localStorage.removeItem("email")
             navigate("/");
           
    }
    
    return (
        <StyledAppBar position="static">
            <Toolbar>
                <MenuIcon color="action" onClick={toggleDrawer} />
                <img src={gmailLogo} alt="logo" style={{ width: 110, marginLeft: 15 }} />
                <SearchWrapper>
                    <Search color="action" />
                    <InputBase />
                    <Tune  color="action"/>
                </SearchWrapper>

                <OptionsWrapper>
                    <HelpOutlineOutlined color="action" />
                    <SettingsOutlined color="action" />
                    <AppsOutlined color="action" />
                    <AccountCircleOutlined color="action" />
                   
                       <Button variant="outlined" color="error" size="small" 
                       onClick={logoutUser}
                       >                     
                       Logout
                       </Button> 
                    
               </OptionsWrapper>
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header;