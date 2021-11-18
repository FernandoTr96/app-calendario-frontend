import React from 'react'
import { 
    Box, 
    Typography, 
    TextField, 
    Button,
    IconButton,
    InputAdornment
} from '@mui/material'
import {
    LockOpen,
    AlternateEmail 
} from '@mui/icons-material'
import { useForm } from "react-hook-form"
import {useDispatch} from 'react-redux'
import {startLoginWithEmailAndPassword} from '../../actions/authActions'


export const LoginForm = () => {

    const dispatch = useDispatch();
    const { register, handleSubmit, getValues, formState: { errors } } = useForm();
    
    const onSubmitLogin = () => {

        dispatch(startLoginWithEmailAndPassword(
            getValues('email'),
            getValues('password')
        ));

    };

    return (
        <Box onSubmit={handleSubmit(onSubmitLogin)} component='form' autoComplete='off' >

            <Typography variant='h4' component='h4' color='primary'>
                Calendar app
            </Typography>


            <TextField
                {...register("email", { required: true, pattern: /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/ })}
                type='text'
                placeholder="correo"
                variant="filled"
                fullWidth
                InputProps={{
                    
                    startAdornment:(
                        <InputAdornment position="start">
                            <IconButton>
                               <AlternateEmail/>
                            </IconButton>
                        </InputAdornment>
                    )
                    
                }}
                helperText={errors.email?.type === 'required' ? 'Este campo es requerido' : errors.email?.type === 'pattern' && 'El correo no tiene una estructura valida'}
                error={errors.email?.type === 'required' || errors.email?.type === 'pattern' ? true : false}
            />


            <TextField
                {...register("password", { required: true })}
                type='password'
                placeholder="contraseña"
                variant="filled"
                fullWidth
                InputProps={{
                    
                    startAdornment:(
                        <InputAdornment position="start">
                            <IconButton>
                               <LockOpen/>
                            </IconButton>
                        </InputAdornment>
                    )
                    
                }}
                helperText={errors.password?.type === 'required' && "Este campo es requerido"}
                error={errors.password?.type === 'required' ? true : false}
            />

            <Button type='submit' variant='gradient-citrus' fullWidth>
                iniciar sesión
            </Button>

        </Box>
    )
}
