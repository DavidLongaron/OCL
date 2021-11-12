import {Link} from 'react-router-dom';
import CharaList from '../CharaList/CharaList';
import { useState } from 'react';
const SearchNavBar =(props)=>{
    console.log(props.charas);
    const [charas, setCharas]=useState(props.charas);
    const [tagSearched,setTagSearched]=useState("");

   const handleSearchTag=(e)=>{
        e.preventDefault();
        setCharas(charas.filter((chara)=>chara.Tags.includes(tagSearched)))
    }


    return(
        <div>
        <div>
      <nav className="bg-white border-2 border-green-600">
          <div className=" px-8 max-w-auto">
            <div className="flex justify-between">
               <div className="flex space-x-4"> 
          <div>
              <form className="flex items-center py-5 px-2">
              <input onChange={(e)=>setTagSearched(e.value)} type="text" placeholder="SearchChara" className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
         
              </form>
              </div>
            </div>
          <div className="flex items-center space-x-1">
            <Link to="/login" className="py-2 px-3 text-white hover:bg-green-700 transition duration-300 rounded-lg">Login</Link>
            <Link to="/signup" className="py-2 px-3 text-white bg-green-600 rounded-lg shadow hover:bg-green-400 transition duration-300">Signup</Link>

          </div>
          </div>
          </div>
      </nav>
      </div>
        <CharaList charas={props.charas} />
      </div>
    )


}


export default SearchNavBar