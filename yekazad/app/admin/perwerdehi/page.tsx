//Bismillahirahmanirahim

"use client"

import { FormEvent } from 'react'
 
import { useState } from 'react'
export default function Page() {
  const [Agahi, setAgahi] = useState("")
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    fetch('/api/peyam', {
      method: 'POST',
      body: JSON.stringify({Agahi}),


    })

    // Handle response if necessary
    // ...
  }
 
  return (
    <form onSubmit={onSubmit}>
      <input onChange={(e)=>setAgahi(e.target.value)} type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  )
}