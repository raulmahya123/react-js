import React from 'react'
import {Outlet} from 'react-router-dom'
import Sidebar from '../Sidebar'

export default function Layout() {
  return (
    <div className='flex flex-row w-screen h-screen overflow-hidden bg-neutral-100'>
  <Sidebar/>
  <div className='p-4'>
<div className='bg-teal-200'>navbar</div>
  <div>{<Outlet/>}</div>
  </div>
  </div>
  )
}
