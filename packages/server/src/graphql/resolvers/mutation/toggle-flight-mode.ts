import { IGraphQLContext } from '../../context';
import { ESubscriptionTopics, pubsub } from '../../pubsub';
import { CharacterType, IGameObject, IPlayer, IViewer } from '../../../core/local-data/game-manager';

export const toggleFlightMode = (rootValue, { playerId, isFlying }, { games, game, player }: IGraphQLContext) => {
  if (!game || !player) {
    return null;
  }

  const flyingPlayer = ((game.controlledPlayersMap.get(playerId) || player) as IPlayer);
  let intervalId;
  console.log("playerId: "+playerId,"isFlying: "+isFlying);
  if(isFlying)
  {
    // notifyOtherPlayers(player, game);
    this.intervalId =  setInterval(( ()=> flyingPlayer.flight.remainingTime-=1),1000);
  }
  else
  {
    clearInterval(this.intervalId);
  }

    // console.log("test"+flyingPlayer.flight.remainingTime+flyingPlayer.isFlying+isFlying);
}

