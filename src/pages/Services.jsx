import React from 'react'
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";
import servicesCards from '../Cards/ServicesCards';
const Services = () => {
  return (
    <>
        {/* Section 1 */}
        <div className="container max-w-full pt-56 h-[60vh] services relative mx-auto">
            <div className="max-w-full mt-20 absolute top-52 bottom-0 right-0 left-0 px-20">
            <div className='bg-blue-700  opacity-80  max-w-lg rounded  h-56  flex items-center '>
          <h1 className='text-white font-semibold text-3xl  sm:text-5xl ml-2'>Services</h1>
        </div>
            </div>
        </div>

        {/* Section 2 */}
        <div className="container px-4 md:px-20 py-48 max-w-full bg-slate-200">
            
            <div className='py-50 bg-slate-200'>
                <h1 className='sm:text-4xl text-2xl text-black font-semibold sm:tracking-wide '>A constantly evolving portfolio to meet the ever-changing needs of our clients.
                </h1>
                <div className='flex items-center flex-col sm:flex-row gap-5 mt-5 py-2 '>
                    <div className='flex flex-row  sm:flex-col items-center text-black mt-2'>
                        <TiSocialLinkedinCircular cursor={'pointer'}  size={50} />
                        <TiSocialFacebookCircular cursor={'pointer'} size={50} />
                    </div>
                <h1 className='sm:text-xl  text-black font-semibold mt-5 tracking-wide'>We focus on three ‘playing fields’ dedicated to the digitalization of key management areas at the core of businesses: Customer First, Intelligent Industry, and Enterprise Management. This is underpinned by two technological pillars essential to all forms of digital transformation – data and cloud, without losing sight of the fundamentals of cybersecurity and sustainable development.
                </h1>
                </div>
                
            </div>
        </div>

        {/* Section 3 */}
        <div className='container sm:px-20 px-4 pb-48 max-w-full bg-slate-200'>
            <div>
            <h1 className='text-4xl text-black'>Explore our services</h1>
            </div>

            {/* Card container */}
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">

                {/* Card 1 */}
                {
                    servicesCards.map((card ,index)=>{
                        return(
                            <div className='flex flex-col items-center h-full w-full' key={index}>
                                <div className='w-full h-full overflow-hidden relative cursor-pointer'>
                                <img src={card.image} alt="cards" className='h-ful w-full hover:scale-125 transition-all delay-100'  />
                                {/* <div className='h-full w-full' style={{backgroundImage : `url(${card.image})` , backgroundSize:'cover',backgroundPosition:'center center'}}></div> */}
                                </div>
                                <div className='w-[80%] bg-white cursor-pointer flex items-center justify-center py-14 -mt-10 z-10'>
                                    <h1 className='text-base sm:text-2xl text-black font-semibold '>{card.heading}</h1>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Services
