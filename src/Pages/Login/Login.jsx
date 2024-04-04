import React, { useContext } from 'react'
import Navbar from '../Home/Components/Navbar'
import { Link } from 'react-router-dom'
import { authContext } from '../ContextProvider'

const Login = () => {

  const { signIn } = useContext(authContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const Password = form.get('password');
    // sign in
    signIn(email, Password)
    .then(result => console.log(result.user))
    .catch(e => console.log('login error: ', e))
  }

  return (
    <div className='lg:w-11/12 mx-auto font-poppins h-screen'>
      <Navbar/>
      <div className='md:w-1/2 mx-auto space-y-5 mt-10'>
        <h1 className='text-4xl text-dark-600 font-semibold text-center'>Login your account</h1>
        <hr className='border'/>
        <div class="card shrink-0 shadow-sm bg-base-100">
          <form onSubmit={handleLogin} class="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold text-dark-600">Email address</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered bg-[#F3F3F3] border-none" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold text-dark-600">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered bg-[#F3F3F3] border-none" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-dark-500 text-white hover:text-dark-500">Login</button>
            </div>
          </form>
          <p className='text-base font-semibold text-dark-500 text-center'>Dont't Have An Account ?<Link to='/signup' className='cursor-pointer text-[#F75B5F]'> Register</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login