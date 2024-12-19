import { Server } from './server';

export class PokemonFighterClub {
  private readonly server: Server;

  constructor() {
    this.server = new Server();
  }
  start() {
    this.server.listen();
  }
}
