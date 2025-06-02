import React from 'react'

export default function Schedule() {
  return (
    <div dangerouslySetInnerHTML={{ __html: document.querySelector('#schedule-page').innerHTML }} />
  )
}