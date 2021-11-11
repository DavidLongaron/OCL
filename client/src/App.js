
import './App.css';
import CharaList from './CharaList/CharaList'
import NavBar from './NavBar/NavBar';
import {useState,useEffect} from 'react';
import ApiService from './ApiServices.js';
import CreateCharaForm from './CreateCharaForm/CreateCharaForm';
function App() {
  const [charas,setCharas]=useState([]);
  useEffect(()=>{
   
    (async function(){
      const charas= await ApiService.getCharas();
      setCharas(charas);
    })();

  },[]);



  return (
    <div className="App">
      <NavBar/>
      <CharaList charas={charas}/>
      <CreateCharaForm />
    </div>
  );
}

export default App;
