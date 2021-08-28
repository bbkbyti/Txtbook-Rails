import { Link } from 'react-router-dom';

export default function Layout(props) {
    const { currentUser, handleLogout } = props;
    return (
        <header>
            <h1>Textbook Rails</h1>
            {currentUser ? (
                <div>
                    <p>{currentUser.username}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                <Link to='/categories'>Categories</Link>
                <Link to='/textbooks'>Textbooks</Link>
                </div>
            )}
            <hr />
            {currentUser && (
                <div>
                    <Link to='/textbooks'>Textbooks</Link>
                    <Link to='/categories'>Categories</Link>
                </div>
            )}
            {props.children}
        </header>
    );
}