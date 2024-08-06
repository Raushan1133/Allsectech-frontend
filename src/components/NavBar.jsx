import React from 'react'
import Logo from '../assets/homepage-images/Allsec-logo.jpg'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div className="navbar  text-black text-4xl  bg-white">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn  btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-white  rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li className='peer'><Link to={'/'}>Customer Experience Management</Link></li>
       
        <li>
            <Link to={'/employee-experience-management'} >Employee Experience Management</Link>
        </li>
        <ul>
            <li><a>About</a></li>
            <ul className="">
            <li ><a><span className='text-white'>Company</span></a></li>
              <li><a className='bg-white'>Leadership </a></li>
              <li><a>Careers </a></li>
              <li><a>Resources </a></li>
              <li><a>Contact </a></li>
            </ul>
          </ul>
        </ul>
      </div>
      <img src={Logo} alt="Logo" width={200} />
    </div>
    {/* Pc */}
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 ">
        <li><Link to={'/'} className='hover:text-red-500 text-lg' >Customer Experience Management</Link></li>
        
        <li>
            <Link to={'/employee-experience-management'} className='hover:text-red-500 text-lg'>Employee Experience Management</Link>
        </li>
        <li>
            <a className='hover:text-red-500 text-lg'>Investor Information</a>
        </li>
        <li>
          <details>
            <summary className='hover:text-red-500 text-lg'>About</summary>
            <ul className="p-2 bg-white mt-8 ml-8 drop">
              <li><a className='hover:text-red-500'>Company</a></li>
              <li><a className='hover:text-red-500'>Leadership </a></li>
              <li><a className='hover:text-red-500'>Careers </a></li>
              <li><a className='hover:text-red-500'>Resources </a></li>
              <li><a className='hover:text-red-500'>Contact </a></li>
            </ul>
          </details>
        </li>
        
      </ul>
    </div>  
    
  </div>

  <div className='container fixed bg-white hidden'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae saepe totam nostrum ullam mollitia dolorem sunt ab possimus assumenda dolore quam hic reprehenderit atque, aliquid rem ea, libero corrupti praesentium!
    Officiis iste libero iure possimus, in rem ipsam atque voluptates rerum veniam omnis quae ipsa fugit eligendi, quibusdam distinctio placeat. Perferendis voluptate fugiat unde voluptates. Repellat officiis maiores libero accusantium.
    Quo quod tenetur debitis eveniet quos, harum obcaecati repellendus cupiditate fugiat accusamus sunt. Veniam labore eligendi velit provident consequuntur sit inventore minima ducimus odio. Architecto ducimus quo odit magni quasi.
    Quaerat voluptatem quia nostrum expedita libero laborum saepe deserunt dolorum quas cupiditate neque similique facere provident quasi harum, tempora totam natus officia dicta quisquam consequatur commodi. Perspiciatis, laudantium. Dolorem, accusamus.
    Laborum illum ab omnis corporis laboriosam harum hic enim quidem unde voluptates optio magni facilis in non, fugit praesentium veritatis quo nemo, repellat suscipit, eum commodi voluptatem debitis! Id, facere.
    Deleniti tempore deserunt, accusamus ullam fugit harum animi repudiandae optio natus saepe corporis odit incidunt? Enim nam rerum doloremque, eligendi molestiae dicta itaque ea vitae culpa hic mollitia, esse quas.
    Soluta eos, doloribus reiciendis quaerat dignissimos tempora asperiores unde quasi pariatur culpa repellat! Minima quam voluptatem quia itaque autem dolor facere eveniet vitae eaque. Beatae facilis sed delectus corporis quam?
    Perspiciatis vel omnis doloremque voluptatum ipsum beatae consectetur hic, aliquam, repellendus, commodi nemo. Nobis, harum qui et ut vel corrupti obcaecati odit temporibus fuga laborum, natus doloremque voluptatibus ipsum aspernatur.
    Eos earum ullam cupiditate accusamus recusandae expedita illo, necessitatibus, sapiente iusto asperiores sunt, optio veniam cum nam neque odit qui cumque ipsa consequatur aut placeat. A velit assumenda quam molestias.
    Nemo fugit ab rem sapiente culpa animi odit? Sunt nobis amet, quos voluptas natus quas sed alias porro eius, eveniet aliquam mollitia nihil autem eligendi obcaecati, repudiandae temporibus ducimus incidunt.
    </div>
  </>
 
  )
}

export default NavBar
