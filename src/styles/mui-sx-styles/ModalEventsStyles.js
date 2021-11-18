import { theme } from "../mui-core-theme/materialui";

const styles = {
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width:{
            xs: '90%',
            sm: 500,
            lg: '40%'
        },
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        display:'flex',
        flexDirection:'column',
        gap: 2,
        '& > h5':{
            color: theme.palette.primary.main,
            textAlign: 'center',
            fontWeight: 'bold'
        }
    }
}

export default styles;