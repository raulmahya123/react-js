import React from 'react'
import { Link } from 'react-router-dom'
import IsiDas from './IsiDas'

export default function dasboard() {
  return (
    <div>
    <p>dasboard</p>
      <Link to={IsiDas} className='underline'>go to product
    </Link>
    </div>
  )
}
