// Menu.js

import { Link } from "react-router-dom";

const styles = {
    navStyles: {
        color: 'red',
        backgroundColor: 'yellow',  // 수정: background → backgroundColor
        border: '2px solid blue',
        textDecoration: 'none'
    },
    listStyles: {
        display: 'inline',
        padding: '20px'
    }
}

const Menu = (props) => {
    return (
        <nav style={styles.navStyles}>
            <ul>
                <li style={styles.listStyles}>
                    <Link to='/'>홈페이지</Link>
                </li>
                <li style={styles.listStyles}>
                    <Link to='/first'>첫번째</Link>
                </li>
                <li style={styles.listStyles}>
                    <Link to='/second'>두번째</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;