import { play } from "../data/play";

export const getGameByName = (name = '') => {

    name = name.toLocaleLowerCase().trim();

    if (name.length == 0) return [];

    return play.filter(
        game => game.namegame.toLocaleLowerCase().includes(name)
    )
}