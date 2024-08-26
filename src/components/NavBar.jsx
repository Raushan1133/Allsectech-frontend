import React, { useState } from 'react'
import Logo from '../assets/main-logo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [insights , setInsights] = useState(false);
  const [industries , setIndustries] = useState(false);
  const [services , setServices] = useState(false);
  const [careers , setCareers] = useState(false);
  const [news , setNews] = useState(false);
  const [about , setAbout] = useState(false);


  return (
    <>
    <div  className="navbar  text-black   text-4xl bg-slate-200 hover:bg-white fixed z-20  hover:text-black transition-all ">
    <div className='h-full flex gap-3 items-center justify-between'>
    <div className="navbar-start flex flex-auto items-center ">
    <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
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
          className="menu menu-lg dropdown-content bg-white rounded-box z-[1] mt-3 w-96  p-2 shadow justify-center">
        <li><Link to={'/insights'}>Insights</Link></li>

        <li>
            <Link to={'/industries'} >Industries</Link>
        </li>
        <li>
            <Link to={'/services'} >Services</Link>
        </li>
        <li>
            <Link to={'/careers'} >Careers</Link>
        </li>
        <li>
            <Link to={'/'} >News</Link>
        </li>
        <li>
            <Link to={'/'} >About us</Link>
        </li>
        </ul>
      </div>
      <Link to={'/'}>
      <img src={Logo}  alt="Logo"  className='w-[180px]' />
      </Link>
    </div>
    {/* Pc */}
    <div className="navbar-center  hidden lg:flex">
      <ul className="menu menu-horizontal px-1 h-full  ">
          <li >
            <Link to={'/insights'} onMouseEnter={()=>{setInsights(true)}} onMouseLeave={()=>setInsights(false)} className='text-lg font-semibold text-red-500 h-full '  >Insights</Link>
          </li>
        <li>
            <Link to={'/industries'}  className='text-lg font-semibold text-red-500' onMouseEnter={()=>setIndustries(true)} onMouseLeave={()=>setIndustries(false)}>Industries</Link>
        </li>
        <li>
            <Link to={'/services'} className='hover:text-red-500 text-lg  font-semibold text-red-500' onMouseEnter={()=>setServices(true)} onMouseLeave={()=>setServices(false)}>Services</Link>
        </li>
        <li>
        <Link to={'/careers'} className='hover:text-red-500 text-lg  font-semibold text-red-500' onMouseEnter={()=>setCareers(true)} onMouseLeave={()=>setCareers(false)}>Careers</Link>
        </li>
        <li>
        <Link className='hover:text-red-500 text-lg   font-semibold text-red-500' onMouseEnter={()=>setNews(true)} onMouseLeave={()=>setNews(false)}>News</Link>
        </li>
        <li>
        <Link className='hover:text-red-500 text-lg font-semibold text-red-500' onMouseEnter={()=>setAbout(true)} onMouseLeave={()=>setAbout(false)}>About us</Link>
        </li>
        
      </ul>
    </div> 
    </div> 

    {/* Navbar end */}
    {/* <div className="navbar-end ml-auto pr-3 flex ">
    <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          className="menu menu-md dropdown-content bg-white rounded-box z-[1] mt-3 w-96  p-2 shadow justify-center">
        <li><Link to={'/insights'}>Insights</Link></li>

        <li>
            <Link to={'/industries'} >Industries</Link>
        </li>
        <li>
            <Link to={'/services'} >Services</Link>
        </li>
        <li>
            <Link to={'/careers'} >Careers</Link>
        </li>
        <li>
            <Link to={'/'} >News</Link>
        </li>
        <li>
            <Link to={'/'} >About us</Link>
        </li>
        </ul>
      </div>
    </div> */}
 
    
  </div>

    {/* {
      insights && (
  <div className='container  bg-white z-10 py-20' onMouseEnter={()=>setInsights(true)} onMouseLeave={()=>setInsights(false)}>
    <h1 className='text-3xl'>Insights</h1>
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
      )
    }

    {
      industries && (
        <div className='container fixed  bg-white  my-[75px] '>
          <h1>Industries</h1>
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
      )
    }

    {
      services && (
        <div className='container fixed bg-white my-[75px]'>
          <h1>Services</h1>
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
      )
    }
    {
      careers && (
        <div className='container fixed bg-white my-[75px]'>
          <h1>careers</h1>
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
      )
    }
        {
      news && (
        <div className='container fixed bg-white my-[75px]'>
          <h1>News</h1>
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
      )
    }

{
      about && (
        <div className='container fixed bg-white my-[75px] '>
          <h1>About us</h1>
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
      )
    } */}
  </>
 
  )
}

export default NavBar
