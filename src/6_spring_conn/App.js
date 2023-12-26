import { BrowserRouter, Route, Routes } from "react-router-dom";

import '../App.css';
import BoardListComp from './components/BoardListComp';
import HeaderComp from "./components/HeaderComp";
import 'bootstrap/dist/css/bootstrap.css';
import BoardInsertComp from "./components/BoardInsertComp";
import BoardViewComp from "./components/BoardViewComp";
import BoardUpdateComp from "./components/BoardUpdateComp";



function App(){
    return(
        <div>
            <BrowserRouter>

                <HeaderComp />

                <div className="container">
                    <Routes>
                        <Route exact path="/" element={<BoardListComp/>}></Route>
                        <Route path="/api/board" element={<BoardListComp/>}></Route>
                        {/* path의 url은 axios로 요청하는 url 다른 상황일 수 있지만 우선은 동일하게 */}
                        <Route path="/api/insert-board" element={<BoardInsertComp/>}></Route>
                        <Route path="/api/view-board/:seq" element={<BoardViewComp/>}></Route>
                        <Route path="/api/update-board/:seq" element={<BoardUpdateComp/>}></Route>

                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;