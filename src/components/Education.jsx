import React from 'react'
import '../styles/Education.css'
export const Education = () => {
  const[test, setTest] = React.useState(true);
  const[info, setInfo] = React.useState({
    school: '',
    course: '',
    year: ''
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
      <h2>Educational Background</h2>
      <div className='education'>
  {test ? 
  <>
        <label htmlFor="school">School</label>
        <input type="text" name="school" placeholder='Enter your school"s name' value={info.school} onChange={handleInputChange} />
        <label htmlFor="course">Course</label>
        <input type="text" name="course" placeholder='Enter your course'value={info.course} onChange={handleInputChange}/>
        <label htmlFor="year">Completion of course</label>
        <input type="number" name="year" placeholder='Enter your graduation year'value={info.year} onChange={handleInputChange} />
      
      <button onClick={toggleTest}>Submit</button>
      </>
  : 
      <>
      <ul>
        <li>Name:{info.school}</li>
        <li>Email:{info.course}</li>
        <li>Phone:{info.year}</li>
      </ul>
         
        <button onClick={toggleTest}>Edit</button>
        </>
  }
        </div>
      </>
  
    )      
   
  }
  