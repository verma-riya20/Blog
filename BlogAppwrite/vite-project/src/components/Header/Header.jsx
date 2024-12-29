import React from 'react'
import Container from '../container/Container'
import Logoutbtn from './Logoutbtn'
import Logo from '../Logo'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const authStatus=useSelector((state)=>state.auth.status)
  const navigate=useNavigate();
  const navItems=[
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]
  return (
    <Header className='py-3 shadow bg-gray-300'>
      <Container>
        <nav className='flex'>
          <link to='/'>
          <Logo/></link>
        </nav>
        <ul className='flesx ml-auto'>
          {navItems.map((items)=>{
            items.active ?(
              <li key={items.name}>
                <button onClick={()=>navigate(items.slug)}>
                  {items.name}
                </button>
              </li>
            ):null
          })}
          {authStatus && 
          <li>
            <Logoutbtn/>
            </li>}
        </ul>
      </Container>
    </Header>
  )
}

export default Header