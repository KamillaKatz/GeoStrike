import { IGraphQLContext } from '../../context';

export const createNewGame = (rootValue, { character }, { games }: IGraphQLContext) => {
  const game = games.createNewGame();
  const player = games.addPlayerToGame(game.gameId, character);

  return {
    game,
    player,
  };
};
