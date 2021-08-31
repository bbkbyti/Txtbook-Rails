import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import DropDown from '../components/DropDown';

export default function Layout(props) {
    const { currentUser, handleLogout } = props;
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        const hideMenu = () => {
            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false);
            }
        };
        window.addEventListener("resize", hideMenu);

        return () => {
            window.removeEventListener("resize", hideMenu);
        };
    });

    return (
        <div>
            <DropDown isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}  currentUser={currentUser} handleLogout={handleLogout} />
            <div className="text-black">{props.children}</div>
            <div>
                <Footer />
            </div>
        </div>



    );
}