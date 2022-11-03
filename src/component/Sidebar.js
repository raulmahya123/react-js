import React from 'react'
import {DiMozilla} from 'react-icons/di'
import {HiOutlineLogout} from 'react-icons/hi'
import { Link,useLocation} from 'react-router-dom'
import { DASHBOARD_SIDEBAR_LINKS ,DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../lib/consts/navigation'
import classNames from 'classnames'

const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded0sm text-base'

export default function Sidebar() {
  return (
    <div className='flex flex-col p-3 text-white bg-neutral-900 w-60'>
    <div className='flex items-center gap-2 px-1 py-3'>
    <DiMozilla fontSize={50}/>
    <span className='text-lg text-neutral-100'>GEOLOGI</span>
    </div>
    <div className='flex-1 py-8 flex flex-col gap-0.5'>
{DASHBOARD_SIDEBAR_LINKS.map((item)=>(
    <SidebarLink key={item.key} item={item}/>
))}
    </div>
    <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map(item => (<SidebarLink key={item.key} item={item}/>
        ))}
        <div className={classNames (' bg-red-500 cursor-pointer',linkClasses)}>
        <span className="text-xl"><HiOutlineLogout/>
        </span>
        Logout
        </div>
    </div>
    </div>
  )
}
function SidebarLink ({item}){

const {pathname} = useLocation()

    return(
        <Link to={item.path} className={classNames (pathname ===item.path ? 'text-white bg-neutral-700':'text-neutral-400',linkClasses) }>
        <span className="text-xl">{item.icon}</span>{item.label}
        </Link>
    )
}