import React from 'react';
import "./CharaProfile.css";
function CharaProfile (props){
    console.log(props.chara)
    return (
    
    <div className="flex mx-12 border profile">
        <div className="mr-24  w-1/6 flex flex-col justify-center rounded">

            <div className="image h-52 rounded-t border border-green-700" style={{backgroundImage:`url("${props.chara.img}")`}}>                
            </div>

            <div className="border bg-green-700">

            <div className="border-b border-green-400 py-4 flex justify-center">
            <h1 className="text-2xl font-extrabold text-white">{props.chara.name}</h1>
            </div>

            <div className="py-5  rounded-b-lg pl-4">
            <h4 className="text-white pb-3">Gender: {props.chara.gender}</h4>
            <h4 className="text-white pb-3"> Age: {props.chara.age}</h4>
            <h4 className="text-white pb-3">BirthDay: {props.chara.birthDay}</h4>
            <h4 className="text-white pb-3">Setting: {props.chara.setting}</h4>
            </div>

            </div>

        </div>

        <div className="w-3/5 flex flex-col mt-24">

         <div className=" bg-green-400 text-white text-lg font-extrabold w-full flex justify-center py-3 border-t-0 rounded-t ">
        <h2 className="self-center">General Information</h2>
         </div>

         <div className="w-full y-full bg-green-100 py-12 pl-4">
            <h4 className="pb-3">Occupation: {props.chara.occupation}</h4>
            <h4 className="pb-3"> Likes: {props.chara.likes}</h4>
            <h4 className="pb-3">Dislikes: {props.chara.dislikes}</h4>
            <h4 className="pb-3">Physical Description: {props.chara.physicalDescription}</h4>
            <h4 className="pb-3">Personality: {props.chara.Personality}</h4>
            <h4 className="pb-3">Background: {props.chara.background}</h4>
            <h4 className="pb-3">Tags: {props.chara.background}</h4>
         </div>

        </div>

    </div>
    
    )
}
 
export default CharaProfile;