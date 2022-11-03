import React from 'react'
import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <div>
    this is product
      <Link to="/" className='underline'>go to dasbord</Link>
      <form>
  <label>
    Name:
    <input type="text" name="name" />
        </label>
        <label>
    Name:
    <input type="text" name="name" />
        </label>
        <label>
    Name:
    <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
        
      </form>
      
    </div>
  )
}
