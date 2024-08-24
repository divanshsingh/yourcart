import React from 'react'
import { FiShoppingBag } from 'react-icons/fi'
import { IoMdCart } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {

const { cartItems } = useSelector((state)=> state.cart)

  return (
    <nav>
<Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div>
        <h2>Your</h2>
        <span><IoMdCart size={'2rem'} /></span>
        </div>
        </Link>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/cart'>
            <FiShoppingBag />
            <p>{cartItems.length}</p>
            </Link>
        </div>
    </nav>
  )
}

export default Header
