
import './App.css';
import NavBar from './NavBar/NavBar';
import {useState,useEffect, createContext} from 'react';
import ApiService from './ApiServices.js';
import CreateCharaForm from './CreateCharaForm/CreateCharaForm';
import CharaProfile from './CharaProfile/CharaProfile';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import SearchNavBar from './SearchNavBar/SearchNavBar';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';
const defaultData={UserId:"1",name:"", age:"", birthDay:"", occupation:"", likes:"", dislikes:"", physicalDescription:"", personality:"", background:"", setting:"", gender:"", img:"", tag:"",id:""};
export const charaContext= createContext({
  charaData:defaultData,
  setCharaData: ()=>{}
});
function App() {
  
  const [charaData,setCharaData]= useState(defaultData)
  // const charaValue= useMemo(
  //   ()=> ({charaData,SetCharaData}),
  //   [charaData]
  // )
  const [charas,setCharas]=useState([]);
  useEffect(()=>{
   
    (async function(){
      const charas= await ApiService.getCharas();
      setCharas(charas);
    })();

  },[]);
const allCharas=[charas,setCharas];


  return (
    <Router>
      <charaContext.Provider value={[charaData,setCharaData]}>   
         <NavBar/>

    <Routes>
            <Route path={`/`} element={<SearchNavBar charas={charas} />}>
            </Route>
            <Route path={`/chara/${charaData.id}`} element={<CharaProfile chara={charaData} />}>
            </Route>
            <Route path={`/createchara`} element={<CreateCharaForm allCharas={allCharas} />}>
            </Route>
            <Route path={`/login`} element={<Login />}>
            </Route>
            <Route path={`/signup`} element={<SignUp />}>
            </Route>
   </Routes>       
   </charaContext.Provider>
    </Router>
  );
}

export default App;
