import { play } from "../data/play"

export const getGameById = (id) => {

    return play.find(game => game.id === id);
}