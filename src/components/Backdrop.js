import React from 'react';

import { backdrop } from '../styles/backdrop.module.css'

import Star from './Star';
import ClientOnly from './ClientOnly'
import { motion } from 'framer-motion';

var stars = []
for (let i = 0; i < 500; i++)
{
  stars.push(<Star key={i} id={i} />)
}

function Backdrop()
{




  return (
    <ClientOnly>
      <div
        className={backdrop}

      // position="fixed"
      // w="100vw"
      // h="100vh"
      // bgGradient="linear(to-r, gray.900, gray.900)"
      // zIndex={-1}
      // overflow="hidden"
      >
        <motion.div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%"
          }}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        >
          {stars}
        </motion.div>


        {/* {stars.map((star) => (
          < Star key={star} id={star} />
        ))} */}
      </div>
    </ClientOnly>
  );
}

export default Backdrop;