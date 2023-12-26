import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function BoardListComp () {
 
    //변수선언
    const [boards, setBoards] = useState([]);

    //렌더링 ( 화면 출력) 될때 서버에서 데이타 받아서 변수 지정
    useEffect(()=>{
        axios.get('/api/board')
        .then(result => {
            const boards = result.data;
            console.log(boards);
            setBoards([...boards]);
        });
    },[]);

    const navigate = useNavigate();

    function createBoard(){
        //alert('o');
        navigate('/api/insert-board');
    }

    //제목 클릭시
    function readBoard(evt, seq){
        evt.preventDefault(); //a 태그의 기본 기능 막기
        //alert(seq);

        navigate(`/api/view-board/${seq}`);
        // '/api/view-board' + seq

    }

    return (
        <div>
            <h2 className="text-center">Boards List</h2>
            <div className ="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>글번호</th>
                            <th>타이틀 </th>
                            <th>작성자 </th>
                            <th>작성일 </th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        //안에 리턴값 ()=>{} : (인자1) => {return 리턴값}  / 인자1 => 리던값
                            boards.map(board => 
                                <tr key={board.seq}>
                                    <td>{board.seq}</td>
                                    <td>
                                        {/* onClick={readBoard} 이벤트함수 연결 */}
                                        {/* onClick={()=>radBoard()}
                                            이벤트발생시 익명함수가 연결이 되고
                                            그 익명함수에서 readBoard() 호출
                                        */}
                                        <a onClick={(evt) => readBoard(evt, board.seq)}>
                                        {board.title}
                                        </a>
                                    </td>
                                    <td>{board.writer}</td>
                                    <td>{board.regdate}</td>
                                    <td>{board.cnt}</td>
                                </tr>
                                )
                       }
                    </tbody>
                </table>
            </div>         

            <div className="row">
                <button className="btn btn-primary" onClick={createBoard}>글작성</button>
            </div>

        </div>
    );

}

export default BoardListComp;
