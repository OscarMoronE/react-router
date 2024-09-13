import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import { GameCard } from "../components/GameCard";
import { getGameByName } from "../helpers/getGameByName";
import queryString from "query-string";

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const games = getGameByName(q);

    const searchBar = q.length === 0;
    const warningBar = (q.length >= 1 && games.length === 0);

    const { onInputChange, searchtext } = useForm({
        searchtext: ''
    })

    const onSearchSubmit = (e) => {
        e.preventDefault();

        navigate(`?q=${searchtext}`);
    }

    return (
        <>
            <h1>Search game</h1>
            <hr />
            <div className="row">
                <div className="col-5">

                    <h4>Searching</h4>
                    <hr />

                    <form onSubmit={onSearchSubmit}>
                        <input type="text"
                            name="searchtext"
                            placeholder="Search a game"
                            className="form-control"
                            autoComplete="off"
                            value={searchtext}
                            onChange={onInputChange}
                        />
                        <button className="btn btn-outline-primary mt-1">Search</button>

                    </form>
                </div>

                <div className="col-7">

                    <h4>Results</h4>
                    <hr />

                    <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: searchBar ? '' : 'none' }}>
                        Search a game
                    </div>

                    <div className="alert alert-danger animate__animated animate__fadeIn" style={{ display: warningBar ? '' : 'none' }}>
                        No game with <b>{q}</b>
                    </div>

                    {
                        games.map(game => (
                            <GameCard key={game.id} {...game} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}