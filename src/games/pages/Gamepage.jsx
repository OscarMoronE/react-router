import { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getGameById } from '../helpers/getGameById';

export const Gamepage = () => {

    const { id } = useParams();

    const game = useMemo(() => getGameById(id), [id]);

    const navigate = useNavigate();

    const onNavigateBack = () => {
        navigate(-1)
    }

    if (!game) {
        return <Navigate to='/action' />
    }

    return (
        <>
            <div className='row mt-5'>
                <div className="col-4">
                    <img src={`/assets/games/${id}.jpg`} alt={game.namegame} className='img-thumbnail' />
                </div>
                <div className="col-8">
                    <h3>{game.namegame}</h3>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'><b>Name: {game.namegame}</b></li>
                        <li className='list-group-item'><b>Type: {game.type}</b></li>
                        <li className='list-group-item'><b>Mode: {game.mode} </b></li>
                    </ul>

                    <h5 className='mt-3'>Price</h5>
                    <p>{game.price}</p>

                    <button onClick={onNavigateBack} className='btn btn-outline-primary'>Back</button>
                </div>
            </div>
        </>
    )
}
