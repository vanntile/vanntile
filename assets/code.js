import React from 'react'
import { JEFF_ATWOOD, AC_CLARKE } from '../services/authors'

export const Quote = () => {
  const quote = (author) => (
    author === JEFF_ATWOOD ?
      'Any application that can be written in JavaScript, will eventually be written in JavaScript.' :
    author === AC_CLARKE ?
      'Any sufficiently advanced technology is indistinguishable from magic.' :
    /* ... */
  )

  return (<div>{quote(JEFF_ATWOOD)}</div>)
}
