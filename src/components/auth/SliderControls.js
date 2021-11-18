import React from 'react'
import { Box} from '@mui/material'
import styles from '../../styles/mui-sx-styles/LoginScreenStyles'

export const SliderControls = () => {
    return (
        <>
            <input type='radio' id='tabLogin' name='tab' defaultChecked />
            <input type='radio' id='tabRegister' name='tab' />

            <Box component='div' sx={styles.tabs} >
                <Box component='label' htmlFor='tabLogin' className='tabLogin'>
                    LOGIN
                </Box>
                <Box component='label' htmlFor='tabRegister' className='tabRegister'>
                    REGISTRO
                </Box>
                <Box component='span' className='bar'></Box>
            </Box>
        </>
    )
}
