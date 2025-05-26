import React from 'react'
import '../styles/Experience.css'
const Experience = () => {
 
     const[test, setTest] = React.useState(true);
      const[info, setInfo] = React.useState({
        company: '',
        designation: '',
        role: '', 
        year1: '',
        year2: ''

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
          <h2>Experience Background</h2>
          <div className='experience'>
      {test ? 
      <>
            <label htmlFor="company">Company</label>
            <input type="text" name="company" placeholder='Enter your company"s name' value={info.company} onChange={handleInputChange} />
            <label htmlFor="designation">Course</label>
            <input type="text" name="designation" placeholder='Enter your designation'value={info.designation} onChange={handleInputChange}/>
            <label htmlFor="role">Role</label>
            <input type="text" name="role" placeholder='Enter your role'value={info.role} onChange={handleInputChange}/>
            <label htmlFor="year1">Joined year</label>
            <input type="number" name="year1" placeholder='Enter your joined year'value={info.year1} onChange={handleInputChange} />
          <label htmlFor="year2">End year</label>
            <input type="number" name="year2" placeholder='Enter your end year'value={info.year2} onChange={handleInputChange} />
          <button onClick={toggleTest}>Submit</button>
          </>
      : 
          <>
          <ul>
            `<li>Company:{info.company}</li>
            <li>Designation:{info.designation}</li>
              <li>Role:{info.role}</li>
              <li>Joined Year:{info.year1}</li>
              <li>End Year:{info.year2}</li>
              `
          </ul>
             
            <button onClick={toggleTest}>Edit</button>
            </>
      }
            </div>
          </>
      
        )      
       
      }


export default Experience