import { Route, Routes } from 'react-router-dom'
import { GamesRoutes } from '../games/routes/GamesRoutes'
import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'
import { LoginPage } from '../auth/pages/LoginPage'

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/login' element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } />

                <Route path='/*' element={
                    <PrivateRoute>
                        <GamesRoutes />
                    </PrivateRoute>

                } />
            </Routes>
        </>
    )
}