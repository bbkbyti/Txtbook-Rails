
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Layout(props) {
    const { currentUser, handleLogout } = props;
    return (
        <div>
            <Navbar currentUser={currentUser} handleLogout={handleLogout} />
            <div className="mt-20 text-black">{props.children}</div>
            <div>
            <Footer />
            </div>
        </div>
        
                    

    );
}