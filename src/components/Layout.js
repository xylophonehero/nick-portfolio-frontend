
import React from 'react'
import { AnimateSharedLayout } from 'framer-motion'

import Backdrop from './Backdrop';
import Navbar from './Navbar';
import PageOverlay from './PageOverlay'

function Layout({ uri, children })
{
  const id = uri.substring(1)

  return (
    <>
      <Backdrop />
      <Navbar animate={!!id} />
      <AnimateSharedLayout type="crossfade">
        {id && <PageOverlay id={id} />}
        <main>{children}</main>
      </AnimateSharedLayout>
    </>
  );
}

export default Layout;