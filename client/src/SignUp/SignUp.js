import { useState } from "react";
import ApiService from "../ApiServices";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const [newUser, setNewUser] = useState({ username: "", email: "", password: "" })
    const navigate = useNavigate();
    const signUser = (e) => {
        e.preventDefault();
        ApiService.createUser(newUser);
    }
    function handleChange(e) {
        const value = e.target.value;
        setNewUser({ ...newUser, [e.target.name]: value })

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-600 " >
            <div className="bg-white p-16 rounder shadow-2x1 w-1/3 border rounded">
                <h2 className="text-3xl font-bold mb-10 text-green-800">Sign Up</h2>
                <form className="space-y-8" onSubmit={(e) => { navigate("/"); signUser(e) }}>
                    <div>
                        <label className="block mb-1 text-green-600">Username</label>
                        <input type="text" name="username" onChange={handleChange} value={newUser.username} className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
                    </div>
                    <div>
                        <label className="block mb-1 text-green-600">Email</label>
                        <input type="text" name="email" onChange={handleChange} value={newUser.email} className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
                    </div>
                    <div>
                        <label className="block mb-1 text-green-600">Password</label>
                        <input type="password" name="password" onChange={handleChange} value={newUser.password} className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
                    </div>
                    <div>
                        <label className="block mb-1 text-green-600">Confirm Password</label>
                        <input type="password" className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
                    </div>

                    <button className="block w-full bg-green-300 py-4 rounded hover:bg-green-600 transition duration-300">Create</button>
                </form>

            </div>
        </div>

    )


}

export default SignUp;