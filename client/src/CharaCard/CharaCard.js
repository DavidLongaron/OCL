import "./CharaCard.css";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from 'react-router-dom';
import CharaProfile from "../CharaProfile/CharaProfile";

const CharaCard=(props)=>{
    const tags= props.chara.Tags;
    const tagsName= tags.map(tag=>{ 
        return <button>{tag.tagName}</button>
        
       })

    return(
        <Router>
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
            <Route path="/chara/" element={<CharaProfile chara={props.chara} />}>
            </Route>
            </Routes>       
        </Router>
        
      

    )
}
export default CharaCard





