const styles = {
    mainContainer:{
        width: '100%',
        height: '100vh',
        backgroundImage: 'url("https://cdn.pixabay.com/photo/2021/10/06/17/13/mountains-6686286_960_720.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    authContainer:{
        width: {
            xs: '100%',
            md: '45%',
            lg: '35%'
        },
        height: {
            xs: '100vh',
            md: 'auto'
        },
        backgroundColor: '#fff',
        overflow: 'hidden',

        '& input[name="tab"]':{
            display: 'none'
        },
        '& #tabLogin:checked ~ div > .bar':{
            transform: 'translateX(0)'
        }
        ,
        '& #tabRegister:checked ~ div > .bar':{
            transform: 'translateX(100%)'
        },
        '& #tabLogin:checked ~ div > .tabLogin, & #tabRegister:checked ~ div > .tabRegister':{
            color: '#fff'
        },
        '& #tabLogin:checked ~ .slider':{
            transform: 'translateX(0)'
        }
        ,
        '& #tabRegister:checked ~ .slider':{
            transform: 'translateX(-50%)'
        },
    },
    tabs:{
        width: '100%',
        height: 'auto',
        display: 'flex',
        position: 'relative',

        '& .tabLogin, & .tabRegister':{
            width: '50%',
            textAlign: 'center',
            p: 2,
            color: '#333',
            fontWeight: 'bold',
            zIndex: '10',
            cursor: 'pointer'
        },
        '& .bar':{
            width: '50%',
            height: '100%',
            p:2,
            position: 'absolute',
            bgcolor: 'primary.main',
            transition: 'transform 500ms'
        }
    },
    slider:{
        width:'200%',
        height: 'inherit',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        transition: 'transform 500ms',

        '& > form':{
            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: 5,
            gap: 3
        }
    }
}

export default styles;