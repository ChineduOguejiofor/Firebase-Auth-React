import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, signInWithGoogle } from '../firebase/firebase.utils';
import { createUserProfile } from '../firebase/actions';

const Login = () => {
  const [formData, setFormData] = useState({
    password: '',
    email: ''
  });
  const { password, email } = formData;
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async e => {
    e.preventDefault();

    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);

      await createUserProfile(user);
    } catch (error) {
      console.log('there was an error');
    }
  };

  return (
    <div>
      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Sign into your account
      </p>
      <form onSubmit={onSubmit} className='form'>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            required
            minLength='6'
            name='password'
            value={password}
            onChange={onChange}
          />
        </div>
        <input type='submit' value='Login' className='btn btn-primary' />
      </form>

      <button onClick={signInWithGoogle} className='btn btn-dark'>
        Google Login
      </button>
      <p className='my-1'>
        Don't have an account? <Link to='/signup'>Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
