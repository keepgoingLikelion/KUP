import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from "react";

import Main from './pages/main.js';
import ModifyPost from './pages/modifyPost.js';
import MyPage from './pages/myPage.js';
import MyPartyPost from './pages/myPartyPost.js';
import PartyPost from './pages/partyPost.js';
import PostPost from './pages/postPost.js';
import SignIn from './pages/signIn.js';
import SignUp from './pages/signUp.js';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path={"/"} element={<Mapping />}></Route>
        <Route path={"/main"} element={<Main/>}></Route>
        <Route path={"/modifyPost"} element={<ModifyPost/>}></Route>
        <Route path={"/myPage"} element={<MyPage/>}></Route>
        <Route path={"/myPartyPost"} element={<MyPartyPost/>}></Route>
        <Route path={"/PartyPost"} element={<PartyPost/>}></Route>
        <Route path={"/PostPost"} element={<PostPost/>}></Route>
        <Route path={"/signIn"} element={<SignIn/>}></Route>
        <Route path={"/signUp"} element={<SignUp/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

/**
 * 매핑함수
 * TODO 다른 페이지로 넘어가라하는 것을 막을 때등, 페이지 이동을 강제로 연결할 때 쓰기
 */
function Mapping(){
  var nav=useNavigate();
  useEffect(() => {
      nav("/signUp")
  }, [nav]);
  
  return null;
}

/**
 * 다른 페이지로 이동했을 때 상단으로 스크롤
 * @returns 
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default App;
