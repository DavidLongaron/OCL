import "./CharaCard.css";
import { Link } from 'react-router-dom';
import { userContext } from "../App";
import { useContext, useState, useEffect } from 'react';
import { charaContext } from '../App'
import ApiService from "../ApiServices";
const CharaCard = (props) => {
    //! Ask about how to set favorites
    const tags = props.chara.Tags;
    let counter = 0;
    const tagsName = tags.map(tag => {
        let tagName;
        if (tag.tagName) tagName = tag.tagName;
        else { tagName = tag }
        counter++;
        return <button className="mx-2 h-4" key={counter}>{tagName}</button>
    })
    const [charaData, setCharaData] = useContext(charaContext);
    const [favorited, setFavorited] = useState(false);
    const [user, setUser] = useContext(userContext);
    const [ogList, setOgList]= props.charasStatus
    const changeCharaHandler = (e) => {
        e.preventDefault();
        setCharaData(props.chara)
    }
    const handleFavorites = async () => {
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAH")
        setFavorited(!favorited);
        await ApiService.updateFavorite(props.chara, user.id)
      
            const newList= ogList.map((chara)=>{
                if(chara.id===props.chara.id){
                     chara.status===true?chara.status=false:chara.status=true;
                }
                return chara;
            })
            console.log("NEW LIST",newList);
            setOgList(newList);
           
            
            
        
       
       
       
    }
        // setFavorited(!favorited)
        


    useEffect(() => {
        console.log(user);
      
        // (() => {
            if(!user.id){ setFavorited(false)}
           else if (props.chara.status) {
                setFavorited(true);
            }
            else {
                setFavorited(false);
            }
        // })();

    }, [props.chara.status,ogList, user]);


    return (
        <div onClick={changeCharaHandler} className="flex mt-14 mx-5 h-48 w-96 border-2 box-border rounded bg-white">

            <Link to={`/chara/${props.chara.id}`} className="image h-full w-1/2  " style={{ backgroundImage: `url("${props.chara.img}")` }}>
            </Link>
            <div className="chara-content w-1/2">
                <div className="  w-full flex  flex-row-reverse mr-12 mt-2">
                    <button className="mr-4" onClick={() =>  handleFavorites()} ><svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${favorited ? "text-green-600" : "text-gray-400"} `} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg></button>
                </div>
                <div className="ml-4">
                    <h6 className="content" >{props.chara.name} </h6>
                    <h6 className="content">{props.chara.setting}</h6>
                    <h6 className="content">{props.chara.gender}</h6>
                </div>
                <div className=" border-2 border-dashed h-1/3  border-green-400 flex flex-wrap w-4/5 mx-4 overflow-y-auto">
                    {tagsName}
                </div>
            </div>
        </div>





    )
}
export default CharaCard





