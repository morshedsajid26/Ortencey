import React from 'react'
import Container from '../Layer/Container'

const Footer = () => {
  return (
    <div className="bg-[url('/public/footer.png')] py-20 bg-black">
      <Container>

        <div className="top flex justify-between items-center border-b pb-[60px] border-[#393939]">
          <div className="left text-white">
            <p className='text-[16px]'>For Digital Marketing Agency</p>
            <h3 className='font-Nunito font-bold text-[25px]'>Join Our Agency Community</h3>
          </div>

          <div className="right relative">
            <input className='py-[27px] pl-[35px] w-[500px] outline-none rounded-full text-[16px] text-[#B1B1B1]  ' type="text" placeholder='Enter your email address' />

            <button className='bg-[#3661FC] text-white text-[18px] py-[15px] px-[33px] rounded-full absolute right-2.5 top-1/2 -translate-y-1/2'>Subscribe Now</button>
          </div>
        </div>



        <div className="bottom"></div>

      </Container>
    </div>
  )
}

export default Footer