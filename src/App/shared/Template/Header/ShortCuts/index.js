import { Person, ShoppingCart } from '@material-ui/icons'
import React from 'react'

import "./styles.scss"

export const ShortCuts = () => {
  return (
    <div className="shortcuts">
      <Person />
      <ShoppingCart />
    </div>
  )
}
