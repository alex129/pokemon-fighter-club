import { PokemonFighterClub } from './PokemonFighterClub';
import 'dotenv/config';

try {
  new PokemonFighterClub().start();
} catch (error) {
  console.error('Error starting the server:', error);
}
