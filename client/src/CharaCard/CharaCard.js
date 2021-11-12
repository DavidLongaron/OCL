import "./CharaCard.css";
import {
    Route,
    Link,
    Routes
} from 'react-router-dom';
import CharaProfile from "../CharaProfile/CharaProfile";
import { useContext } from 'react';
import {charaContext} from '../App'

const CharaCard=(props)=>{
    const tags= props.chara.Tags;
    const tagsName= tags.map(tag=>{return <button>{tag.tagName}</button>})
    const [charaData, setCharaData] =useContext(charaContext);
    const changeCharaHandler= e=>{
        setCharaData(props.chara)
    }
    
    return(
        <div onClick={changeCharaHandler}>
        <Link to={`/chara/${props.chara.id}`}>   
        <div className="flex border-2 border-green-400 box-border ">
            <div className="chara-avatar">
                <img alt="icon" src={props.chara.img} />
            </div>
         <div className="chara-content">
            <h6  className= "content" >{props.chara.name} </h6>
            <h6 className="content">{props.chara.setting}</h6>
            <h6 className="content">{props.chara.gender}</h6>
            {tagsName}
         </div>
        </div>
        </Link>
            <Routes>
            <Route path={`/chara/${props.chara.id}`} element={<CharaProfile chara={props.chara} />}>
            </Route>
            </Routes>   
            </div>    
        
        
      

    )
}
export default CharaCard





