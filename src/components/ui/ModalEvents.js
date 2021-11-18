import { Modal, Box, Typography, TextField, Button } from '@mui/material'
import styles from '../../styles/mui-sx-styles/ModalEventsStyles'
import { useForm } from 'react-hook-form'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { closeModalEvents } from '../../actions/uiActions'
import { editEvent, saveEvent, activeEvent } from '../../actions/calendarActions'
import { useEffect } from 'react'

export const ModalEvents = () => {

    const dispatch = useDispatch();
    const { modalEventsOpen } = useSelector(state => state.ui);
    const { activeNow } = useSelector(state => state.events);

    const { register, handleSubmit, watch, reset, getValues, setValue, formState: { errors } } = useForm({
        mode: 'onSubmit'
    });

    const submit = () => {

        const formValues = getValues();
        const newEvent = {
            title: formValues.title,
            desc: formValues.desc,
            start: moment(formValues.startDate),
            end: moment(formValues.endDate)
        }

        if (activeNow === null) {

            dispatch(saveEvent(newEvent));
            reset();
            closeModal();
        }
        else {
            dispatch(editEvent({
                ...newEvent,
                id: activeNow.id
            }));
            reset();
            closeModal();
            dispatch(activeEvent(null));
        }

    }

    const closeModal = () => {
        dispatch(closeModalEvents());
    }

    useEffect(() => {

        if(activeNow !== null)
        {
            setValue('startDate', moment(activeNow.start).format('YYYY-MM-DDThh:mm'));
            setValue('endDate', moment(activeNow.end).format('YYYY-MM-DDThh:mm'));
            setValue('title', activeNow.title);
            setValue('desc', activeNow.desc);
        }
        else
        {
            reset();
        }

    }, [activeNow,setValue,reset])

    return (
        <Modal
            open={modalEventsOpen}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box onSubmit={handleSubmit(submit)} sx={styles.modal} component='form' autoComplete='off'>
                <Typography variant="h5" component="h5">
                    {activeNow === null ? 'Nuevo evento' : 'Editar evento'}
                </Typography>

                <TextField
                    {...register('startDate', {
                        validate: {
                            isAfter: v => moment(v).isAfter(watch('endDate')) === false,
                            isSame: v => moment(v).isSame(watch('endDate')) === false
                        }
                    })}
                    label="Fecha y hora de inicio"
                    type="datetime-local"
                    fullWidth
                    helperText={
                        errors.startDate?.type === 'isAfter' ? 'La fecha inicial no puede ser despues a la fecha final' :
                            errors.startDate?.type === 'isSame' && 'La fecha inicial no puede ser igual a la fecha final'
                    }
                    error={errors.startDate?.type ? true : false}
                    defaultValue={moment().format('YYYY-MM-DDT12:00')}
                />

                <TextField
                    {...register('endDate', {
                        validate: {
                            isBefore: v => moment(v).isBefore(watch('startDate')) === false,
                            isSame: v => moment(v).isSame(watch('startDate')) === false
                        }
                    })}
                    label="Fecha y hora final"
                    type="datetime-local"
                    fullWidth
                    helperText={
                        errors.endDate?.type === 'isBefore' ? 'La fecha final no puede ser antes a la fecha inicial' :
                            errors.endDate?.type === 'isSame' && 'La fecha final no puede ser igual a la fecha inicial'
                    }
                    error={errors.endDate?.type ? true : false}
                    defaultValue={moment().add(1, 'days').format('YYYY-MM-DDT00:00')}
                />

                <TextField
                    {...register('title', {
                        required: true,
                        pattern: /^[A-Za-z0-9áéíóúÁÉÍÓÚñÑ\s\n\t]{0,50}$/
                    })}
                    label="Titulo"
                    variant="outlined"
                    fullWidth
                    helperText={
                        errors.title?.type === 'required' ? 'Este campo es requerido' :
                        errors.title?.type === 'pattern' && `Debe ser menor a 50 caracteres y sin simbolos extraños | caracteres (${watch('title').length})`}
                    error={errors.title?.type ? true : false}
                />

                <TextField
                    {...register('desc', {
                        required: true,
                        pattern: /^[A-Za-z0-9áéíóúÁÉÍÓÚñÑ\s\n\t]{0,100}$/
                    })}
                    label="Descripcion"
                    multiline
                    rows={4}
                    fullWidth
                    helperText={
                        errors.desc?.type === 'required' ? 'Este campo es requerido' :
                        errors.desc?.type === 'pattern' && `Debe ser menor a (100) caracteres y sin simbolos extraños | caracteres (${watch('desc').length})`
                    }
                    error={errors.desc?.type ? true : false}
                />

                <Button type='submit' variant='gradient-citrus' fullWidth>
                    {activeNow === null ? 'Guardar' : 'Editar'}
                </Button>

            </Box>

        </Modal>
    )
}
