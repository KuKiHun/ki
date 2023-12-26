import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BoardViewComp(){

    const {seq} = useParams(); // {seq, title} 파라메터가 여러개인 경우

    const [board,setBoard] = useState({});

    useEffect(()=>{
       // alert(seq);
        axios.get(`/api/board/${seq}`)
        .then( result => {
            console.log(result);
            setBoard(result.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    },[]);

    const navigate = useNavigate();

    //삭제버튼이 클릭했을 때
    //function deleteBoard(seq){
        const deleteBoard = function(seq) {
            if (window.confirm('정말로 삭제하시겠습니까?')) {
                axios.delete(`/api/board/${seq}`)
                    .then(result => {
                        navigate("/api/board");
                    })
                    .catch(error => {
                        console.error('Error deleting data:', error);
                        if (error.response && error.response.status === 404) {
                            alert('해당 글이 존재하지 않습니다.'); // 또는 다른 조치를 취할 수 있음
                        } else {
                            alert('글 삭제 중 오류가 발생했습니다.');
                        }
                    });
            }
        };

    const updateBoard = function () {
        // 수정 페이지로 이동하는 동작을 추가하려면 여기에 구현
        navigate(`/api/update-board/${seq}`); // 수정: `seq`를 넘겨줄 수 있도록
        console.log("Go to modify page");
    }

    return(
        <div>
            <div className='col-md-6 offset-md-3'>
                <h3 className='text-center'> 게시글 보고 </h3>
                <div className='card-body'>
                    <div className='row'>
                    <div className='alert alert-success'>제목</div>
                        <div className="alert alert-warning">{board.title}</div>
                    </div>

                    <div className='row'>
                        <div className='alert alert-success'>작성자</div>
                        <div className="alert alert-warning">{board.writer}</div>
                    </div>

                    <div className='row'>
                        <div className='alert alert-success'>내용</div>
                        <div className="alert alert-warning">{board.content}</div>
                    </div>


                    <button className='btn btn-primary' style={{ marginLeft: '10px' }} 
                    onClick={() => navigate("/")}>글목록으로 이동</button>
                    <button className="btn btn-warning" onClick={()=>deleteBoard(board.seq)}>삭제</button>
                    <button className="btn btn-warning" onClick={()=>updateBoard(board.seq)}>수정</button>
                </div>
            </div>
        </div>
    )

}

export default BoardViewComp;