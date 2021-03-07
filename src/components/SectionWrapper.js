import { Container, Heading } from '@chakra-ui/layout';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'gatsby';

function SectionWrapper({ id, children })
{
  return (
    <Container>
      <motion.div layout layoutId={`${id}-text`}  >
        <Heading fontSize={["2xl", "4xl"]}>
          {id.toUpperCase()}
        </Heading>
      </motion.div>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Link to="/">
            Back
        </Link>
          {children}
        </motion.div>
      </AnimatePresence>
    </Container>
  );
}

export default SectionWrapper;