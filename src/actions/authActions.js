import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";
import { toast } from 'react-toastify';

export const startLoginWithEmailAndPassword = (email, password)=>{

    return async (dispatch)=>{

        const response = await fetchWithoutToken(
            'auth',
            {email, password},
            'POST'
        );

        const body = await response.json();
        
        if(body.ok){
            localStorage.setItem('calendarAppToken', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            delete body.token;
            delete body.ok;
            dispatch(login(body));
        }
        else{

            toast.error('usuario o contraseña incorrecta', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });

        }

    }

}

export const login = (userCredentials)=>({
    type: types.login,
    payload: userCredentials
})

export const registerAccount = (userdata)=>{
    
    return async (dispatch)=>{

        const response = await fetchWithoutToken(
            'auth/register',
            {...userdata},
            'POST'
        );

        const body = await response.json();

        if(body.ok){
            localStorage.setItem('calendarAppToken', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            delete body.token;
            delete body.ok;
            delete body.confirm_password;
            dispatch(login(body));
        }
        else{

            toast.error(body.msg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });

        }

        if(body.errors?.length > 0){
            body.errors.forEach(field => {

                toast.error(field.msg, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });

            })
        }

    }

}

export const startChecking = ()=> {

    return async (dispatch)=>{

        const response = await fetchWithToken(
            'auth/revalidate-token',
            'GET'
        );

        const body = await response.json();

        if(body.ok){
            localStorage.setItem('calendarAppToken', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            delete body.token;
            delete body.ok;
            dispatch(login(body));
        }
        else{
            dispatch(checkingFinish());
        }

    }

}

export const checkingFinish = ()=>({
    type: types.checkingFinish
})

export const startLogout = ()=>{

    return (dispatch)=>{

        localStorage.clear();
        dispatch(logout());

    }

}

export const logout = ()=>({
    type: types.purgeAuth
})