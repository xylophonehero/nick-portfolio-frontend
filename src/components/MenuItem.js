import React from 'react';
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import { Heading, HStack } from '@chakra-ui/react'

import SmallPlanet from './SmallPlanet'

function MenuItem({ id, planetUrl })
{
  return (

    <HStack spacing="1rem" ml={`${Math.floor(Math.random() * 10)}rem`} mt={`${Math.floor(Math.random() * 5) + 1}rem`}>

      <motion.div layout layoutId={`${id}-text`} style={{ width: "300px" }}>
        <Link to={`/${id}`}>
          <Heading fontSize={["2xl", "4xl"]} w="auto" textAlign="right">
            {id.toUpperCase()}
          </Heading>
        </Link>
      </motion.div>
      <SmallPlanet planetUrl={planetUrl} id={id} />
    </HStack>

  );
}

export default MenuItem;