import React from 'react'
import MenuItem from '../components/MenuItem'

import pages from '../data/Pages.json'

export default function Home()
{
  return (
    <div>
      {pages.map((page) =>

        <MenuItem key={page.id} id={page.title} planetUrl={page.planetUrl} />
      )}

    </div>
  )
}
