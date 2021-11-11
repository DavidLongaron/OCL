import "./CharaList.css";
import CharaCard from "../CharaCard/CharaCard";
const CharaList=(props)=>{

  console.log(props);
    const charasArr=props.charas.map((chara,i)=>{
  
        return <CharaCard  key={chara.id} chara={chara} />
    
    }) 
        return(
            <div className="border-2 border-black flex">
            {charasArr.filter(chara=> chara!==undefined)}
            </div>
        )
    }
    
    export default CharaList;