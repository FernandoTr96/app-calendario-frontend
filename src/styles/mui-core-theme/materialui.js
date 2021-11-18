import {createTheme} from '@mui/material'

export const theme = createTheme({
    // primary, secondary, error, warning, info, success
    palette: {
        primary: {
            main: '#493D73',
            light: '#574C88',
            dark:'#3B3659',
            contrastText: '#fff'
        },
        secondary:{
            main: '#222',
            light: '#46d1b5',
            dark:'#4B4559',
            contrastText: '#fff'
        }
    },

    //cambiar tipografias en componentes/etiquetas
    typography: {
        button: {
          textTransform: 'none'
        }
    },

    //modificar componentes
    components: {

        //el componente
        MuiButton: {

            //sobre escribir estilos
            styleOverrides: {
                root: {
                    fontWeight: 'bold'
                }
            },

            //variantes
            variants: [
                // una variante
                {
                    props: { variant: 'gradient-citrus' },
                    style: {                       
                        background: `linear-gradient(to right, #fdc830, #F39C12)`,
                        color: '#fff'
                    }
                },
                //otra variante
                {
                    props: { variant: 'gradient-night' },
                    style: {                       
                        background: `linear-gradient(to right, #34495E, #3a6073)`,
                        color: '#fff'
                    }
                }
            ]
        }

    }
});