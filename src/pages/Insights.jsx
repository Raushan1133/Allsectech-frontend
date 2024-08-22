import React from 'react'
import ResearchImg from '../assets/insights/banner3.webp'
import Card1 from '../assets/insights/card1.webp'
import Card2 from '../assets/insights/card2.webp'
import Card3 from '../assets/insights/card3.webp'
import Card4 from '../assets/insights/card4.webp'
import Card5 from '../assets/insights/card5.webp'
import Card6 from '../assets/insights/card6.webp'
import Card7 from '../assets/insights/card7.webp'
import Card8 from '../assets/insights/card8.webp'
import Card9 from '../assets/insights/card9.webp'
import { IoIosArrowRoundForward } from "react-icons/io";


const Insights = () => {
  return (
    // Section 1
    <>
    <div className='max-w-full  container bg-cover bg-no-repeat w-full h-full '>
      <div className=' max-w-full insights h-full  bg-white pt-32 bg-cover bg-no-repeat w-full'>
      <div className='py-28 sm:ml-20'>
        <div className='bg-blue-500 opacity-80  max-w-lg  h-56  flex items-center'>
          <h1 className='text-white font-semibold text-5xl ml-2'>INSIGHTS</h1>
        </div>
      </div>
    </div>
    </div>

    <section>
      {/* Section 2 */}
    <div className=' py-36 max-w-full bg-cover sm:px-20 px-4 bg-no-repeat w-full h-full overflow-hidden container text-black bg-slate-200 '>
        <div className='max-w-6xl '>
        <h1 className='font-semibold text-3xl text-wrap'>
          Explore our latest thought leadership, ideas, and insights on the issues that are shaping the future of business and society.
        </h1>
        </div>
    </div>
    </section>

      {/* Section 3 */}
    <section className='container max-w-full insights-s3 py-28 sm:px-20 px-4'>
    <div className='max-w-lg'>
      <div className=' max-w-full  bg-white px-6 py-6 rounded'>
         <h1 className='text-black font-semibold text-xl'>Reshape our future with Generative AI</h1>
         <div className='h-full flex flex-col justify-between  gap-10'>
         <h1 className='text-black font-semibold pt-5'>
         Generative AI (GenAI) and other forms of Artificial intelligence (AI) are creating new opportunities to reshape the future.</h1>
      <div className='ml-auto'>
        <button className='border px-4 py-2 rounded text-black border-black hover:scale-110 transition-all hover:bg-red-600 hover:text-white hover:border-red-600'>Read More </button>
      </div>
         </div>
      </div>

    </div>
    </section>

    {/* Section 4 */}
    <section className='container  max-w-full sm:px-20 px-4 py-32 flex items-center  flex-col sm:flex-row justify-centr bg-slate-200'>
      <div className=''>
        <div className="max-w-lg w-fit overflow-hidden hover:scale-110 transition-all cursor-pointer ">
          <img src={ResearchImg} alt="loading..."  />
        </div>

      </div>
        <div className=' sm:w-[1200px]  sm:-ml-20 bg-white shadow  px-6 py-6 '>
          <h1 className='font-semibold text-xl text-black '>Capgemini Research Institute</h1>
          <div className='h-full flex flex-col justify-between mx-auto gap-10 '>
          <h1 className=' font-semibold text-black mt-5 '>The Capgemini Research Institute is our #1 ranked global think tank delivering best-in-class research that is underpinned by robust data and analysis.</h1>

          <div className='ml-auto '>
        <button className='border px-4 py-2 rounded text-black border-black hover:scale-110 transition-all hover:bg-red-600 hover:text-white hover:border-red-600'>Discover our research </button>
      </div>
          </div>
        </div>
    </section>

    {/* Section 5 */}
    <section className='container max-w-full sm:px-20 px-4 pb-32 flex items-center  bg-slate-200'>
      <div className='w-full mx-auto'>
      <div >
        <h1 className='font-semibold text-xl sm:text-3xl text-black'>The latest reports from the Capgemini Research Institute</h1>
      </div>

      <div className='w-full grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-3  items-end justify-between mt-5 flex-wrap gap-20'>
        {/* Card 1 */}
        <div className=' flex flex-col gap-5 overflow-hidden  cursor-pointer'>
          <div className='w-full'>
            <img src={Card1} alt="img" className='object-scale-down overflow-hidden mix-blend-multiply scale-125 hover:scale-150 transition-all' />
          </div>

          <div>
            <h1 className='text-black text-xl font-semibold'>Building the next-gen pharma lab </h1>
            <h1 className='text-black mt-3 font-semibold'>Cutting-edge laboratories are driving innovation and competitiveness within the pharmaceutical industry.</h1>
          </div>
        </div>

        {/* Card 2 */}
        <div className=' flex flex-col gap-5 overflow-hidden cursor-pointer'>
          <div className='w-full'>
            <img src={Card2} alt="img" className='object-scale-down overflow-hidden mix-blend-multiply scale-125 hover:scale-150 transition-all' />
          </div>

          <div>
            <h1 className='text-black text-xl font-semibold'>The Eco-Digital Era</h1>
            <h1 className='text-black mt-3 font-semibold'>The Eco-Digital EraTM: The dual transition to a sustainable and digital economy.</h1>
          </div>
        </div>

        {/* Card 3 */}
        <div className='max-w-sm flex flex-col gap-5 overflow-hidden cursor-pointer'>
          <div className='w-full'>
            <img src={Card3} alt="img" className='object-scale-down overflow-hidden mix-blend-multiply scale-125 hover:scale-150 transition-all' />
          </div>

          <div>
            <h1 className='text-black text-xl font-semibold'>Connected roducts</h1>
            <h1 className='text-black mt-3 font-semibold line-clamp-2'>Examine the position of connected products as an integral aspect of the modern consumer lifestyle, with one-third of consumers now using connected products around the clock.</h1>
          </div>
        </div>

        {/* Card 4 */}
        <div className=' flex flex-col gap-5 overflow-hidden cursor-pointer'>
          <div className='w-full'>
            <img src={Card4} alt="img" className='object-scale-down overflow-hidden mix-blend-multiply scale-125 hover:scale-150 transition-all' />
          </div>

          <div>
            <h1 className='text-black text-xl font-semibold'>Climate tech</h1>
            <h1 className='text-black mt-3 font-semibold'>Harnessing the power of technology for a sustainable future.</h1>
          </div>
        </div>

        {/* Card 5 */}
        <div className=' flex flex-col gap-5 overflow-hidden cursor-pointer'>
          <div className='w-full'>
            <img src={Card5} alt="img" className='object-scale-down overflow-hidden mix-blend-multiply scale-125 hover:scale-150 transition-all' />
          </div>

          <div>
            <h1 className='text-black text-xl font-semibold'>Generative AI and the evolving role of marketing : A CMO’S playbook</h1>
            <h1 className='text-black mt-3 font-semibold line-clamp-2'>This edition delves into the unprecedented growth and the myriad opportunities that generative AI brings to the field of marketing.</h1>
          </div>
        </div>

        {/* Card 6 */}
        <div className=' flex flex-col gap-5 overflow-hidden cursor-pointer'>
          <div className='w-full'>
            <img src={Card6} alt="img" className='object-scale-down overflow-hidden mix-blend-multiply scale-125 hover:scale-150 transition-all' />
          </div>

          <div>
            <h1 className='text-black text-xl font-semibold'>The art of software</h1>
            <h1 className='text-black mt-3 font-semibold'>As the global economy enters a software-led, digital era, software has gone from a good-to-have tool to a key asset for competitive success and value creation. </h1>
          </div>
        </div>
      </div>

      </div>
    </section>

    {/* Section 6 */}
    <section className='container section6 max-w-full sm:px-20 px-4  flex items-center  bg-slate-200 py-20'>
      <div className='w-full  mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-start'>
        <div className='  bg-white md:px-10 md:py-10 px-6 py-6 rounded shadow'>
          <div>
            <h1 className='text-black text-xl font-semibold'>Conversations for Tomorrow</h1>
            <h1 className='text-black text-xs sm:text-base mt-3 font-semibold text-wrap'>The Capgemini Research Institute's quarterly flagship publication showcases diverse perspectives from best-in-class global brands, leading public figures, academics and influencers on a chosen topic.</h1>
          </div>
        <div className='pt-10 pb-6 ml-auto '>
          <button className='border mx-auto px-4 py-2 rounded text-black border-black hover:scale-110 transition-all hover:bg-red-600 hover:text-white hover:border-red-600'>Read more</button>
          </div>
        </div>
      </div>
    </section>

    {/* Section 7 */}
    <section className='container max-w-full sm:px-20 px-4   flex items-center  bg-slate-200 py-20'>
      <div className='grid grid-cols-1  md:grid-cols-3 gap-5 w-full'>
        {/* Card 1 */}
        <div className='flex flex-col gap-5 cursor-pointer overflow-hidden'>
          <div>
            <img src={Card7} alt="card" className='hover:scale-110 transition-all' />
          </div>

          <div>
            <h1 className='text-black text-xl font-semibold'>Research library</h1>
          <h1 className='text-black  mt-3 font-semibold text-wrap'>Browse research and insights from across the business.</h1>
          </div>
        </div>

        {/* Card 2 */}
        <div className='flex flex-col gap-5 cursor-pointer overflow-hidden'>
          <div>
            <img src={Card8} alt="card" className='hover:scale-110 transition-all' />
          </div>

          <div>
            <h1 className='text-black text-xl font-semibold'>Expert perspectives</h1>
          <h1 className='text-black text-xs sm:text-base mt-3 font-semibold text-wrap'>Review the archive of blogs from Capgemini’s experts
          </h1>
          </div>
        </div>

        {/* Card 3 */}
        <div className='flex flex-col cursor-pointer gap-5 overflow-hidden'>
          <div>
            <img src={Card9} alt="card" className='hover:scale-110 transition-all overflow-hidden ' />
          </div>

          <div>
            <h1 className='text-black text-xl font-semibold'>Analyst report</h1>
          <h1 className='text-black text-xs sm:text-base mt-3 font-semibold text-wrap'>Access our archive of analyst citations</h1>
          </div>
        </div>
      </div>
    </section>

    {/* Section 8 */}
    <section className='container max-w-full sm:px-20 px-4    flex items-center  bg-slate-600 py-20'>
      <div >
        <h1 className='text-white text-4xl'>Stay informed</h1>
        <div className='flex items-center sm:flex-row flex-col gap-5'>
        <h1 className='text-white text-2xl text-wrap max-w-5xl mt-5'>Subscribe to have the latest reports from the Capgemini Research Institute delivered direct to your inbox.</h1>

        <div className='w-fit flex'>
          <button className='px-10 flex hover:bg-cyan-400 hover:border-cyan-400 hover:text-whit transition-all py-3 rounded-full bg-white text-black border items-center gap-3'>Subscribe <IoIosArrowRoundForward size={30} /></button>
          
        </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default Insights
