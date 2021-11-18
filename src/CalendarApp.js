import React from 'react'
import { AppRouter } from './router/AppRouter'
import { ThemeProvider } from '@mui/material'
import { theme } from './styles/mui-core-theme/materialui'
import { Provider } from 'react-redux'
import store from './store/store'

export const CalendarApp = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <AppRouter />
            </ThemeProvider>
        </Provider>
    )
}
