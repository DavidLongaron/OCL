
import './App.css';
import CharaList from './CharaList/CharaList'
import NavBar from './NavBar/NavBar';
import {useState,useEffect, createContext} from 'react';
import ApiService from './ApiServices.js';
import CreateCharaForm from './CreateCharaForm/CreateCharaForm';
import CharaProfile from './CharaProfile/CharaProfile';
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



  return (
    <Router>
      <charaContext.Provider value={[charaData,setCharaData]}>   
         <NavBar/>
    <Routes>
            <Route path={`/`} element={<CharaList charas={charas} />}>
            </Route>
            <Route path={`/chara/${charaData.id}`} element={<CharaProfile chara={charaData} />}>
            </Route>
            <Route path={`/createchara`} element={<CreateCharaForm chara={charaData} />}>
            </Route>
   </Routes>       
   </charaContext.Provider>
    </Router>
  );
}

export default App;
