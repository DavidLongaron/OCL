import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
  } from 'react-router-dom';

const NavBar =()=>{
    return(
        <div>
      <nav className="bg-green-900">
          <div className=" px-8 max-w-auto">
            <div className="flex justify-between">
               <div className="flex space-x-4"> 
          <div>
              <Link to="/" className="flex items-center py-5 px-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
         </svg> 
         <span className="text-white font-bold">OCL</span>
              </Link>
              </div>
          <div className="flex items-center space-x-1">
              <Link to="/createchara" className="py-2 px-3 text-white bg-green-600 rounded-lg shadow hover:bg-green-400 transition duration-300">Create Character</Link>
            
          </div>
            </div>
          <div className="flex items-center space-x-1">
            <Link to="/login" className="py-2 px-3 text-white hover:bg-green-700 transition duration-300 rounded-lg">Login</Link>
            <Link to="/signup" className="py-2 px-3 text-white bg-green-600 rounded-lg shadow hover:bg-green-400 transition duration-300">Signup</Link>

          </div>
          </div>
          </div>
      </nav>
      </div>
    )


}


export default NavBar