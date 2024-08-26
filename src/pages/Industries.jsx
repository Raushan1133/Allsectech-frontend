import React from 'react'
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";
import cards from '../Cards/IndustriesCards';

const Industries = () => {
  return ( 
    <>
        {/* Section 1 */}
        <div className="container max-w-full pt-56 h-[60vh] industries  mx-auto px-20">
            <div className="max-w-full mt-20 px-4 md:px-20 absolute top-52 bottom-0 right-0 left-0 ">
            <div className='bg-blue-700  rounded  opacity-80  max-w-lg  h-56  flex items-center '>
          <h1 className='text-white font-semibold text-3xl  sm:text-5xl ml-2'>Industries</h1>
        </div>
            </div>
        </div>

        {/* Section 2 */}
        <div className="container px-4 md:px-20 py-48 max-w-full bg-slate-200">
            
            <div className='py-50 bg-slate-200'>
                <h1 className='sm:text-4xl text-2xl text-black font-semibold sm:tracking-wide '>Every industry is different. Knowing the unique challenges that each industry faces is critical to business success.

                </h1>
                <div className='flex items-center flex-col sm:flex-row gap-5 mt-5 py-2 '>
                    <div className='flex flex-row  sm:flex-col items-center text-black mt-2'>
                        <TiSocialLinkedinCircular cursor={'pointer'}  size={50} />
                        <TiSocialFacebookCircular cursor={'pointer'} size={50} />
                    </div>
                <div>
                <h1 className='sm:text-xl  text-black font-semibold mt-5 tracking-wide'>You could work with service providers who have a general understanding of business and technology – or you can choose a partner with intimate knowledge of your industry. Capgemini has first-hand experience of partnering with clients across industries to help them get the future they want for their business.


                </h1>

                </div>
                </div>
                
            </div>
        </div>

        {/* Section 3 */}
        <div className='container sm:px-20 px-4 pb-48 max-w-full bg-slate-200'>
            <div>
            <h1 className='text-4xl text-black'>Learn more by industry</h1>
            </div>

            {/* Card container */}
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">

                {/* Card 1 */}
                {
                    cards.map((card ,index)=>{
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

export default Industries
