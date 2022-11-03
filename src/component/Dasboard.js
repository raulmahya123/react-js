import React from 'react'
import { Link } from 'react-router-dom'

export default function dasboard() {
  return (
    <div>
    <p>dasboard</p>
    <Link to="/products" className='underline'>go to product
    </Link>
    </div>
  )
}
