import "./CharaList.css";
import CharaCard from "../CharaCard/CharaCard";



const CharaList=(props)=>{

    const charasArr=props.charas.map((chara,i)=>{
  
        return <CharaCard  key={i} chara={chara} />
    
    }) 
        return(
            <div>
            <div className="border-2 border-black flex">
            {charasArr.filter(chara=> chara!==undefined)}
            </div>
            </div>
                
        )
    }
    
    export default CharaList;