import React from 'react';
 
function CharaProfile (props){
    return (
    
    <div>
        <div>
            <img alt="avatar" src={props.chara.img}/>
            <h3>{props.chara.name}</h3>
            <h4>Gender: {props.chara.gender}</h4>
            <h4> Age: {props.chara.gender}</h4>
            <h4>BirthDay: {props.chara.gender}</h4>
            <h4>Setting: {props.chara.gender}</h4>
        </div>
        <div>
        <div>General Information</div>
        <div>
            <h4>Occupation: {props.chara.occupation}</h4>
            <h4> Likes: {props.chara.likes}</h4>
            <h4>Dislikes: {props.chara.dislikes}</h4>
            <h4>Setting: {props.chara.gender}</h4>
        </div>

        </div>

    </div>
    
    )
}
 
export default CharaProfile;