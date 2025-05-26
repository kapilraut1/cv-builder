import React from 'react'
import '../styles/Intro.css'
export const Intro = () => {
const[test, setTest] = React.useState(true);
const[info, setInfo] = React.useState({
  name: '',
  email: '',
  phone: ''
});

const toggleTest = () => {
  setTest(!test);
}

const handleInputChange = (e) => {
  setInfo({
    ...info,
    [e.target.name]: e.target.value
  });
}
 
  return (
    <>
    <h2>Personal Details</h2>
    <div className='intro'>
{test ? 
<>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" placeholder='Enter your name' value={info.name} onChange={handleInputChange} />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" placeholder='Enter your email'value={info.email} onChange={handleInputChange}/>
      <label htmlFor="phone">Phone</label>
      <input type="number" name="phone" placeholder='Enter your phone number'value={info.phone} onChange={handleInputChange} />
    
    <button onClick={toggleTest}>Submit</button>
    </>
: 
    <>
    <ul>
      <li>Name:{info.name}</li>
      <li>Email:{info.email}</li>
      <li>Phone:{info.phone}</li>
    </ul>
       
      <button onClick={toggleTest}>Edit</button>
      </>
}
      </div>
    </>

  )      
 
}
