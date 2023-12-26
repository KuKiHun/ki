import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BoardUpdateComp() {
    // 사용자 입력값 저장할 변수
    const [title, setTitle] = useState('');
    const [writer, setWriter] = useState('');
    const [content, setContent] = useState('');

    const navigate = useNavigate();
    const [board,setBoard] = useState({});
    const {seq} = useParams();

    // 값 불러오기 
    useEffect(()=>{
        // alert(seq);
         axios.get(`/api/board/${seq}`)
         .then( result => {
             console.log(result);
             
             setBoard(result.data);
             setTitle(result.data.title);
             setWriter(result.data.writer);
             setContent(result.data.content);

         })
         .catch(error => {
             console.error('Error fetching data:', error);
         });
     },[]);
 

    // 취소버튼 클릭시
    const cancleBtnHandler = function () {
        navigate('/');
        // navigate(-1); //[JS] history.back() 역할
    };

    // 수정버튼 클릭시
    const updateBtnHandler = function () {
        let updateboard = {
            seq: seq,
            title: title,
            writer: writer,
            content: content
        };
        axios.put(`/api/board/update`,null, {params:updateboard})  // 수정: `seq`를 통해 경로를 동적으로 생성
          
            navigate('/');
         
         
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center"> 수정 작업을 해주세요</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> 제목 </label>

                                    <input
                                        type="text"
                                        placeholder="title"
                                        name="title"
                                        className="form-control"
                                        onChange={(e) => setTitle(e.target.value)}
                                        value={title}
                                    />
                                </div>
                                <div className="form-group">
                                    <label> 작성자 </label>
                                    <input
                                        type="text"
                                        placeholder="writer"
                                        name="writer"
                                        className="form-control"
                                        onChange={(e) => setWriter(e.target.value)}
                                        value={writer} // board.writer -> writer
                                    />
                                </div>
                                <div className="form-group">
                                    <label> 내용 </label>
                                    <textarea
                                        placeholder="content"
                                        name="content"
                                        className="form-control"
                                        onChange={(e) => setContent(e.target.value)}
                                        value={content}
                                    />
                                </div>
                                <button
                                    className="btn btn-success"
                                    onClick={updateBtnHandler}
                                >
                                    수정하기
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={cancleBtnHandler}
                                    style={{ marginLeft: "10px" }}
                                >
                                    취소하기
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoardUpdateComp;
