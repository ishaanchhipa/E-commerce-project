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
          <p>Welcome to Sweet Delight, your one-stop destination for all things sweet and delightful. Explore our extensive collection of mouthwatering treats, from freshly baked cakes to handcrafted chocolates and crisp, delightful cookies. Whether you're searching for the perfect gift or simply indulging in your own cravings, we have something for every sweet tooth.</p>
          <p>At Sweet Delight, we pride ourselves on using only the finest, natural ingredients in all our products. Each item is lovingly handcrafted by our skilled artisans to ensure the highest quality and taste. Our commitment to excellence means that your satisfaction is our top priority with every purchase.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Among our bestsellers, you'll find our rich and velvety Chocolate Truffle Cake, a true indulgence for chocolate lovers. Our Assorted Chocolate Box offers a delightful mix of dark, milk, and white chocolates, perfect for any occasion. And our classic Butter Cookies are sure to melt in your mouth with every bite.</p>
        </div>
      </div>

      <div className='text-xl py-4 '>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-20 mb-20'>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>If you have any questions or special requests, our friendly customer service team is here to help. We're dedicated to making your experience with us as sweet as possible. Don't forget to sign up for our newsletter to stay updated on our latest offers and new arrivals. Thank you for choosing Sweet Delight!</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>If you have any questions or special requests, our friendly customer service team is here to help. We're dedicated to making your experience with us as sweet as possible. Don't forget to sign up for our newsletter to stay updated on our latest offers and new arrivals. Thank you for choosing Sweet Delight!</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>If you have any questions or special requests, our friendly customer service team is here to help. We're dedicated to making your experience with us as sweet as possible. Don't forget to sign up for our newsletter to stay updated on our latest offers and new arrivals. Thank you for choosing Sweet Delight!</p>
        </div>

      </div>
      <NewsletterBox />
    </div>
  )
}

export default About