
import {Link} from 'react-router-dom';

// a태그는 페이지가 바뀌기 떄문에 비동기 형식인 Link 쓴다
const Third = (props) => {

    const list = props.datas.map((data, idx)=>{
        return(
            <div key={idx}>
                <h3><Link to={`/fourth/${idx}/${data.title}`}>{data.title}</Link></h3>
                <img src={`imgs/${data.img}`}/>
            </div>
        );
    });

    // xxxx?cate=book&name=hong
    // xxxx/book/hong
    return(
        <div>
            여기는 세번째 페이지입니다.
            <hr/>
            <div>
                {list}
            </div>
        </div>
    );
}
export default Third;