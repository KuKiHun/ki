// 컴포넌트는 앞에 대문자 그리고 괄호안에 props 넣어주면 구별하기 쉬움
// props 화면출력담당
const First = (props) => {
    return(
        <div>
            여기는 첫번째 홈페이지
            <hr/>
            {props.msg}
        </div>
    )
}

export default First;