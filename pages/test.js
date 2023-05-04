import { useRouter } from 'next/router'
import React from 'react'

function Test() {
  const { query } = useRouter()
  // It's not working
  console.log(query.name)
  return <div>Hello World {query.name}</div>
}

export default Test
