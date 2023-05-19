import { useState, Suspense, useEffect } from 'react';
import { Header, SideBar } from '../components';
import { Box, styled } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import SuspenseLoader from '../components/common/SuspenseLoader';

const Wrapper = styled(Box)`
    display: flex;
`;

const Main = () => {

    const [openDrawer, setOpenDrawer] = useState(true);
    const navigate= useNavigate();
    const toggleDrawer = () => {
        setOpenDrawer(prevState => !prevState);
    }
    
    return (
        <>
            <Header toggleDrawer={toggleDrawer} />
            <Wrapper>
                <SideBar toggleDrawer={toggleDrawer} openDrawer={openDrawer} />
                <Suspense fallback={<SuspenseLoader />} >
                    <Outlet context={{ openDrawer }} />
                </Suspense>
            </Wrapper>
        </>
    )
}

export default Main;