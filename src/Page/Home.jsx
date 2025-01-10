import React from 'react'
import Container from '../Layer/Container'

const Home = () => {
  return (
    <div className='relative bg-[#474747]'>
        <Container className='flex items-center gap-[152px] pt-[263px] pb-[117px]'>
            <div className='w-[695px]'>
            <h3 className='bg-gradient-to-r from-[#FE651B] to-[#FFAA52] bg-clip-text text-transparent  text-[25px] font-medium  '>
                Your Trusted Ortencey Agency

            </h3>

            <h1 className='text-white text-[60px] font-60 font-Nunito my-5'>
            Our Digital Agency With
            Excellence Services
            </h1>

            <p className='text-[20px] font-medium text-white w-[596px] capitalize'>
            The 3 golden rules professional Digital Marketing Agency don’t
            want you to know about.
            </p>

            <button className='py-[15px] px-[33px] bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-full text-[18px] text-white mt-[50px]'>
                Discover More
                </button>
            </div>


            <div className='relative'>
                <div className=' w-[569px] h-[569px] rounded-full bg-[#CCCCCC]'></div>
                <div className='absolute bottom-[26px] left-[27.74px] w-[567px] h-[567px] rounded-full  bg-gradient-to-r from-[#FE651B] to-[#FFAA52] bg-clip-border border-transparent'></div>
            </div>













 
        </Container>
    </div>
  )
}

export default Home