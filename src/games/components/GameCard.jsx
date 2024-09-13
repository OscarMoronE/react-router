import { Link } from "react-router-dom";

export const GameCard = ({
    id, namegame, type, price, sale
}) => {

    const gameImageUrl = `/assets/games/${id}.jpg`;

    return (
        <div className="col-12">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4 animate__animated animate__pulse">
                        <img src={gameImageUrl} className="card-img" alt={namegame} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h6 className="card-title">{namegame}</h6>
                            <p><small className="text-muted">{type}</small></p>
                            <p className="inline-text">{price}</p>
                            {
                                (sale) && (<span className="sale inline-text">{sale}</span>)
                            }
                            <Link className="text-black-50" to={`/game/${id}`}>More...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}