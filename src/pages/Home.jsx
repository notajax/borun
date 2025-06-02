import React from 'react'

export default function Home() {
  return (
    <div dangerouslySetInnerHTML={{ __html: document.querySelector('#root').innerHTML }} />
  )
}