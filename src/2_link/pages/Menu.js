// Menu.js

import { Link } from "react-router-dom";

import './Menu.css';

const Menu = (props) => {
    return(
        <div className="nav">
            <Link to='/'>홈페이지</Link>
            <Link to='/first'>첫번째</Link>
            <Link to='/second'>두번째</Link>
            <Link to='/third'>세번째</Link>

        </div>
    );
}

export default Menu;