import { play } from "../data/play";

export const getGameByType = (type) => {

    const validTypes = ['action', 'adventure', 'fighting', 'rpg', 'sports'];

    if (!validTypes.includes(type)) {
        throw new Error, console.log('Type is not a valid');
    }
    return play.filter(game => game.type === type);
}