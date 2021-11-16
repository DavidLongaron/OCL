import { useContext, useState } from 'react';
import { userContext } from '../App'
import { useNavigate } from 'react-router-dom';
import ApiService from "../ApiServices";

import "./Login.css"
const Login = () => {

    const navigate = useNavigate();
    const [user, setUser, login] = useContext(userContext)
    const [loggedUser, setLoggedUser] = useState({ username: "", password: "" })
    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("working");
        const logUser = await ApiService.getUser(loggedUser);
        console.log(logUser)
        setUser(logUser);
        navigate("/");


    }
    const handleLogin2 = (e) => {
        handleLogin(e)
    }
    function handleChange(e) {
        const value = e.target.value;
        setLoggedUser({ ...loggedUser, [e.target.name]: value })

    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-green-600" >
            <div className="bg-white p-16 rounder shadow-2x1 w-1/3 border rounded">
                <h2 className="text-3xl font-bold mb-10 text-green-800">Login</h2>
                <form className="space-y-8" onSubmit={handleLogin2}>
                    <div>
                        <label className="block mb-1 text-green-600">Username</label>
                        <input type="text" name="username" value={loggedUser.username} onChange={handleChange} className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
                    </div>
                    <div>
                        <label className="block mb-1 text-green-600">Password</label>
                        <input type="text" name="password" value={loggedUser.password} onChange={handleChange} className="hiddenText border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800"></input>
                    </div>

                    <button className="block w-full bg-green-300 py-4 rounded hover:bg-green-600 transition duration-300">Login</button>
                </form>

            </div>
        </div>

    )


}

export default Login;