import React from 'react';
import { motion } from 'framer-motion'
import { Circle } from '@chakra-ui/layout';

import pages from '../data/Pages.json'

function BigPlanet({ id })
{
  const { planetUrl } = pages.find(x => x.title === id)

  return (
    <motion.div
      layoutId={`${id}-planet`}
      style={{
        position: "absolute",
        right: "30vw",
        top: "25vh",
        height: "150vh",
        width: "150vh",
        perspective: "1200px",
        display: "inline-block",
        perspectiveOrigin: "50% 50%",
        borderRadius: "75vh",
        overflow: "hidden"
      }}
      transition={{
        ease: [.52, 0, .67, .97],
        duration: 2
      }}
    >
      <Circle
        className="ball big-ball"
        bgImg={`url(${planetUrl})`}
        overflow="hidden"
      />
    </motion.div>
  );
}

export default BigPlanet;