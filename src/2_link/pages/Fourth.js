// Fourth.js

import { useParams } from "react-router-dom";

const Fourth = (props) => {

    const {idx, name} = useParams();
    // 동적으로 이미지 파일명을 구성
    const imgPath = `/imgs/movie${idx}.jpg`;

    return(
        <div>
            여기는 네번째 페이지 - 영화 상세 페이지
            <hr/>
            <div> {idx} : [{name}] </div>
            <img src={imgPath} />
            {/* <img src={`/imgs/${props.datas[idx].img}`}/> */}
        </div>
    );
}

export default Fourth;