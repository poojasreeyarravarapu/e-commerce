import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Trendzz is your go-to online store for the latest clothing trends, offering high-quality apparel for every occasion. From casual wear to chic outfits, we bring you stylish and affordable options to elevate your wardrobe.</p>
          <p>We aim to make shopping easy and enjoyable with a seamless experience, fast delivery, and excellent customer support. Stay stylish and discover new looks with Trendzz today!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at Trendzz is to make stylish, high-quality clothing accessible to everyone. We aim to empower individuals to express their unique style with confidence while ensuring a seamless and enjoyable shopping experience.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>At Trendzz, we are dedicated to providing only the best. Each item is carefully inspected to ensure superior quality, comfort, and style, giving you confidence in every purchase.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Shopping with Trendzz is effortless. Our easy-to-use platform, secure payments, and fast delivery options are designed to make your experience as convenient as possible.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>We take pride in our exceptional customer service. Our friendly and knowledgeable support team is always ready to assist, ensuring your satisfaction at every step of your shopping journey.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
