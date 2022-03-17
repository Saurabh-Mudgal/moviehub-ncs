import React, { useState } from 'react'
import { Hero, View } from './body-subcomp';

const Body = ( {filter, setFilter} ) => {
  const [search, setSearch] = useState("");

  return (
    <>
    <Hero setSearch={setSearch} />
    <View search={search} filter={filter} setFilter={setFilter} />
    </>
  )
}

export default Body