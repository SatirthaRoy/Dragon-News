import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram  } from "react-icons/fa";

const Rightside = () => {
  return (
    <div>
      <div className="p-4 space-y-5">
        <h1 className="text-4xl font-semibold text-dark-600">Login With</h1>
        <div className="space-y-4">
        <button className="btn btn-outline btn-primary w-full">
          <FaGoogle/>
          Loggin With Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub/>
          Loggin With Github
        </button>
        </div>
      </div>
      {/* find us on */}
      <div className="p-4 space-y-5">
        <h1 className="text-4xl font-semibold text-dark-600">Find Us On</h1>
        <div className="divide-y border rounded-md">
        <a className="p-4 flex gap-5 items-center w-full">
          <FaFacebook className="size-10 text-blue-400"/>
          Facebook
        </a>
        <a className="p-4 flex gap-5 items-center w-full">
          <FaTwitter className="size-10 text-blue-400"/>
          Twitter
        </a>
        <a className="p-4 flex gap-5 items-center w-full">
          <FaInstagram className="size-10 text-pink-400"/>
          Instagram
        </a>
        </div>
      </div>
    </div>
  )
}

export default Rightside