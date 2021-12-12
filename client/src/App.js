
import './App.css';
import NavBar from './NavBar/NavBar';
import { useState, useEffect, createContext } from 'react';
import ApiService from './ApiServices.js';
import CreateCharaForm from './CreateCharaForm/CreateCharaForm';
import CharaProfile from './CharaProfile/CharaProfile';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import SearchNavBar from './SearchNavBar/SearchNavBar';
import LoggedNavBar from './LoggedNavBar/LoggedNavBar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
const defaultData = { UserId: "", name: "", age: "", birthDay: "", occupation: "", likes: "", dislikes: "", physicalDescription: "", personality: "", background: "", setting: "", gender: "", img: "", Tags: "", id: "" };
export const charaContext = createContext({
  charaData: defaultData,
  setCharaData: () => { },
});
export const userContext = createContext({
  user: { username: "guest", password: "1", email: "none" },
  setUser: () => { },
  login: (username, password) => {/*login setUser(username,password)*/ },
})
function App() {


  const [charaData, setCharaData] = useState(defaultData)
  const [user, setUser] = useState("")
  const [charaFormUp, setCharaFormUp] = useState(false);
  console.log(user);
  const [charas, setCharas] = useState([]);
  useEffect(() => {

    (async function () {
      const charas = await ApiService.getCharas();
      setCharas(charas);
    })();

  }, [charaFormUp]);
  let displayedNavBar;
  const choosedNavBar = () => {
    user.username ? displayedNavBar = <LoggedNavBar /> : displayedNavBar = <NavBar />
    return displayedNavBar;
  }
  return (
    <Router>
      <charaContext.Provider value={[charaData, setCharaData]}>
        <userContext.Provider value={[user, setUser]}>
          {choosedNavBar()}

          <Routes>
            <Route path={`/`} element={<SearchNavBar charas={charas} />}>
            </Route>
            <Route path={`/chara/${charaData.id}`} element={<CharaProfile chara={charaData} />}>
            </Route>
            <Route path={`/createchara`} element={<CreateCharaForm allCharas={[charas, setCharas]} setCharaFormUp={setCharaFormUp} charaFormUp={charaFormUp} />}>
            </Route>
            <Route path={`/login`} element={<Login />}>
            </Route>
            <Route path={`/signup`} element={<SignUp />}>
            </Route>
          </Routes>
        </userContext.Provider>
      </charaContext.Provider>
    </Router>
  );
}

export default App;
