
import { Link } from 'react-router-dom'
import '../App.css';
import logo from '../logo.svg';






export default function Register() {
    

	return (
    <div className="App ">
      <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                
		<p>
          Selamat <code>Datang</code> Admin
				</p>
				        <a
          className="App-link"
          href="https://tete1sdf.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
         Link WEB Geologi
        </a>
        <div className="flex flex-col items-start justify-between px-4 py-12 mf:flex-row mf:p-20">
					<div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl ">
						  <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                    Sign in
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <Link
                        to="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </Link>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>
                <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                    <div className="absolute px-5 text-black">Or</div>
                </div>
                <div className="flex mt-4 gap-x-2">
                    
                            <div id='signInDiv'></div>
                            
          
                </div>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <Link
                        to="#"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
			</header>

    </div>
	)
	}
