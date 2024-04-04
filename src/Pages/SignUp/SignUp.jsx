import React, { useContext } from 'react'
import Navbar from '../Home/Components/Navbar'
import { authContext } from '../ContextProvider'
import { updateProfile } from 'firebase/auth';

const SignUp = () => {
  const { auth, createUser } = useContext(authContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log(form);
    const name = form.get('name');
    const pass = form.get('password');
    const email = form.get('email');
    // create user
    createUser(email, pass)
    .then (result => {
      console.log(result.user);
      updateProfile(auth.currentUser, {displayName: name});
    })
    .catch(e => console.log(e))
  }

  return (
    <div className='lg:w-11/12 mx-auto font-poppins h-screen'>
      <Navbar/>
      <div className='md:w-1/2 mx-auto space-y-5 mt-10'>
        <h1 className='text-4xl text-dark-600 font-semibold text-center'>Resister your account</h1>
        <hr className='border'/>
        <div class="card shrink-0 shadow-sm bg-base-100">
          <form onSubmit={handleSignUp} class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text text-xl font-semibold text-dark-600">Your name</span>
              </label>
              <input type="text" name='name' placeholder="Enter your name" class="input input-bordered bg-[#F3F3F3] border-none" required />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text text-xl font-semibold text-dark-600">Email address</span>
              </label>
              <input type="email" name='email' placeholder="Enter your email" class="input input-bordered bg-[#F3F3F3] border-none" required />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text text-xl font-semibold text-dark-600">Password</span>
              </label>
              <input type="password" name='password' placeholder="Enter your password" class="input input-bordered bg-[#F3F3F3] border-none" required />
            </div>
            <div class="form-control mt-6">
              <button class="btn bg-dark-500 text-white hover:text-dark-500">Resister</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp