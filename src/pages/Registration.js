import React from 'react'
// import Form  from './Registration/Form'
// import Venue from './Registration/Venue'
import './form.css'
import { Outlet } from "react-router-dom";
const Registration = () => {
  return (
    <div id="register-text">
        <Outlet></Outlet>
        <div id='register-text'>
            <p id='register'>Register</p>
        </div>
        <div>
            <div className='form-design'>
                <div className='register-text'>First Name</div>
                <input type='text' id='name' required minLength={4} maxLength={15} placeholder='Enter your first name' className='input-size'/>
            </div>
            <div className='form-design'>
                <div className='register-text'>Last Name</div>
                <input type='text' id='name' required minLength={4} maxLength={15} placeholder='Enter your surname'/>
            </div>
            <div className='form-design'>
                <div className='register-text'>Email</div>
                <input type='email' id='email' placeholder='Enter your mail id here' required/>
            </div>
            <div className='form-design'>
                <div className='register-text'>Phone Number</div>
                <input type='tel' required minLength={10} maxLength={10} id='Phone' placeholder='Enter your 10 digit number'/>
            </div>
            <div className='form-design'>
                <div className='register-text'>College</div>
                <input type='text' id='college' required minLength={4} maxLength={15} placeholder='Enter your college name'/>
            </div>
            <div className='form-design'>
                <div className='register-text'>UPI Transaction</div>
                <input type='text' id='upi' required minLength={4} maxLength={15} placeholder='Enter UPI Transaction id'/>
            </div>
            <div className='form-design submit-button'>
                <input type='submit' id='submit' value='Register' formMethod='post'/>
            </div>
        </div>
    </div>
  )
}

export default Registration