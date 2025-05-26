import React from 'react'
import '../styles/Intro.css'
export const Intro = () => {
  return (
    <>
    <h2>Personal Details</h2>
    <div className='intro'>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" placeholder='Enter your name' />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" placeholder='Enter your email' />
      <label htmlFor="phone">Phone</label>
      <input type="tel" id="phone" placeholder='Enter your phone number' />
      </div>
    </>
  )
}
