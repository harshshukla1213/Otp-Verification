import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
// // import './verify.css'
import './App.css'


// export default function VerifyOtpPage() {
//   const [otpNumber, setOtpNumber] = useState("");
//   const [error, setError] = useState(""); 

//   const handleChange = (event) => {
//     const inputValue = event.target.value;

    
//     if (/^\d{0,6}$/.test(inputValue)) {
//       setOtpNumber(inputValue);
//       setError(""); 
//     } else {
//       setError("Please enter a valid numeric value with no more than 6 digits"); 
//     }
//   };

//   const SubmitOTP = () => {
//     if (otpNumber.length === 6) {
//       console.log({"data": otpNumber});
//       axios.post("http://localhost:3001/verify-otp", {"data": otpNumber})
//         .then((response) => {
        
//         })
//         .catch((error) => {
        
//         });
//     } else {
//       setError("Please enter a valid 6-digit OTP"); 
//     }
//   };
//   // const navigateToFirstPage = () => {
//   //   navigate('/home');
//   // };

//   return (
//     <>
//       <img
//         src='https://img.freepik.com/free-vector/smartphone-device-with-shield-secure-illustration-designs_24877-61341.jpg?w=740&t=st=1695558342~exp=1695558942~hmac=8bc4cb15ded9a952b6e43a4a9899ed83a73ff00ef412917bdb1401dd99f0ce59'
//         className='logo1'
//         alt='nopic'
//       />
//       <div className='div2'>
//         <h1>Please Verify The Number</h1>
//         <h2>Enter 6 Digit OTP:</h2>
//       </div>
//       <input type='text' className='txt' value={otpNumber} onChange={handleChange} />
//        <center> {error && <p style={{ color: 'orange' }}>{error}</p>} </center>
//       <br></br>
//       <center><h6>Note: please make sure you enter the valid otp</h6></center>
    
//       <button className='btn3' onClick={SubmitOTP}>Verify OTP</button>
//     </>
//   );
// }





export default function VerifyOtpPage() {
  const [otpNumber, setOtpNumber] = useState("");
  const [error, setError] = useState(""); 
  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (event) => {
    const inputValue = event.target.value;

    if (/^\d{0,6}$/.test(inputValue)) {
      setOtpNumber(inputValue);
      setError(""); 
    } else {
      setError("Please enter a valid numeric value with no more than 6 digits"); 
    }
  };

  const SubmitOTP = () => {
    if (otpNumber.length === 6) {
      console.log({ "data": otpNumber });
      axios.post("http://localhost:3001/verify-otp", { "data": otpNumber })
        .then((response) => {
          if (response.data.success) {
            navigate('/success'); // 
          } else {
            setError("OTP verification failed");
          }
        })
        .catch((error) => {
          // Handle the error
        });
    } else {
      setError("Please enter a valid 6-digit OTP");
    }
  };

  return (
    <>
      <img
        src='https://img.freepik.com/free-vector/smartphone-device-with-shield-secure-illustration-designs_24877-61341.jpg?w=740&t=st=1695558342~exp=1695558942~hmac=8bc4cb15ded9a952b6e43a4a9899ed83a73ff00ef412917bdb1401dd99f0ce59'
        className='logo1'
        alt='nopic'
      />
      <div className='div2'>
        <h1>Please Verify The Number</h1>
        <h2>Enter 6 Digit OTP:</h2>
      </div>
      <input type='text' className='txt' value={otpNumber} onChange={handleChange} />
       <center> {error && <p style={{ color: 'orange' }}>{error}</p>} </center>
      <br></br>
      <center><h6>Note: please make sure you enter the valid otp</h6></center>
    
      {/* Use a button to trigger OTP verification and navigation */}
      <button className='btn3' onClick={SubmitOTP}>Verify OTP!</button>
    </>
  );
}



// below not use it commenteted in starting at:::

// export default VerifyOtpPage;