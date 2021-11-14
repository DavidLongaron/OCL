import "./CharaList.css";
import CharaCard from "../CharaCard/CharaCard";



const CharaList=(props)=>{

    const charasArr=props.charas.map((chara,i)=>{
  
        return <CharaCard  key={i} chara={chara} />
    
    }) 
        return(
           
            <div className="mx-auto charaList w-3/4 flex flex-wrap my-12 bg-gradient-to-r from-green-400 to-green-600 overflow-y-auto rounded">
            {charasArr.filter(chara=> chara!==undefined)}
            </div>
           
                
        )
    }
    
    export default CharaList;