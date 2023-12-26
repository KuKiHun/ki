/*
    라우팅
        - 여러개의 화면을 각각 다른 url 매핑하도록 하는 것

        [예] http://localhost:3000/         -> Home.js
        [예] http://localhost:3000/home     -> Home.js
        [예] http://localhost:3000/first    -> First.js
        [예] http://localhost:3000/second   -> Second.js

    라이브러리 설치 필요 : react-router-dom
*/
import '../App.css';

import Home from './pages/Home';
import First from './pages/First';
import Second from './pages/Second';
import Menu from './pages/Menu';
import Third from './pages/Third';
import Fourth from './pages/Fourth';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';

function App(){

    const [data, setData] = useState([
        {title : '영화0', img : 'movie0.jpg'},
        {title : '영화1', img : 'movie1.jpg'},
        {title : '영화2', img : 'movie2.jpg'},
        {title : '영화3', img : 'movie3.jpg'},
        {title : '영화4', img : 'movie4.jpg'},
        {title : '영화5', img : 'movie5.jpg'},

    ]);
    /*
        이미지파일은 경로까지 지정되면 추후에 편할 수 있음
    */

    return(
        <div className='App'>

                <BrowserRouter>
                    <Menu/>
                    <Routes>
                        <Route path='/'         element={<Home/>}/>
                        <Route path='/first'    element={<First   msg='리엑트의 세계에 오신 걸'/>}/>
                        <Route path='/second'   element={<Second  msg='리액트 즐기기'/>}/>
                        <Route path='/third'    element={<Third   datas={data}/>} />
                        <Route path='/fourth/:idx/:name' element={<Fourth datas={data}/>} />
                    </Routes>
                </BrowserRouter>
                <p className='App-header'>공통메뉴 영역</p>

        </div>
    );
}

export default App;