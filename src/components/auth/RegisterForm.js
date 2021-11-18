import React, { useState } from 'react'
import { 
    Box, 
    Typography, 
    TextField, 
    Button, 
    IconButton,
    InputAdornment
} from '@mui/material'
import {
    Visibility,
    VisibilityOff
} from '@mui/icons-material'
import { useForm } from "react-hook-form"
import {useDispatch} from 'react-redux'
import { registerAccount } from '../../actions/authActions'


export const RegisterForm = () => {

    const dispatch = useDispatch();
    const { register, handleSubmit, watch, getValues, formState: { errors } } = useForm();
    const [showPassword, setshowPassword] = useState(false);


    const onSubmitRegister = () => {
        const formData = getValues();
        dispatch(registerAccount(formData));
    };

    const visibilityPwd = () => {
        return showPassword ? setshowPassword(false) : setshowPassword(true);
    }


    return (

        <Box onSubmit={handleSubmit(onSubmitRegister)} component='form' autoComplete='off'>

            <Typography variant='h4' component='h4' color='primary'>
                Crea una cuenta
            </Typography>


            <TextField
                {...register("name", { required: true, pattern: /^[A-Za-záéíóúÁÉÍÓÚ\s]+$/ })}
                type='text'
                label="nombre"
                variant="outlined"
                fullWidth
                helperText={errors.name?.type === 'required' ? 'Este campo es requerido' : errors.name?.type === 'pattern' && 'Este campo solo admite letras'}
                error={errors.name?.type === 'required' || errors.name?.type === 'pattern' ? true : false}
            />


            <TextField
                {...register("email", { required: true, pattern: /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/ })}
                type='text'
                label="correo"
                variant="outlined"
                fullWidth
                helperText={errors.email?.type === 'required' ? 'Este campo es requerido' : errors.email?.type === 'pattern' && 'El email no tiene una estructura valida'}
                error={errors.email?.type === 'required' || errors.email?.type === 'pattern' ? true : false}
            />

            <TextField
                {...register("password", { required: true, pattern: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/ })}
                type={showPassword ? 'text' : 'password'}
                label="contraseña"
                variant="outlined"
                fullWidth
                InputProps={{
                    
                    endAdornment:(
                        <InputAdornment position="end">
                            <IconButton onClick={visibilityPwd} >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    )
                    
                }}
                helperText={errors.password?.type === 'required' ? 'Este campo es requerido' : errors.password?.type === 'pattern' && 'La contraseña debe tener entre 8 y 16 caracteres y al menos un dígito o una minúscula o mayúscula. Puede tener otros símbolos'}
                error={errors.password?.type === 'required' || errors.password?.type === 'pattern' ? true : false}
            />

            <TextField
                {...register("confirm_password", { required: true })}
                type={showPassword ? 'text' : 'password'}
                label="confirmar constraseña"
                variant="outlined"
                fullWidth
                helperText={errors.confirm_password?.type === 'required' ? 'Este campo es requerido' : watch('password') !== watch('confirm_password') && 'Las contraseñas no coinciden'}
                error={errors.confirm_password?.type === 'required' || watch('password') !== watch('confirm_password') ? true : false}
            />


            <Button type='submit' variant='gradient-citrus' fullWidth>
                crear cuenta
            </Button>

        </Box>

    )
}
