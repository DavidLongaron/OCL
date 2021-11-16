import "./CharaList.css";
import CharaCard from "../CharaCard/CharaCard";
// import ApiService from "../ApiServices";
// import { useContext, useState } from 'react';
// import { userContext } from "../App";

const CharaList = (props) => {

    // const searchFavorite = async (chara, id) => {
    //     const favorite = await ApiService.getFavorite(chara, id)
    //     return favorite;
    // }
    // const [user, setUser] = useContext(userContext);
    const charasArr = props.charas.map((chara, i) => {
  
        // if (user) {
        //     const favoriteStatus =  searchFavorite(chara.id, user.id)
        //     console.log(favoriteStatus)
        // }
        return <CharaCard key={i} chara={chara} />

    })
    // .filter(chara => chara !== undefined)

    return (

        <div className="mx-auto charaList w-3/4 flex flex-wrap my-12 bg-gradient-to-r from-green-400 to-green-600 overflow-y-auto rounded">
            {charasArr}
        </div>


    )
}

export default CharaList;