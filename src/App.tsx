import { Grid, GridItem, Show } from '@chakra-ui/react';
import GameGrid from './assets/components/GameGrid';
import NavBar from './assets/components/NavBar';

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">Aside</GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
