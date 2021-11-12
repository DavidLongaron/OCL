

const SignUp=()=>{
    return(
        <div className="min-h-screen flex items-center justify-center bg-green-600 " >
            <div className="bg-white p-16 rounder shadow-2x1 w-1/3 border rounded">
            <h2 className="text-3xl font-bold mb-10 text-green-800">Sign Up</h2>
            <form className="space-y-8">
             <div>
                 <label className="block mb-1 text-green-600">Username</label>
                 <input type="text" className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
             </div>
             <div>
                 <label className="block mb-1 text-green-600">Email</label>
                 <input type="text" className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
             </div>
             <div>
                 <label className="block mb-1 text-green-600">Password</label>
                 <input type="text" className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
             </div>
             <div>
                 <label className="block mb-1 text-green-600">Confirm Password</label>
                 <input type="text" className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
             </div>
            
            <button className="block w-full bg-green-300 py-4 rounded hover:bg-green-600 transition duration-300">Create</button>
            </form>
     
            </div>
        </div>
     
      )
     
     
     }
     
     export default SignUp;