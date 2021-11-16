import { useState, useContext } from "react";
import ApiService from "../ApiServices"
import { useNavigate } from 'react-router-dom';
import { userContext } from "../App";
const CreateCharaForm = (props) => {
    const [userData, setUserData] = useContext(userContext);
    const defaultData = { UserId: userData.id, name: "", age: "", birthDay: "", occupation: "", likes: "", dislikes: "", physicalDescription: "", personality: "", background: "", setting: "", gender: "", img: "", Tags: [] };
    const [charaData, setCharaData] = useState(defaultData);
    const navigate = useNavigate();

    const sendChara = (e) => {

        e.preventDefault();
        ApiService.postChara(charaData);
        const [charas, setCharas] = props.allCharas;
        console.log(charaData);
        setCharas([...charas, charaData]);
        setCharaData(defaultData);

    }
    function handleChange(e) {
        // setCharaData({name:e.target.value,age:e.target.value,birthDay:e.target.value,occupation:e.target.value,likes:e.target.value,dislikes:e.target.value,physicalDescription:e.target.value,personality:e.target.value, background:e.target.value, setting:e.target.value, gender:e.target.value, img:e.target.value, Tags:[e.target.value] })

        if (e.target.name === "Tags") {
            const value = e.target.value.split(",");
            setCharaData({ ...charaData, [e.target.name]: value })
        }
        else {
            const value = e.target.value;
            setCharaData({ ...charaData, [e.target.name]: value })
        }


    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-600  " >
            <div className="bg-white p-16 rounder shadow-2x1 w-1/3 border rounded mt-8" >
                <h2 className="text-3xl font-bold mb-10 text-green-800">Create a Character</h2>
                <form className="space-y-8" onSubmit={(e) => { sendChara(e); navigate("/"); }}>
                    <div>
                        <label className="block mb-1 text-green-600">Name</label>
                        <input type="text" name="name" onChange={handleChange} value={charaData.name} className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
                    </div>
                    <div>
                        <label className="block mb-1 text-green-600">Age</label>
                        <input type="text" name="age" onChange={handleChange} value={charaData.age} className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
                    </div>
                    <div>
                        <label className="block mb-1 text-green-600">BirthDay</label>
                        <input type="text" name="birthDay" onChange={handleChange} value={charaData.birthDay} className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
                    </div>
                    <div>
                        <label className="block mb-1 text-green-600">Occupation</label>
                        <input type="text" name="occupation" onChange={handleChange} value={charaData.occupation} className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
                    </div>
                    <div>
                        <label className="block mb-1 text-green-600">Likes</label>
                        <input type="text" name="likes" onChange={handleChange} value={charaData.likes} className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
                    </div>
                    <div>
                        <label className="block mb-1 text-green-600">Dislikes</label>
                        <input type="text" name="dislikes" onChange={handleChange} value={charaData.dislikes} className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
                    </div>
                    <div>
                        <label className="block mb-1 text-green-600">Physical Drescription</label>
                        <input type="text" name="physicalDescription" onChange={handleChange} value={charaData.physicalDescription} className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
                    </div>
                    <div>
                        <label className="block mb-1 text-green-600">Personality</label>
                        <input type="text" name="personality" onChange={handleChange} value={charaData.personality} className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
                    </div>
                    <div>
                        <label className="block mb-1 text-green-600">Background</label>
                        <input type="text" name="background" onChange={handleChange} value={charaData.background} className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
                    </div>
                    <div>
                        <label className="block mb-1 text-green-600">Setting</label>
                        <input type="text" name="setting" onChange={handleChange} value={charaData.setting} className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
                    </div>
                    <div>
                        <label className="block mb-1 text-green-600">Gender</label>
                        <input type="text" name="gender" onChange={handleChange} value={charaData.gender} className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
                    </div>
                    <div>
                        <label className="block mb-1 text-green-600">Avatar</label>
                        <input type="text" name="img" onChange={handleChange} value={charaData.img} className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
                    </div>
                    <div>
                        <label className="block mb-1 text-green-600">Tags</label>
                        <input type="text" name="Tags" onChange={handleChange} value={charaData.tag} className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
                    </div>

                    <button className="block w-full mt-5 bg-green-300 py-4 rounded hover:bg-green-600 transition duration-300">Create</button>
                </form>

            </div>
        </div>

    )


}

export default CreateCharaForm;