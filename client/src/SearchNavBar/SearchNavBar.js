import {Link} from 'react-router-dom';
import CharaList from '../CharaList/CharaList';
import { useState } from 'react';
const SearchNavBar =(props)=>{

    // const [charas, setCharas]=useState(props.charas);
    const [tagSearched,setTagSearched]=useState("");
    const [filteredCharas, setFilteredCharas]= useState([]);
   const handleSearchTag=(e)=>{
        e.preventDefault();
        setFilteredCharas(props.charas.filter((chara)=>{      
            for( const el of chara.Tags){
                if(el.tagName===tagSearched) return true;               
            } 
            return false;          
            }
            ))
           
    }


    return(
        <div>
        <div>
      <nav className="bg-white border-2 border-green-600">
          <div className=" px-8 max-w-auto">
            <div className="flex justify-between">
               <div className="flex space-x-4"> 
          <div>
              <form className="flex items-center py-5 px-2" onSubmit={handleSearchTag}>
              <input onChange={(e)=>setTagSearched(e.target.value)} value={tagSearched} type="text" placeholder="Search by tag..." className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
              <svg xmlns="http://www.w3.org/2000/svg" onClick={handleSearchTag} className="h-6 w-6 ml-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
         
              </form>
              </div>
            </div>
          <div className="flex items-center space-x-1">
            <Link to="/signup" className="py-2 px-3 text-white bg-green-600 rounded-lg shadow hover:bg-green-400 transition duration-300">Favorites</Link>
          </div>
          </div>
          </div>
      </nav>
      </div>
        <CharaList charas={tagSearched.length?filteredCharas:props.charas} />
      </div>
    )


}


export default SearchNavBar