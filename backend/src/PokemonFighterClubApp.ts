import { Server as HttpServer } from 'http';
import Server from './Server';

export default class PokemonFighterClubApp {
  private readonly server: Server;

  constructor() {
    this.server = new Server();
  }
  async start() {
    this.server.loadRoutes();
    return this.server.listen();
  }

  get httpServer(): HttpServer | undefined {
    return this.server?.getHTTPServer();
  }

  async stop(): Promise<void> {
    return this.server?.stop();
  }
}
