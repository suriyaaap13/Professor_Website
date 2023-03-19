import React, { useState }  from 'react';
import axios from 'axios';


export default function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event)=>{
        event.preventDefault();
        if(password !== confirmPassword){
            alert('Password and Confirm Password doesnot Match');
            return;
        }
        const result = axios.post('http://localhost:3001/login', {email, password});
        alert(result.data);
        setConfirmPassword('');
        setEmail('');
        setConfirmPassword('');
    }

  return (
    <div>
      <h1>
        Register
      </h1>
      <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
        <textarea value={email} onChange = { (event) => setEmail(event.target.value) } className='py-2 px-3 h-16 w-2/6 m-4 border-b-2' rows='1' placeholder='Email' required></textarea>
        <textarea value={password} onChange = { (event) => setPassword(event.target.value) } className='border-b-2 py-2 h-16  w-2/6 px-3 m-4 ' rows='1' placeholder='Password' required></textarea>
        <textarea value={confirmPassword} onChange = { (event) => setConfirmPassword(event.target.value) } className='border-b-2 py-2 h-16  w-2/6 px-3 m-4 ' rows='1' placeholder='Confirm Password' required></textarea>
        <button type='submit' className='bg-blue-600 h-16 w-80 mt-5 text-white rounded-full'>Register</button>
      </form>
    </div>
  )
}
