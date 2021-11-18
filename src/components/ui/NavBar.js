import React from 'react'
import { Stack, Avatar, Tooltip, AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import EventIcon from '@mui/icons-material/Event';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import styles from '../../styles/mui-sx-styles/NavBarStyles'
import { stringAvatar } from '../../helpers/mui-avatar-letters';
import { useDispatch, useSelector } from 'react-redux'
import { openModalEvents } from '../../actions/uiActions';
import { activeEvent, deleteEvent } from '../../actions/calendarActions';
import { startLogout } from '../../actions/authActions';


export const NavBar = () => {

    const dispatch = useDispatch();
    const activeNow = useSelector(state => state.events.activeNow);
    const {name} = useSelector(state => state.auth.account);

    const openModal = () => {
        dispatch(openModalEvents());
    }

    const btnDelete = () => {
        dispatch(deleteEvent(activeNow.id));
        dispatch(activeEvent(null));
    }

    const logout = ()=>{
        dispatch(startLogout());
    }

    return (
        <Box sx={styles.flexGrow_1} >
            <AppBar position="static" color='primary'>
                <Toolbar>

                    <Stack direction="row" spacing={2}>
                        <Avatar {...stringAvatar(`${name} +`)} />
                    </Stack>

                    <Typography variant="span" component="span" sx={styles.displayName}>
                        {name}
                    </Typography>

                    {
                        activeNow !== null &&
                        <Tooltip title="borrar evento">
                            <IconButton onClick={btnDelete} color='warning' aria-label="addEvent" component="span">
                                <DeleteForeverIcon />
                            </IconButton>
                        </Tooltip>
                    }

                    {
                        activeNow !== null ?
                        <Tooltip title="editar evento">
                            <IconButton onClick={openModal} color="inherit" aria-label="addEvent" component="span">
                                <EditIcon fontSize='small' />
                            </IconButton>
                        </Tooltip> :
                        <Tooltip title="agregar evento">
                            <IconButton onClick={openModal} color="inherit" aria-label="addEvent" component="span">
                                <EventIcon fontSize='small' />
                            </IconButton>
                        </Tooltip>
                    }

                    <Tooltip title="cerrar sesion">
                        <IconButton onClick={logout} color="inherit" aria-label="logout" component="span">
                            <LogoutIcon fontSize='small' />
                        </IconButton>
                    </Tooltip>

                </Toolbar>
            </AppBar>
        </Box>
    )
}
