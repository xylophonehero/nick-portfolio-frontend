import
{
  Box,
  Flex,
} from '@chakra-ui/layout';
import React from 'react';

import BigPlanet from '../components/BigPlanet'
import SmallPlanet from '../components/SmallPlanet'
import pages from '../data/Pages.json'

function PageOverlay({ id })
{
  const planets = pages.filter(x => x.title !== id)

  return (
    <>
      <Box
        position="fixed"
        top="0"
        h="100vh"
        w="100vw"
        zIndex={-1}
      >
        <BigPlanet id={id} />
        <Flex direction="column" alignItems="flex-end">
          {planets.map(planet => (
            <Box key={planet.id} mr={`${Math.floor(Math.random() * 10) + 2}rem`} mt={`${Math.floor(Math.random() * 10) + 1}rem`}>

              <SmallPlanet id={planet.title} planetUrl={planet.planetUrl} />
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
}

export default PageOverlay;