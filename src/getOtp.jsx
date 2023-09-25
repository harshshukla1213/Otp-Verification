// import logo from './logo.svg';
import './App.css';
// import './getOtp.css'


import React from 'react'
import { useState } from "react";
import { useNavigate} from "react-router-dom";


import './App.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


// const Page1 = () => {
//     const [value, setValue] = useState();
    
//     const navigate = useNavigate();
//     const navigateToVerify = () => {
//       navigate('/verify');
//     };
//     const handleChange = (event) => {
//       setValue(event.target.value);
//   };
  
//     return (
//       <div className='namebg'>
//        <img
//           className='logo'
//           src="https://blogger.googleusercontent.com/img/a/AVvXsEh0KRQRD_3AGVX1hHcACNACByqNRDqzlbm6y01jhoRfOekDeVwGyE-nrb6kmAEqO3JrgzzjYgeppq11b_vFdsAE1YNHHvwNDFZcDkNRbJJuI2Ou1hGrEg5Il6r1lPN-wc2latQu5MUI07rMmXOQ3OZsIA8jOe5ZtJeruakpl3fDHeePwqWFgS2lyvdu=s16000" alt="React Image" />
  
//         <div className='text'>
//           <h1>Welcome Back</h1>
//           <p>Please sign into your account</p>
//         </div>
//         <PhoneInput
//           className='phone'
//           placeholder="Enter phone number"
//           value={value}
//            onChange={setValue} 
//            />
  
//         <div className='msg'>
  
//           <p>We will send you once time SMS message.</p>
//           <p>Charges may apply.</p>
  
//         </div>
//         <div className='btn'>
//           <button
//             onClick={navigateToVerify}
//             className='inbtn'>Sign with otp</button>
//             {/* <Link to="/verify" className="btn btn-primary">Get OTP</Link> */}
  
//         </div>
//       </div>
//     )
//   }



function Page1() {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const navigateToVerify = () => {
    if (validatePhoneNumber()) {
      navigate('/verify');
    }
  };

  const handleChange = (event) => {
    const inputValue = event.target.value;
    // Remove non-numeric characters
    const numericValue = inputValue.replace(/\D/g, '');
    
    // Check if the numeric value exceeds 10 digits
    if (numericValue.length <= 12) {
      setError('');
      setValue(numericValue);
    } else {
      setError('Phone number should not exceed 10 digits');
    }
  };

  const validatePhoneNumber = () => {
  
    if (value && value.length === 12) {
      setError('');
      return true; 
    } else {
      setError('Please enter a valid 10-digit phone number');
      return false;
    }
  };

  return (
    <div className='namebg'>
      <img
        className='logo'
        src="https://blogger.googleusercontent.com/img/a/AVvXsEh0KRQRD_3AGVX1hHcACNACByqNRDqzlbm6y01jhoRfOekDeVwGyE-nrb6kmAEqO3JrgzzjYgeppq11b_vFdsAE1YNHHvwNDFZcDkNRbJJuI2Ou1hGrEg5Il6r1lPN-wc2latQu5MUI07rMmXOQ3OZsIA8jOe5ZtJeruakpl3fDHeePwqWFgS2lyvdu=s16000"
        alt="React Image"
      />

      <div className='text'>
        <h1>Welcome Back</h1>
        <p>Please sign into your account</p>
      </div>
      <input
        className='phone'
        placeholder="Enter phone number"
        value={value}
        onChange={handleChange}
      />
      
      <center> {error && <p style={{ color: 'orange' }}>{error}</p>} </center>

      <div className='msg'>
        <p>We will send you a one-time SMS message.</p>
        <p>Charges may apply.</p>
        <p>Please make sure that Input is Number and Not more than 10 exclude country digit</p>
      </div>

      <div className='btn'>
        <button
          onClick={navigateToVerify}
          className='inbtn'
          disabled={error}
        >
          Sign with OTP
        </button>
      </div>
    </div>
  );
}

export default Page1;

         






