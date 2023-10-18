import './Form.css';

import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <form >
            <label>Your Name</label>
            <input type="text" />

            <label>Email</label>
            <input type="text" />

            <label>Subject</label>
            <input type="text" />

            <label>Message</label>
            <textarea name="text" id="" cols="30" rows="10" placeholder='Enter Your Text Here'></textarea>

            <button className='btn' type='button'>Submit</button>
            
        </form>
      
    </div>
  )
}

export default Form
