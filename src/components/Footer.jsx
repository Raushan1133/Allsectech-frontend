import FooterImg from '../assets/homepage-images/footer-img.jpg'
import Logo from '../assets/main-logo.png'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div  className='max-w-full bg-blue-600'>
      <div className="max-w-[1280px] px-[100px] py-[50px]">
           <div className="w-full flex justify-between items-center mx-auto flex-col sm:flex-row" >
           <div className='max-w-sm'>
                <img src={Logo} className='w-full' alt="logo" />
            </div>

            <div className='flex pl-10 md:justify-between justify-center max-w-full w-full flex-col sm:flex-row'>
            <ul className='text-white flex flex-col gap-10'>
                <li>
                <Link to={'/insights'}>Insights</Link>
                </li>
                <Link to={'/Industries'}>
                <li>Industries</li>
                </Link>
            </ul>
            <ul className='text-white flex flex-col gap-5'>
                  <Link to={'/'}>
                <li>
                Who we are
                </li>
                  </Link>
                  <Link to='/'>
                <li>Our team</li>
                  </Link>
                  <Link to='/'>
                <li>Resources</li>
                  </Link>
            </ul>
            <ul className='text-white flex flex-col gap-5'>
              <Link to='/'>
                <li>
                Contact
                </li>
              </Link>
              <Link to='/'>
                <li>Cookie Policy</li>
              </Link>
              <Link to='/'>
                <li>Privacy Policy</li>
              </Link>
            </ul>
            </div>
           </div>

           <div >
            <hr className='mt-10 border-white h-1 w-full' />
            <div className='mx-auto flex justify-end gap-5 mt-5  text-white text-xl'>
              <div className='flex gap-4 cursor-pointer'>
                <FaFacebook />
                <FaTwitter />
                <FaYoutube />
                <FaLinkedin />
              </div>
            </div>
           </div>
      </div>
    </div>
  )
}

export default Footer
