import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const LoginPage = () => {

    const { login } = useContext(AuthContext)

    const navigate = useNavigate()

    const onLogin = () => {

        login('Oscar Morón')

        navigate('/', {
            replace: true
        })
    }

    return (
        <div className='container mt-5'>
            <div className="bannerContainer">

                <div className="textOverlay">
                    <h1>Gamer zone</h1>
                    <button onClick={onLogin} className='btn btn-primary'>Login</button>
                </div>

            </div>
        </div>
    )
}