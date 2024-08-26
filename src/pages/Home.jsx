import React from 'react'
import section2Card from '../assets/homepage-images/second-section.jpg'
// import { Link } from 'react-router-dom'
import Section3Card1 from '../assets/homepage-images/thirdcard1.jpg'
import Section3Card2 from '../assets/homepage-images/thirdcard2.jpg'
import { Link } from 'react-router-dom'
import Section4Card1 from '../assets/homepage-images/fourth-section-first-img.png'
import Section4Card2 from '../assets/homepage-images/fourth-section-second-img..jpg'
import Section4Card3 from '../assets/homepage-images/fourth-section-third-img.jpg'
import Fifthbg from '../assets/homepage-images/fifth-section-bg.jpg'
import sixthimg from '../assets/homepage-images/sixth-section-img.png'
import {Typewriter} from "react-simple-typewriter";


const Home = () => {
  return (
   <>
    {/* Banner  */}
    <div className="banner max-w-full py-64  container bg-cover bg-no-repeat w-full h-full overflow-hidden" > 
      <div className=' max-w-full text-center text-white'>
        <h2 className='sm:text-6xl text-2xl font-semibold text-center'>Discover your potential.</h2>
        <div className='w-full'>
        <h1 className=' font-semibold text-xl'><Typewriter
            words={['Navigate infinite possibilities']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1000}
            /></h1>
        </div>
      </div>
    </div>
    {/* Section 2 */}

    <div className='max-w-full bg-white'>
    <div className='container bg-white mx-auto'>
      <div className=' p-[50px] flex justify-center items-center flex-col sm:flex-row'>
        <div className='max-w-sm rounded-2xl overflow-hidden bg-slate-100 shadow'>
          <img className='overflow-hidden' src={section2Card} alt="section2Card" />
          <div>
            <p className='text-black p-5'>Navigating Transformation in BPM and HR Outsourcing: Staying Ahead of the Curve?</p>
          </div>
        </div>
        <div className='max-w-xs  '>
          <h1 className='text-3xl text-center text-black font-bold'>Discover the
        Allsec Edge</h1>
        <hr className='bg-red-500 h-2 rounded mt-2' />
        <div className='p-5 w-full'>
          <p className='text-black'>
          Stay informed on the latest industry trends.
          Explore new articles, case studies, and
          whitepapers, showcasing cutting-edge
          trends every week.
          </p>
          <button className= ' mt-2 bg-white border border-red-500 rounded-[999999px] text-red-500 py-1 px-3 hover:bg-red-500 hover:text-white transition-all' >Learn more</button>
        </div>
        </div>
      </div>
    </div>
    </div>

    {/* Section 3 */}
    <div className='max-w-full bg-white py-[50px] w-full section3 mx-auto'>
        <div className='container flex mx-auto justify-center px-4'>
          <div className='max-w-4xl'>
          <h1 className='text-black font-bold text-4xl'>Insights and Updates</h1>
          <p className='text-black mt-8'>Hit the Customer Experience homerun with latest insights, articles, findings, and blogs on innovative CEM technology, checklists to outsource customer service and digital transformation strategies.</p>

          <div className='py-[50px] flex mx-auto gap-5 sm:flex-row flex-col justify-center'>
            {/* Card 1 */}
            <div className='max-w-sm mx-auto shadow'>
            <img src={Section3Card1} alt="card1" />

            <div className='text-black p-4'>
            <p >Transforming Fintech Operations: Enhancing Customer Engagement Through Captive Contact Center Solutions</p>
            <button className='text-red-500 mt-1'>Read more...</button>
            </div>
            </div>
            {/* Card 2 */}
            <div className='max-w-sm mt-5 sm:mt-0 mx-auto shadow'>
              <img src={Section3Card2} alt="card2" />
              <div className='text-black p-4'>
            <p >Navigating the Year-End Payroll Maze: Essential Tips for Smooth Processing in India</p>
            <button className='text-red-500 mt-1'>Read more...</button>
            </div>
            </div>

          </div>
          </div>
        </div>
    </div>

    {/* Section 4 */}
    <div className='max-w-full px-4 bg-white py-[50px] '>
        <div className='container mx-auto flex justify-center'>
          <div className='max-w-4xl'>
            <h1 className='text-4xl font-bold text-black text-center'>Accreditations & Certifications</h1>
            <div className='flex justify-between sm:flex-row items-center flex-col'>
              <div className='m-w-sm overflow-hidden'>
              <img src={Section4Card1} alt="certificate1" />
              </div>
              <div className='m-w-sm overflow-hidden'>
              <img src={Section4Card2} alt="certificate2" />
              </div>    
              <div className='m-w-sm overflow-hidden'>
              <img src={Section4Card3} alt="certificate3" />
              </div>          
            </div>
          </div>
        </div>
    </div>

    {/* Section 5 */}
    <div style={{backgroundImage:`url(${Fifthbg})`}} className="max-w-full px-4 bg-white py-[50px]">
      <div className="container mx-auto  flex justify-center ">
           <div className='max-w-2xl text-black '>
           <h1 className='text-4xl font-bold text-black'>Allsec: Your Agile Growth Partner</h1>
           <p className='mt-10'>Align your growth with market trends, backed by Allsec’s Expertise. Our customer-centric solutions with analytics-driven strategies, offer adaptability to swiftly respond to evolving market dynamics, propelling your progress in a constantly changing business landscape.</p>
           <p className='mt-10'>With Allsec, you can propel your business journey with a powerful fusion of industry expertise and integrated technologies, driving your future success.</p>
           </div>
      </div>
  
      <div className="container flex justify-center mx-auto px-4">
           <div className='max-w-4xl'>
           <div className='max-w-full flex justify-between text-black mt-28 gap-5 flex-col sm:flex-row'>
            <div className='border max-w-32 w-full py-4 px-6 rounded-xl shadow-xl bg-white'>
              <p className='text-wrap '>20+ years of
              industry expertise</p>
            </div>

            <div className='border max-w-32 w-full py-4 px-6 rounded-xl shadow-xl bg-white'>
              <p className='text-wrap '>Agile
              and adapatable</p>
            </div>

            <div className='border max-w-32 w-full py-4 px-6 rounded-xl shadow-xl bg-white'>
              <p className='text-wrap '>Collaborative
              and client-focused</p>
            </div>

            <div className='border max-w-32 w-full py-4 px-6 rounded-xl shadow-xl bg-white'>
              <p className='text-wrap '>Quality
              and reliability</p>
            </div>

            <div className='border max-w-32 w-full py-4 px-6 rounded-xl shadow-xl bg-white'>
              <p className='text-wrap '>A diverse
              and talented team</p>
            </div>
            
           </div>
           </div>
           </div>
           <div className='text-center mt-20 text-white'>
            <button className='bg-red-500 rounded-lg outline-none px-3 py-3'>Contact us</button>
           </div>
    </div>

    {/* Section 6 */}
    <div className="max-w-full px-4 py-[50px] bg-white">
          <h1 className='text-4xl text-center font-bold text-black'>Cultivating a Culture of Growth</h1>
      <div className="container flex items-center mx-auto mt-20 gap-10 flex-col sm:flex-row justify-center">
          <div className='max-w-sm'>
            <img src={sixthimg} alt="" />
          </div>
          <div className='max-w-sm text-black'>
            <p>We’re moving forward. We’re moving upward. At Allsec, our employees have the freedom to innovate, the ownership to act, and the resources to thrive. Our culture goes beyond mere employment, promoting outstanding performance and overall well-being. If you’re looking for a company that values its people, come join us at Allsec.
            </p>
            <div className='text-center'>
              <button className='rounded-[9999px] bg-red-500 mt-10 text-white outline-none px-3 py-3'>Learn More</button>
            </div>
          </div>
      </div>
    </div>

    {/* Section 7 */}
    <div className="max-w-full bg-white py-[50px] mx-auto">
        <h1 className='text-4xl font-bold text-black text-center'>Start a Conversation</h1>
      <div className="container px-4 flex justify-center flex-col md:flex-row mx-auto gap-3  mt-5">

        <div className=' flex  max-w-md w-full justify-center items-center mx-auto md:mx-0'>
          <form action="" className='flex gap-4 flex-col w-full'>
            <input type="text" className='bg-white border px-4 grid-cols-6 py-4 rounded w-full border-black focus:border-red-500' placeholder='Full name' />
            <input type="text" className='bg-white border px-4 grid-cols-6 py-4 rounded w-full border-black focus:border-red-500' placeholder='Business email' />
            <input type="text" className='bg-white border px-4 grid-cols-6 py-4 rounded w-full border-black focus:border-red-500' placeholder='Phone' />
          </form>
        </div>

        <div className='flex flex-col max-w-md text-black justify-center md:mx-0 mx-auto md:ml-3'>
        <div className='flex gap-1'>
          <input type="checkbox"  /><p>By submitting this information, I agree that I have gone through the Allsec’s Privacy Policy and I provide my consent to Allsec Technologies to process & store my personal information.Please fill out this field.</p>
        </div>
        <div className='flex gap-1 mt-5'>
          <input type="checkbox" /><p>By submitting this information, I agree that I have gone through the Allsec’s Privacy Policy and I provide my consent to Allsec Technologies to process & store my personal information.Please fill out this field.</p>
        </div>
        <div className='flex gap-1 mt-5'>
          <input type="checkbox" /><p>By submitting this information, I agree that I have gone through the Allsec’s Privacy Policy and I provide my consent to Allsec Technologies to process & store my personal information.Please fill out this field.</p>
        </div>
        </div>
      </div>
        <div className='text-center mt-10 text-white'>
        <button className='bg-red-500 rounded-lg outline-none px-5 py-3'>Submit</button>
        </div>
    </div>

   </>
  )
}

export default Home
