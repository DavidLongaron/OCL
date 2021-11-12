import "./CharaCard.css";
import {Link} from 'react-router-dom';
import CharaProfile from "../CharaProfile/CharaProfile";
import { useContext } from 'react';
import {charaContext} from '../App'

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
    const changeCharaHandler= e=>{
        setCharaData(props.chara)
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





