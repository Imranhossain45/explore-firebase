import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-slate-900 py-4'>
      <div className='container flex justify-between text-white'>
      <div>
        <h2>Practice</h2>
      </div>
      <div>
        <ul className='flex gap-3'>
          <li>
            <Link to={'home'}>Home</Link>
          </li>
          <li><Link to={'products'}>Products</Link></li>
          <li><Link to={'contact'}>Contact</Link></li>
          <li><Link to={'login'}>Login</Link></li>
          <li><Link to={'register'}>Register</Link></li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Navbar