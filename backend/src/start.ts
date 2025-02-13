import PokemonFighterClubApp from './PokemonFighterClubApp';

try {
  new PokemonFighterClubApp().start();
} catch (error) {
  console.error('Error starting the server:', error);
}
