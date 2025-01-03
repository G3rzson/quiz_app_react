import React from 'react'

export default function ErrorMsg({error}) {
  return (
    <p className='text-pink-500 text-2xl text-center'>{error}</p>
  )
}
