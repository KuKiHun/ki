/*
    라우팅
        - 여러개의 화면을 각각 다른 url 매핑하도록 하는 것

        [예] http://localhost:3000/          -> Home.js
             http://localhost:3000/home     -> Home.js
             http://localhost:3000/first     -> First.js
             http://localhost:3000/second     -> Second.js

라이브러리 설치 필요 : npm install react-router-dom
*/


import '../App.css';

import Home from './pages/Home';
import First from './pages/First';
import Second from './pages/Second';
import Menu from './pages/Menu';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App(){
    return(
        <div className='App'>
            <BrowserRouter>
            <Menu/>
                <Routes>
                    <Route path='/'         element={<Home/>}/>
                    <Route path='/first'    element={<First/>}/>
                    <Route path='/second'   element={<Second/>}/>
                </Routes>
            </BrowserRouter>
            <p className='App-header'>공통메뉴 영역</p>
        </div>
    );
}

export default App;