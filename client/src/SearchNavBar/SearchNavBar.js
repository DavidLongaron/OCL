import { Link } from 'react-router-dom';
import CharaList from '../CharaList/CharaList';
import { useState, useContext, useEffect } from 'react';
import ApiService from "../ApiServices";
import { userContext } from "../App";

const SearchNavBar = ({ charas }) => {

    const [tagSearched, setTagSearched] = useState("");
    const [filteredCharas, setFilteredCharas] = useState([]);
    const [favoritedCharas, setFavoriteCharas] = useState([]);
    const [user, setUser] = useContext(userContext);
    const [favoriteActive, setFavoriteActive] = useState(false);

    const handleTagSearchChange = (e) => {
        const search = e.target.value;

        setTagSearched(search)

        const filtered = charas.filter((chara) => {
            for (const el of chara.Tags) {
                if (el.tagName === search) return true;
            }
            return false;
        })

        setFilteredCharas(filtered.length ? filtered : charas)
    }
    const submitTagSearch = (e) => {
        e.preventDefault();
        const filtered = charas.filter((chara) => {
            for (const el of chara.Tags) {
                if (el.tagName === tagSearched) return true;
            }
            return false;
        })

        setFilteredCharas(filtered.length ? filtered : charas)
    }
    useEffect(() => {
        (async function () {
            if (user.id) {
                const favs = await ApiService.getFavorite();
                const favChar = charas.map((char) => {
                    for (let el of favs) {
                        // if(char.status) char.status=false; 
                        if (el.UserId === user.id && el.CharaId === char.id) {
                            char.status = true;
                        }
                    }
                    return char;
                })
                setFavoriteCharas(favChar)
            }
            else {
                setFavoriteActive(false);
            }
        })();
    }, [user, charas,favoriteActive]);

    return (
        <div>
            <div>
                <nav className="bg-white border-2 border-green-600">
                    <div className=" px-8 max-w-auto">
                        <div className="flex justify-between">
                            <div className="flex space-x-4">
                                <div>
                                    <form onSubmit={submitTagSearch} className="flex items-center py-5 px-2">
                                        <input onChange={handleTagSearchChange} value={tagSearched} type="text" placeholder="Search by tag..." className=" border-2 border-gray-200 p-2 rounded outline-none focus:border-green-800  "></input>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>

                                    </form>
                                </div>
                            </div>

                            <div className="flex items-center space-x-1">
                                <button onClick={() => { setFavoriteActive(!favoriteActive) }} className="py-2 px-3 text-white bg-green-600 rounded-lg shadow hover:bg-green-400 transition duration-300">{favoriteActive ? "All" : "Favorites"}</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div >
                <CharaList charas={(() => {
                    if (favoriteActive){ 
                        console.log("FAVACTIVE",favoriteActive)
                        return favoritedCharas.filter(chara => chara.status===true)}
                    else if (tagSearched.length){ return filteredCharas}
                    else {return charas}
                })()} />
            </div>
        </div>
    )


}


export default SearchNavBar