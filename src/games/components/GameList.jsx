import { useMemo } from "react";
import { getGameByType } from "../helpers/getGameByType"
import { GameCard } from "./GameCard";

export const GameList = ({ type }) => {

    //const games = useMemo(() => getGameByType(type), [type]);

    const games = getGameByType(type);


    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                games.map(game => <GameCard key={game.id} {...game} />)
            }
        </div>
    )
}