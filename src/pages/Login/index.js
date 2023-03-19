import React, { useState } from 'react';
import axios from 'axios';
import './index.css';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event)=>{
    event.preventDefault();
    const result = await axios.post('http://localhost:3001/login', {email, password});
    console.log(result.data);
  }

  

  return (
    <div className=''>
      <h1>
        Login
      </h1>
      <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
        <textarea value={email} onChange = {(event)=>setEmail(event.target.value)} className='py-2 px-3 h-16 w-80 m-2  border-b-2' rows='1' placeholder='Email' required></textarea>
        <textarea value={password} onChange = {(event)=>setPassword(event.target.value)} className='border-b-2 py-2 h-16 w-80 px-3 m-2 mb-4' rows='1' placeholder='Password' required></textarea>
        <button type='submit' className='bg-blue-600 h-16 w-80 text-white rounded-full'>Login</button>
      </form>
    </div>
  )
}
