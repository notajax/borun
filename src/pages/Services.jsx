import React from 'react'

export default function Services() {
  return (
    <div dangerouslySetInnerHTML={{ __html: document.querySelector('#services-page').innerHTML }} />
  )
}