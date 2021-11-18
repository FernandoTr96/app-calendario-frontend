import React from 'react'
import { Box } from '@mui/material'
import styles from '../../styles/mui-sx-styles/LoginScreenStyles'
import { SliderControls } from '../auth/SliderControls'
import { LoginForm } from '../auth/LoginForm'
import { RegisterForm } from '../auth/RegisterForm'
import { ToastContainer } from 'react-toastify';

export const LoginScreen = () => {
    return (

        // main container
        <Box component='main' sx={styles.mainContainer} >

            {/* auth container */}
            <Box component='div' sx={styles.authContainer} >

                {/* tabs */}
                <SliderControls />

                {/* slider */}
                <Box component='div' sx={styles.slider} className='slider'>

                    {/* LOGIN */}
                    <LoginForm />

                    {/* REGISTER */}
                    <RegisterForm />

                </Box>

            </Box>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
            />

        </Box>

    )
}
