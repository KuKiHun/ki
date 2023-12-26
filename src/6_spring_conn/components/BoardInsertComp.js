import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BoardInsertComp () {

    //사용자 입력값 저장할 변수
    const [title, setTitle] = useState('');
    const [writer, setWriter] = useState('');

    const [content, setContent] = useState('');


    const navigate = useNavigate();

    // 취소버튼 클릭시

    const cancleBtnHandler = function(){
        navigate('/'); // 홈페이지로 이동
        //navigate(-1); //[JS] history.back() 역할
    }

    //저장버튼 클릭시
    const saveBtnHandler = function(){
        //evt.preventDefault();
        //alert(title + "/" + writer + "/" + content);
        let board = {
            title : title,
            writer : writer,
            content : content
        }
        axios.post('/api/board/write', null, {params:board});

    }

    return (
        <div>
            <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">새글을 작성해주세요</h3>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group">
                                    <label> 제목 </label>
                                    <input type="text" placeholder="title" name="title" className="form-control" 
                                    onChange={(evt)=>setTitle(evt.target.value)}/>                             </div>
                                <div className = "form-group">
                                    <label> 작성자 </label>
                                    <input type="text" placeholder="writer" name="writer" className="form-control"
                                     onChange={(evt)=>setWriter(evt.target.value)} />
                                </div>
                                <div className = "form-group">
                                    <label> 내용  </label>
                                    <textarea placeholder="content" name="content" className="form-control"
                                     onChange={(evt)=>setContent(evt.target.value)} />
                                </div>
                                <button className="btn btn-success" onClick={saveBtnHandler}>저장하기</button>
                                <button className="btn btn-danger" onClick={cancleBtnHandler} style={{marginLeft:"10px"}}>취소하기</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BoardInsertComp;