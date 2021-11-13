import "./CharaCard.css";
import {Link} from 'react-router-dom';
import { userContext } from "../App";
import { useContext, useState } from 'react';
import {charaContext} from '../App'
import ApiService from "../ApiServices";
const CharaCard=(props)=>{
    const tags= props.chara.Tags;
    let counter=0;
    const tagsName= tags.map(tag=>{
        let tagName;
        if(tag.tagName) tagName=tag.tagName;
        else {tagName=tag}
        counter++;
        return <button key={counter}>{tagName}</button>
    })
    const [charaData, setCharaData] =useContext(charaContext);
    const[favorited,setFavorited]=useState(false);
    const [user,setUser]=useContext(userContext);
    const changeCharaHandler=(e)=>{
        e.preventDefault();
        setCharaData(props.chara)
    }
    const handleFavorites = async()=>{
        console.log(user)
        console.log(props.chara)
      const favoStatus=await ApiService.updateFavorite(props.chara,user.id);
      console.log(favoStatus);

    }

    return(
        <div onClick={changeCharaHandler}>
          
        <div className="flex border-2 border-green-400 box-border ">
        <Link to={`/chara/${props.chara.id}`}> 
            <div className="chara-avatar">            
                <img alt="icon" src={props.chara.img} />
                
            </div>
        </Link>
         <div className="chara-content">
             <button onClick={()=>{ setFavorited(!favorited); handleFavorites();}} ><svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${favorited?"text-green-600":"text-gray-400"} `} viewBox="0 0 20 20" fill="currentColor">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
</svg></button>
            <h6  className= "content" >{props.chara.name} </h6>
            <h6 className="content">{props.chara.setting}</h6>
            <h6 className="content">{props.chara.gender}</h6>
            {tagsName}
         </div>
        </div>
       
            </div>    
        
        
      

    )
}
export default CharaCard





