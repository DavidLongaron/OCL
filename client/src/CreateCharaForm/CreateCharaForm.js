import { useState } from "react";
import ApiService from "../ApiServices"
import { Link} from 'react-router-dom';
const CreateCharaForm=()=>{
    const defaultData={UserId:"1",name:"", age:"", birthDay:"", occupation:"", likes:"", dislikes:"", physicalDescription:"", personality:"", background:"", setting:"", gender:"", img:"", tag:""};
    const [charaData,setCharaData ]= useState(defaultData);
    const sendChara =(e)=>{

        e.preventDefault();
        ApiService.postChara(charaData);
        e.target.reset();
        setCharaData(defaultData);
    }
    function handleNameChange(e){
        setCharaData({...charaData, name:e.target.value})
    }
    function handleAgeChange(e){
        setCharaData({...charaData, age:e.target.value})
    }
    function handleBirthDayChange(e){
        setCharaData({...charaData, birthDay:e.target.value})
    }
    function handleOccupationChange(e){
        setCharaData({...charaData, occupation:e.target.value})
    }
    function handleLikesChange(e){
        setCharaData({...charaData, likes:e.target.value})
    }
    function handleDislikesChange(e){
        setCharaData({...charaData, dislikes:e.target.value})
    }
    function handlePhysicalDescriptionChange(e){
        setCharaData({...charaData, physicalDescription:e.target.value})
    }
    function handlePersonalityChange(e){
        setCharaData({...charaData,personality:e.target.value})
    }
    function handleBackgroundChange(e){
        setCharaData({...charaData, background:e.target.value})
    }
    function handleSettingChange(e){
        setCharaData({...charaData, setting:e.target.value})
    }
    function handleGenderChange(e){
        setCharaData({...charaData, gender:e.target.value})
    }
    function handleImgChange(e){
        setCharaData({...charaData, img:e.target.value})
    }
    function handleTagChange(e){
        setCharaData({...charaData, tag:e.target.value})
    }


 return(
   <div className="min-h-screen flex items-center justify-center bg-green-600" onSubmit={sendChara}>
       <div className="bg-white p-16 rounder shadow-2x1 w-1/3">
       <h2 className="text-3xl font-bold mb-10 text-green-800">Create a Character</h2>
       <form className="space-y-8">
        <div>
            <label className="block mb-1 text-green-600">Name</label>
            <input type="text" onChange={handleNameChange} value={charaData.name} className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
        </div>
        <div>
            <label className="block mb-1 text-green-600">Age</label>
            <input type="text" onChange={handleAgeChange} value={charaData.age} className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
        </div>
        <div>
            <label className="block mb-1 text-green-600">BirthDay</label>
            <input type="text" onChange={handleBirthDayChange} value={charaData.birthDay} className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
        </div>
        <div>
            <label className="block mb-1 text-green-600">Occupation</label>
            <input type="text" onChange={handleOccupationChange} value={charaData.occupation} className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
        </div>
        <div>
            <label className="block mb-1 text-green-600">Likes</label>
            <input type="text" onChange={handleLikesChange} value={charaData.likes} className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
        </div>
        <div>
            <label className="block mb-1 text-green-600">Dislikes</label>
            <input type="text" onChange={handleDislikesChange} value={charaData.dislikes} className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
        </div>
        <div>
            <label className="block mb-1 text-green-600">Physical Drescription</label>
            <input type="text" onChange={handlePhysicalDescriptionChange} value={charaData.physicalDescription} className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
        </div> 
        <div>
            <label className="block mb-1 text-green-600">Personality</label>
            <input type="text" onChange={handlePersonalityChange} value={charaData.personality} className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
        </div>
        <div>
            <label className="block mb-1 text-green-600">Background</label>
            <input type="text" onChange={handleBackgroundChange} value={charaData.background} className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
        </div>
        <div>
            <label className="block mb-1 text-green-600">Setting</label>
            <input type="text" onChange={handleSettingChange} value={charaData.setting} className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
        </div>
        <div>
            <label className="block mb-1 text-green-600">Gender</label>
            <input type="text" onChange={handleGenderChange} value={charaData.gender} className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
        </div>
        <div>
            <label className="block mb-1 text-green-600">Avatar</label>
            <input type="text" onChange={handleImgChange} value={charaData.img} className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
        </div>
        <div>
            <label className="block mb-1 text-green-600">Tag</label>
            <input type="text" onChange={handleTagChange} value={charaData.tag} className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
        </div>
       
        <Link to={`/`}> <button className="block w-full bg-green-300 py-4 rounded hover:bg-green-600 transition duration-300">Create</button> </Link>
       </form>

       </div>
   </div>

 )


}

export default CreateCharaForm;