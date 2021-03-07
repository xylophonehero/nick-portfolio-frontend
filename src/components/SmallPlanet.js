import React from 'react';
import { motion } from 'framer-motion'

import '../styles/planet.css'
import { Circle } from '@chakra-ui/layout';

function SmallPlanet({ id, planetUrl })
{
  return (
    <motion.div
      layoutId={`${id}-planet`}
      style={{
        height: "4rem",
        width: "4rem",
        borderRadius: "2rem",
        perspective: "1200px",
        display: "inline-block",
        perspectiveOrigin: "50% 50%",
        overflow: 'hidden'
      }}
      transition={{
        ease: [.52, 0, .67, .97],
        duration: 2
      }}
    >
      <Circle
        className="ball small-ball"
        bgImage={`url(${planetUrl})`}
      />
    </motion.div>
  );
}

export default SmallPlanet;