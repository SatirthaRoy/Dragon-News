import { Link } from "react-router-dom";
import userLogo from '../../../assets/user.png'
import { useContext } from "react";
import { authContext } from "../../ContextProvider";

const Navbar = () => {
  const {user, logOut} = useContext(authContext);

  const links = (
    <>
      <Link to='/'>
        <a className="font-poppins text">Home</a>
      </Link>
      <Link>
        <a className="font-poppins text">About</a>
      </Link>
      <Link>
        <a className="font-poppins text">Career</a>
      </Link>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="space-x-4 text-lg font-normal text-dark-400 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="space-x-4 text-lg font-normal text-dark-400 menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end space-x-4">
          <div className="size-12 rounded-full">
            <img src={userLogo} alt="" />
          </div>
          <h1 className="text-2xl font-bold">{user?.displayName && ''}</h1>
          <Link to={!user && '/login'} onClick={() =>{
            logOut()
            .then(() => console.log('logged out'))
            .catch(e => console.log('logged out err: ', e))
            
          }} className="btn bg-dark-600 text-white px-6 rounded-none">{user ? 'Log out' : 'Login'}</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
