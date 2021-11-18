import React, { useEffect } from 'react'
import {
    HashRouter as Router,
    Redirect,
    Switch
} from 'react-router-dom'
import { LoginScreen } from '../components/pages/LoginScreen'
import { CalendarScreen } from '../components/pages/CalendarScreen'
import { useDispatch, useSelector } from 'react-redux'
import { startChecking } from '../actions/authActions'
import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'

export const AppRouter = () => {

    const dispatch = useDispatch();
    const {checking, account:{uid}} = useSelector(state => state.auth);

    useEffect(() => {

        dispatch(startChecking());

    }, [dispatch])


    if (checking) {
        return <h5>espere...</h5>
    }


    return (
        <Router>
            <>
                <Switch>
                    <PrivateRoute exact path='/' component={CalendarScreen} isAuth={!!uid} />
                    <PublicRoute exact path='/login' component={LoginScreen} isAuth={!!uid}  />
                    <Redirect to='/' />
                </Switch>
            </>
        </Router>
    )
}
