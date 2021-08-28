import { Link } from 'react-router-dom';

export default function Layout(props) {
    const { currentUser, handleLogout } = props;
    return (
        <header className="text-white">
            {currentUser ? (
                
                <div className="bg-blue-500"  >
                    <h1 >Textbook Rails</h1>
                    <h3>{currentUser.username}</h3>
                    <button onClick={handleLogout}>Logout</button>
                </div>
                
            ) : (
                <div className="bg-yellow-300">
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                <Link  to='/categories'>Categories</Link>
                <Link to='/textbooks'>Textbooks</Link>
                <Link to='/textbooks/new'>Add</Link>
                
                </div>
            )}
            <hr />
            {currentUser && (
                <div className="bg-blue-500">
                    <Link className="m-3" to='/textbooks'>Textbooks</Link>
                    <Link className="m-3" to='/categories'>Categories</Link>
                    <Link className="m-3" to='/add/textbooks'>Add your textbook</Link>
                </div>
            )}
            <div className="mt-20 text-black">{props.children}</div>
            
        </header>
    );
}